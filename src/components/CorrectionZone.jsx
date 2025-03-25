import FormatedText from "./FormatedText";

function CorrectionZone({correction})
{
    return(
        <div>
            <FormatedText textContent={correction} className="py-5 place-self-center m-5 text-2xl text-left w-2/3"/>
        </div>
    );
}

export default CorrectionZone;