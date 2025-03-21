import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    event.preventDefault(); // Empêche de remonter la page quand on ouvre le menu défilant
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-cyan-500 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between mx-auto p-6">
          {/* Logo 3 traits de navigation */}
          <a href="#" onClick={toggleMenu} className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="White" className="size-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </a>

          {/* Menu déroulant */}
          <div className={`absolute left-0 min-h-screen h-full top-24 w-1/6 bg-cyan-500 shadow-lg rounded-lg p-5 z-30 transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <ul>
              <li><a href="#" className="block px-4 py-2 text-white hover:bg-cyan-400">S'inscrire</a></li>
              <li><a href="#" className="block px-4 py-2 text-white hover:bg-cyan-400">Se connecter</a></li>
              <li><a href="#" className="block px-4 bottom-0 py-2 text-white hover:bg-cyan-400">Contacts</a></li>
            </ul>
          </div>

{/* tableau de logo home et profil*/}
    
  <div class="absolute left-24" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
        <a href="/home" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="White" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="White" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</a>
      </li>
    </ul>
  </div>

  {/* Nom de l'app*/}
    <div><a href="/home" >
    <span class="text-4xl font-semibold font-coiny text-white">Lawrning</span>
    </a>
    </div>
  
 {/* bouton se connecter*/}
  <div class="flex md:order-2 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connexion</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    
  </div>
  </div>
  
</nav>
    </header>
  );
}

export default Header;