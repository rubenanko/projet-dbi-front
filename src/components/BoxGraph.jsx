function BoxGraph() {
    return (
      <div className="flex border rounded-lg shadow-lg p-5 bg-red-200 hover:scale-105 transition duration-300">
        {/* Image à gauche */}
        <div className="w-2/5 ">
          <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/16151485-icone-de-graphique-d-affaires-de-dessin-anime-de-vecteur-dans-le-style-comique-pictogramme-d-illustration-de-signe-graphique-concept-d-effet-d-eclaboussure-d-entreprise-de-diagramme-vectoriel.jpg" alt="Placeholder" className="w-full h-72 rounded-lg" />
        </div>
        
        {/* Texte et boutons à droite */}
        <div className="w-2/3 pl-4 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl text-rose-600 font-bold mb-2 font-coiny">Progression</h1>
            <p className="text-rose-600 font-bold mb-4 font-coiny">Visualise ton parcours et ta courbe de progression</p>
          </div>
          <div className="flex flex-col items-center h-2/3 ">
            <button type="button" className="focus:outline-none w-1/3 text-white bg-red-400 hover:bg-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-5 me-2 mb-2 border-2 border-white">Visualiser ma progression</button>
            <button type="button" className="focus:outline-none w-1/3 text-white bg-red-400 hover:bg-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-5 me-2 mb-2 border-2 border-white">Succès</button>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default BoxGraph;