import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.books);
  const book = books.find((b) => b.id === parseInt(id));

  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Book not found</h2>
        <button
          onClick={() => navigate('/browse')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
        <h2 className="text-xl text-gray-600 mb-4">by {book.author}</h2>
        
        <div className="flex items-center space-x-4 mb-6">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {book.category}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400 text-lg">{renderStars(book.rating)}</span>
            <span className="ml-2 text-gray-600">({book.rating}/5)</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
          <p className="text-gray-700 leading-relaxed">{book.description}</p>
        </div>

        <button
          onClick={() => navigate('/browse')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Browse
        </button>
      </div>
    </div>
  );
};

export default BookDetails; 