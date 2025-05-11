import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Online Library
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/browse" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Browse Books
              </Link>
            </li>
            <li>
              <Link to="/add" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Add Book
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 