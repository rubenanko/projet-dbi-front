import FormatedText from "./FormatedText";

function QuestionZone({question})
{
    return(
        <div className="flex justify-center items-center w-full">
            <div className="overflow-y-auto max-h-128 w-full">
            <FormatedText textContent={question} className="py-5 m-5 text-2xl text-left w-auto"/>
        </div>
        </div>
    );
}

export default QuestionZone;