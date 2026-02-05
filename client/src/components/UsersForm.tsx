function UsersForm() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            Create User
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Add a new user to your system
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <form className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 sm:py-4 bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-lg text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 sm:py-4 bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-lg text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
              >
                Create User
              </button>
              <button
                type="reset"
                className="w-full sm:flex-1 border border-gray-300 hover:border-gray-400 text-gray-900 font-semibold py-3 px-4 rounded-lg transition duration-200"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UsersForm;
