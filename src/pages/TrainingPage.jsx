import axios from "axios";
import {useState,useEffect} from 'react';
import Footer from "../components/Footer";
import InputZone from "../components/InputZone";
import QuestionZone from "../components/QuestionZone";

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
        returned = (
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 relative">
                <div
                    className="bg-blue-600 animate-pulse h-10 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full duration-1000"
                    style={{ width: `${Math.round(progress)}%` }}
                >
                </div>
            </div>
        );
    }

    if(error) { returned = <p>Erreur</p>}

    if(data)  // mettre data à la place pour taffer sur la barre de chargement  true sinon
    {
        returned = 
        <>
            <QuestionZone question={"miozjhcvbzdhibvihzervbcihzdbvcihzerabcvihzebcvhizerbcihzerhizrbvchizrebvcz yhbhzerbvczihebdbhizvehibvzevebzhimvmrhvzBHIBVZHZbvhi"} />  {/*mettre data.assistant*/}
            <InputZone />
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