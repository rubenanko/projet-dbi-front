import axios from "axios";
import {useState,useEffect} from 'react';
import Footer from "../components/Footer";
import InputZone from "../components/InputZone";
import QuestionZone from "../components/QuestionZone";
import Header from "../components/Header";
import LoadingBar from "../components/LoadingBar";
import CorrectionZone from "../components/CorrectionZone";

function TrainingPage({topic})
{
    document.body.style.overflow = "hidden";
    if(!topic)
        topic = "default";

    const [data, setData] = useState(null); // Pour stocker la réponse du backend
    const [loading, setLoading] = useState(true); // Indique le chargement
    const [error, setError] = useState(null); // Stocke une erreur éventuelle
    const [progress, setProgress] = useState(0); // Pourcentage de chargement

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

    //Remplissage de la barre de chargement
    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev < 95) {
                        return prev + 0.1;
                    } else {
                        clearInterval(interval);
                        return prev;
                    }
                });
            }, 5); // Augmente le pourcentage toutes les 100ms
        }
    }, [loading]);

    if(loading)
      {
        returned = (<>
            <div><Header/></div>
            <div className="flex justify-center items-center h-screen"><LoadingBar progress={progress} /></div>
           
            <div className="flex flex-col min-h-max">
            <div className="flex-grow">
                {returned}
            </div>
            <Footer />
        </div>
            </>
        );
    }

    if(error) { returned = <p>Erreur</p>}

    if(data)  // mettre data à la place pour taffer sur la barre de chargement  true sinon
    {
        if(correctionLoading)
        {
          correctionZone = <p>Loading Correction</p>;
        }

        if(correction)
          correctionZone = <CorrectionZone correction={correction.assistant}/>;

        returned = 
        <>
          <div className="p-4"><Header/></div>
            <div className="flex flex-col items-center justify-center flex-grow m-12">
              <div className="flex justify-center items-center w-full">
                <QuestionZone question={data.assistant} />  {/*mettre data.assistant*/}
              </div>
              <InputZone question={data.assistant} setCorrection={setCorrection} setCorrectionLoading={setCorrectionLoading} setCorrectionError={setCorrectionError}/>
              {correctionZone}
            </div>
        </>;
    }

    return(
        <div className="flex flex-col min-h-max">
            <div className="flex-grow">
                {returned}
            </div>
        </div>
    );
}

export default TrainingPage;