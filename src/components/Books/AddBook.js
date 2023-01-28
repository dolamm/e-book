
import {useState, useEffect} from 'react';
import {Notification} from '../notification/Notification.js';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from "../../redux/actions/BookAction";
import { addNewBook } from "../../redux/actions/BookAction";

export function AddBook() {
    const dispatch = useDispatch();
    const {categories} = useSelector((state) => state.BookReducer);
    const addBook = () => {
        // const docRef = doc(db, "books", new Date().getTime().toString());
        const fileName = new Date().getTime().toString();
        // const imgRef = ref(storage, `images/${fileName}`);
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const price = document.getElementById('price').value;
        const categories = document.querySelectorAll('input[data-name="category"]:checked');
        const description = document.getElementById('description').value;
        const imgFile = document.getElementById('file').files[0];
        // const fileExt = file.name.split('.').pop();
        let category = [];
        categories.forEach((item) => {
            category.push(item.value);
        })
        category.push('all');
        console.log(category);
        let bookData = {
            id: fileName,
            title: title,
            author: author,
            category: category,
            description: description,
            image: imgFile,
            price: price,
        }
        console.log(bookData);
        dispatch(addNewBook(bookData));
    }
    
    useEffect(() => {
        dispatch(getCategories());
    }, [])
    return (
        <div>
            {/* <Navdetail/> */}
            <section class="vh-100">
                <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://media.istockphoto.com/vectors/male-and-female-characters-are-editing-profile-online-vector-id1300004790?k=20&m=1300004790&s=612x612&w=0&h=ECJkSK1bNjOaC1oWbrCsqtsGCLNKA0MuKa6TPzGGmmA=" class="img-fluid" alt="Sample image"></img>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <div className='addBook'>
                        <h1 >Add Book</h1>
                    </div>
                    <form>
                        <div class="form-outline mb-4">
                        <input type="text" id="title" class="form-control form-control-lg"
                            placeholder="Title" />
                        <label class="form-label">Enter your book title!</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input type="text" id="author" class="form-control form-control-lg"
                            placeholder="Name..." />
                            <label class="form-label">What your's name ?</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input type="text" id="description" class="form-control form-control-lg"
                            placeholder="Write something about your book.." />
                            <label class="form-label">Description</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input type="text" id="price" class="form-control form-control-lg"
                            placeholder="Price" />
                            <label class="form-label">Price</label>
                        </div>

                        <div class="form-outline mb-3">
                            {
                                categories.map((category) => {
                                    return (
                                        <div class="form-check
                                        form-check-inline">
                                            <span>
                                            <input type="checkbox" id={category} value={category} data-name="category" />
                                                {category}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <input type="file" id="file" />
            
                        <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="button" class="btn btn-primary btn-lg" onClick={addBook} >Add Book</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}