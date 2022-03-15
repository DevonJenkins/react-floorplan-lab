import Kitchen from "./Kitchen"
import Bedroom from "./Bedroom"
import LivingRoom from "./LivingRoom"
import Bathroom from "./Bathroom"


function Floorplan (props){
  return(
    <>
    <div className="Floorplan">
      <Bedroom bedNum={1}/>
      < Kitchen/> 
      <Bedroom bedNum={3}/>
      < LivingRoom/>
      < Bathroom size={'full'}/>
      < Bathroom size={'half'}/>
      <Bedroom bedNum={2}/>
    </div>

    </>
  )
}

export default Floorplan