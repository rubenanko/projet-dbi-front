
function FormatedText({textContent,className})
{
    var splitedText;
    var content = [];

    if (textContent)
        splitedText = textContent.split("\n");
    else
        splitedText = [];
    
    for(var line of splitedText)
    {
        content.push(line);
        content.push(<br />);
    }
    return (
        <p className={className}>
            {content}
        </p>
    );
}

export default FormatedText;