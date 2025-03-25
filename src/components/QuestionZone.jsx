import FormatedText from "./FormatedText";

function QuestionZone({question})
{
    return(
        <div className="flex justify-center items-center relative w-full">
            <div className="bg-gradient-to-b from-transparent via-transparent to-white absolute z-10 w-full h-full pointer-events-none" />
            <div className="overflow-y-auto max-h-128 w-full scrollbar1">
                <h2 className="py-5 m-5 text-5xl font-bold text-left">Énoncé</h2>
                <FormatedText textContent={question} className="py-5 m-5 text-2xl z-1 text-left w-auto" />
            </div>
        </div>
    );
}

export default QuestionZone;