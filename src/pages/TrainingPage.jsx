import axios from "axios";
import {useState,useEffect} from 'react';
import Footer from "../components/Footer";
import InputZone from "../components/InputZone";
import QuestionZone from "../components/QuestionZone";
import Header from "../components/Header";
import LoadingBar from "../components/LoadingBar";

function TrainingPage({topic})
{
    if(!topic)
        topic = "default";

    const [data, setData] = useState(null); // Pour stocker la réponse du backend
    const [loading, setLoading] = useState(true); // Indique le chargement
    const [error, setError] = useState(null); // Stocke une erreur éventuelle
    const [progress, setProgress] = useState(0); // Pourcentage de chargement

    var returned;

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
            </>
        );
    }

    if(error) { returned = <p>Erreur</p>}

    if(true)  // mettre data à la place pour taffer sur la barre de chargement  true sinon
    {
        returned = 
        <>
        <div className="p-8"><Header/></div>
            <div className="flex flex-col items-center justify-center flex-grow m-10">
            <QuestionZone question={"miozjhcvbzdhibvihzervbcihzdbvcihzerabcvihzebcvhizerbcihzerhizrbvchizrebvcz yhbhzerbvczihebdbhizvehibvzevebzhimvmrhvzBHIBVZHZbvhi"} />  {/*mettre data.assistant*/}
            <InputZone />
            </div>
        </>;
    }

    return(
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                {returned}
            </div>
            <Footer />
        </div>
    );
}

export default TrainingPage;