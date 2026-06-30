import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-r from-red-500 to-pink-600 text-white">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
      <p className="text-xl mb-8 text-center max-w-md">
        Sorry! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound;
