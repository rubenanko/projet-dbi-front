import FormatedText from "./FormatedText";

function CorrectionZone({correction})
{
    return(
        <div>
            <h2 className="py-5 m-5 text-5xl font-bold text-left">Correction</h2>
            <FormatedText textContent={correction} className="py-5 m-5 text-2xl z-1 text-left w-auto"/>
        </div>
    );
}

export default CorrectionZone;