function Box_profile({ profile }) {
    return (
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="flex flex-col items-center pb-10 mt-7">
          <img className="w-32 h-32 mb-3 rounded-md shadow-lg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile_picture" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Déconnecté</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400"></span>
          <div className="flex mt-4 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-md hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300">S'inscrire</a>
            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Se connecter</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Box_profile;