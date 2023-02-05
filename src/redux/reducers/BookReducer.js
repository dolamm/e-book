import {
    GET_BOOKS,
    ADD_BOOK,
    GET_CATEGORIES,
    GET_RANDOM_BOOK,
    FILTER_BOOK_WITH_CATEGORY
} from '../types/BookTypes.js'


const initialState = {
    books: [],
    categories: [],
    randomBook: [],
    filterBook: []
}

export const BookReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_BOOKS:
            state.books = action.value
            state.filterBook = action.value
            return {...state}
        case GET_CATEGORIES:
            state.categories = action.value
            return {...state}
        case GET_RANDOM_BOOK:
            state.randomBook = action.value;
            return {...state}
        case ADD_BOOK:
            state.books = [...state.books, action.value]
            return {...state}
        case FILTER_BOOK_WITH_CATEGORY:
            let category = action.value
            let data = [];
            state.books.forEach((book) =>{
                let results = categoryFilter(book.category, category)
                if(results){
                    data.push(book)
                }
            })
            state.filterBook = data;
            return {...state}
        default:
            return {...state}
    }
}


const categoryFilter = (bookCategory, list) =>{
    for(let i in list){
        if(!bookCategory.includes(list[i])){
            return false;
        }
    }
    return true;
}