function Saludo(props){

    const estilo = {
      backgroundColor: props.color,
      color: props.letra,
      borderRadius: props.borde,
      fontSize: "5rem",
      marginTop: "2rem",
  }

  return <h3 style={estilo}>Hola Bienvenido/a a nuestra tienda</h3>
  
}

export default Saludo;