import { useState,useRef } from "react";
import axios from "axios";

function post(question,answer,setCorrection,setCorrectionLoading,setCorrectionError)
{
    if(answer.length > 20)
    {   
        setCorrectionLoading(true);
        // Fonction pour appeler l'API
        const postData = async () => {
            try {
              // Envoie la requête
              const response = await axios.post(import.meta.env.VITE_BACKEND + "/api/v1/correction",{"question" : question,"answer" : answer},{ headers : { "Content-Type" : "application/json" }});
              setCorrection(response.data); // Sauvegarde les données de la réponse
            } catch (err) {
              setCorrectionError(err.message); // Sauvegarde l'erreur
            } finally {
              setCorrectionLoading(false); // Fin du chargement, qu'il y ait eu une erreur ou non
            }
          };

          postData();
    }
}

function InputZone({question,setCorrection,setCorrectionLoading,setCorrectionError})
{
    var textareaRef = useRef();

    return(
        <div class="place-self-center relative justify-center w-1/2 text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus-within:shadow-lg focus-within:ring-blue-500 transition focus-within:scale-105">
            <textarea ref={textareaRef} type="input" id="answer" rows="7" class="text-sm p-4 mt-2 mb-16 w-11/12 rounded-3xl resize-none bg-inherit focus:outline-none" placeholder="Votre réponse" required></textarea>
            <button type="button" onClick={() => post(question,textareaRef.current.value,setCorrection,setCorrectionLoading,setCorrectionError)} class="absolute right-5 bottom-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 my-5">Répondre</button>
        </div>
    );
}

export default InputZone;