import "../App.css"

function Boton(props){

    function click(){
        alert("Hiciste click")
    }

    return (
        <button className="boton"  onClick={click}>Click</button>
    )
}

export default Boton;