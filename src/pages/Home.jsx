import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories } from '../data/books';

const Home = () => {
  const { books } = useSelector((state) => state.books);
  const popularBooks = books.filter(book => book.isPopular);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome to Online Library
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Book Categories
        </h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/browse/${category}`}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Popular Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2">by {book.author}</p>
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
      </section>
    </div>
  );
};

export default Home; 