function Boxtrain() {
    return (
      <div className="flex border rounded-lg shadow-lg p-5 bg-yellow-200">
        {/* Image à gauche */}
        <div className="w-2/5">
          <img src="https://img.freepik.com/vecteurs-libre/illustration-laique-brevet-droit-auteur_23-2148705677.jpg" alt="Placeholder" className="w-full h-auto rounded-lg" />
        </div>
        
        {/* Texte et boutons à droite */}
        <div className="w-2/3 pl-4 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl text-orange-500 font-bold mb-2">S'entrainer</h1>
            <p className="text-orange-500 font-bold mb-4">Génère des questions, des quiz ou bien étudie tes erreurs précédentes</p>
          </div>
          <div>
            <button type="button" className="focus:outline-none w-1/3 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-5 me-2 mb-2 border-2 border-white">Générer des questions</button>
          </div>
          <div>
            <button type="button" className="focus:outline-none w-1/3 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-5 me-2 mb-2 border-2 border-white">Lancer un QCM</button>
          </div>
          <div>
            <button type="button" className="focus:outline-none w-1/3 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-5 me-2 mb-2 border-2 border-white">Réviser mes erreurs</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Boxtrain;