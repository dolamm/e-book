import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NavDetail } from '../Detail-book/NavDetail';
import { Footer } from '../Layout/BookFooter';
import "../../css/Category/AllCategory.css"
import { FaFilter, FaLongArrowAltRight } from "react-icons/fa";
import BookItem from "../Books/BookListItem";
import { useDispatch, useSelector } from "react-redux";
import {getCategories, filterBookWithCategory } from "@redux/actions/BookAction"
import $ from 'jquery';
import { async } from "q";
export function AllCategory() {
    const dispatch = useDispatch();
    const { category_id } = useParams();
    const {filterBook} = useSelector(state => state.BookReducer);
    const {categories} = useSelector(state => state.BookReducer);
    const {user} = useSelector(state => state.UserReducer);
    useEffect (() => {
        async function fetchData(){
            await dispatch(getCategories());
            await dispatch(filterBookWithCategory(null))
            await $(document).ready(function(){
                let list = null;
                list.push(category_id)
                $(`button[data-category=${category_id}]`).addClass("active-category");
                dispatch(filterBookWithCategory(list))
                $("button[data-category]").each((index, e)=>{
                    $(e).click(function(){
                        let name = $(e).attr("data-category");
                        if($(e).hasClass("active-category")){
                            //remove class
                            $(e).removeClass("active-category");
                            list.pop(name)
                        }
                        else{
                            //add class
                            $(e).addClass("active-category");
                            list.push(name)
                        }
                        categoryFilter(list)
                    })
                })
            })
        }
        fetchData();
    },[user.uid])
    
    const categoryFilter = async (categories) =>{
        if(categories.length==0) categories = null;
        await dispatch(filterBookWithCategory(categories))
    }
    return filterBook==null ? (
        <div id="loading" className="loading-modal"></div>
    ):(
        <div className='Contain-All-category'>
            <NavDetail/>
            <div className='All-category'>
                <div className='Nav-category'>
                    <div className='Nav-category__text'>
                        <h3>Category</h3>
                    </div>
                    <div className='Nav-category__filter'>
                        <FaFilter className='Filter'/>
                        <button type="">Popular</button>
                        <button type="">Newest</button>
                        <button type="">Hot sale</button>
                        <select  className="Category-sort">
                            <option value="Card" selected disabled>Sort by</option>
                            <option value="up">Price: low to high</option>
                            <option value="down">Price: high to low</option>
                        </select >
                    </div>
                    <div className="Category-count-page">
                        <h3>Page 1 of 1</h3>
                    </div>
                </div>
                <div className="contain-category">
                    <div className="content-category-left">
                        {
                            categories&&categories.map((category) => (
                                <div className="content-category-button">
                                    <button className="category-filter" data-category={category}>
                                    {category}
                                    </button>
                                </div>
                            ))
                        }
                        <Link to="/homepage" className="content-category-button-back">
                            <button type="">Back to home</button>
                        </Link>
                    </div>
                    <div className="content-category">
                    <div className="content-category-right">
                        <div class="grid-CateBook-1">
                            {filterBook&&filterBook.map((book) => (
                                <BookItem item={book} />
                            ))}
                        </div>
                    </div>
                </div>
                </div>    
            </div>
            <Footer />
        </div>
    );
}