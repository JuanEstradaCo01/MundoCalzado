function Flex(props) {
    return <div className="productos" style={{ display: "flex"}}>
        {props.children}
        </div>;
}

export default Flex;