
function FunctionEvent()
{

    function handleClick()
    {
       console.log("clicked!")
    }


    return (
    <div>Func Component: 
        <button onClick={handleClick}>Click</button>
    </div>
        )
}

export default FunctionEvent;