
function InputZone()
{
    return(
        <div class="place-self-center relative justify-center mt-10 w-3/5 text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus-within:shadow-lg focus-within:ring-blue-500 transition focus-within:scale-105">
            <textarea type="input" id="answer" rows="7" class="text-sm p-4 mt-2 mb-16 w-11/12 rounded-3xl resize-none bg-inherit focus:outline-none" placeholder="Votre réponse" required></textarea>
            <button type="button" class="absolute right-5 bottom-2 text-white bg-cyan-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-500 font-medium rounded-lg text-sm px-4 py-2 my-5">Répondre</button>
        </div>
    );
}

export default InputZone;