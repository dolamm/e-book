import {
    GET_BOOKS,
    ADD_BOOK,
    GET_CATEGORIES,
    GET_RANDOM_BOOK,
} from '../types/BookTypes.js'


const initialState = {
    books: [],
    categories: [],
    randomBook: [],
}

export const BookReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_BOOKS:
            state.books = action.value
            return {...state}
        case GET_CATEGORIES:
            state.categories = action.value
            return {...state}
        case GET_RANDOM_BOOK:
            state.randomBook = action.value;
            return {...state}
        default:
            return {...state}
    }
}