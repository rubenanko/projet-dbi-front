import axios from "axios";
import {useState,useEffect} from 'react';
import Footer from "../components/Footer";
import InputZone from "../components/InputZone";
import QuestionZone from "../components/QuestionZone";
import CorrectionZone from "../components/CorrectionZone";

function TrainingPage({topic})
{
    if(!topic)
        topic = "default";

    const [data, setData] = useState(null); // Pour stocker la réponse du backend
    const [loading, setLoading] = useState(true); // Indique le chargement
    const [error, setError] = useState(null); // Stocke une erreur éventuelle

    const [correction, setCorrection] = useState(null); // Pour stocker la réponse du backend
    const [correctionLoading, setCorrectionLoading] = useState(false); // Indique le chargement
    const [correctionError, setCorrectionError] = useState(null); // Stocke une erreur éventuelle

    var returned;
    var correctionZone;

    useEffect(() => {
        // Fonction pour appeler l'API
        const fetchData = async () => {
          try {
            // Envoie la requête
            const response = await axios.post(import.meta.env.VITE_BACKEND + "/api/v1/question",{"topic": topic},{ headers : { "Content-Type" : "application/json" }});
            setData(response.data); // Sauvegarde les données de la réponse
          } catch (err) {
            setError(err.message); // Sauvegarde l'erreur
          } finally {
            setLoading(false); // Fin du chargement, qu'il y ait eu une erreur ou non
          }
        };
        
        fetchData();
    }, []);

    if(loading)
    {
        returned = <p>chargement</p>
    }

    if(error) { returned = <p>Erreur</p>}

    if(data)
    {
        if(correctionLoading)
        {
          correctionZone = <p>Loading Correction</p>;
        }

        if(correction)
          correctionZone = <CorrectionZone correction={correction.assistant}/>;

        returned = 
        <>
            <QuestionZone question={data.assistant} />
            <InputZone question={data.assistant} setCorrection={setCorrection} setCorrectionLoading={setCorrectionLoading} setCorrectionError={setCorrectionError}/>
            {correctionZone}
        </>;
    }

    return(
        <>
            {returned}
            <Footer />
        </>
    );
}

export default TrainingPage;