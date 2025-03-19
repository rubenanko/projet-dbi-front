import FormatedText from "./FormatedText";

function QuestionZone({question})
{
    return(
        <div>
            <FormatedText textContent={question} className="py-5 place-self-center m-5 text-2xl text-left w-2/3"/>
        </div>
    );
}

export default QuestionZone;