import FormatedText from "./FormatedText";

function CorrectionZone({correction})
{
    return(
        <div>
            <div>
                <h2 className="py-5 m-5 text-5xl font-bold text-left">Correction</h2>
                <FormatedText textContent={correction} className="py-5 m-5 text-2xl z-1 text-left w-auto"/>
            </div>
            <button type="button" onClick={() => window.location.reload()} class="bottom-2 text-white bg-cyan-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-500 font-medium rounded-md text-sm px-4 py-2 my-5">Générer un nouvel énoncé</button>
        </div>
    );
}

export default CorrectionZone;