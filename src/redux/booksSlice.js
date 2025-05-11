import { createSlice } from '@reduxjs/toolkit';
import { books as initialBooks } from '../data/books';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: initialBooks,
    filteredBooks: initialBooks,
    selectedCategory: 'All',
    searchTerm: '',
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: state.books.length + 1,
        rating: 0,
        isPopular: false,
      };
      state.books.push(newBook);
      state.filteredBooks = state.books;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredBooks = state.books.filter(book => 
        action.payload === 'All' ? true : book.category === action.payload
      );
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      const searchTerm = action.payload.toLowerCase();
      state.filteredBooks = state.books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { addBook, setSelectedCategory, setSearchTerm } = booksSlice.actions;
export default booksSlice.reducer; 