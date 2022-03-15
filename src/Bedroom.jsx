const Bedroom = (props) => {
  return (  
    <div className="bedroom" id={`bed-${props.bedNum}`}>
      <h2>
        This is bedroom
        number {props.bedNum}
      </h2>
    </div>

    
  );
}


export default Bedroom;