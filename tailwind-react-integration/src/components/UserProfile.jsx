function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
        alt="User Profile"
        className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
      />
      <h1 className="text-lg sm:text-xl text-blue-800 my-4 text-center hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer">
        John Doe
      </h1>
      <p className="text-gray-600 text-sm sm:text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;