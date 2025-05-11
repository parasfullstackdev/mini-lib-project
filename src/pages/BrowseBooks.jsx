import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { setSelectedCategory, setSearchTerm } from '../redux/booksSlice';

const BrowseBooks = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { filteredBooks, searchTerm } = useSelector((state) => state.books);

  useEffect(() => {
    if (category) {
      dispatch(setSelectedCategory(category));
    }
  }, [category, dispatch]);

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200"
          placeholder="Search books by title or author"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {book.title}
              </h3>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mb-3">
                {book.category}
              </span>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-gray-600">{book.rating}/5</span>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <Link
                  to={`/book/${book.id}`}
                  className="inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks; 