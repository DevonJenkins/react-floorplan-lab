const Bathroom = (props) => {
  return ( 
    <div className="Bathroom" id={`bath-${props.size}`}>
      <h2>This is a {props.size} bathroom</h2>
    </div>
   );
}
 
export default Bathroom;