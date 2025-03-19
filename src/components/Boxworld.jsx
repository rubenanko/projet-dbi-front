function Boxworld() {
    return (
      <div className="flex border rounded-lg shadow-lg p-5 bg-pink-200 hover:scale-105 transition duration-300">
        {/* Image à gauche */}
        <div className="w-2/5">
          <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/6725628-entreprise-dans-le-monde-gagnant-reussite-victoire-ou-succes-international-gagner-competition-mondiale-mondialisation-concept-d-entreprise-homme-d-affaires-super-heros-avec-prix-trophee-gagnant-sur-la-planete-terre-vectoriel.jpg" alt="Placeholder" className="w-full h-auto rounded-lg" />
        </div>
        
        {/* Texte et boutons à droite */}
        <div className="w-2/3 pl-4 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl text-violet-500 font-bold mb-2 font-coiny">World</h1>
            <p className="text-violet-500 font-bold mb-4 font-coiny">Voir le classement mondial et votre position dans la league</p>
          </div>
          <div>
            <button type="button" className="focus:outline-none w-1/3 text-white bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-5 me-2 mb-2 border-2 border-white">Classement mondial</button>
          </div>
          <div>
            <button type="button" className="focus:outline-none w-1/3 text-white bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-5 me-2 mb-2 border-2 border-white">Joueurs de la semaine</button>
          </div>
          <div>
            <button type="button" className="focus:outline-none w-1/3 text-white bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-5 me-2 mb-2 border-2 border-white">Ma league</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Boxworld;