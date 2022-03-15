import logo from './logo.svg';
import './App.css';
import Floorplan from './Floorplan';

function App() {

  const bedrooms = [ 
    {bedNum: 1},
    {bedNum: 2},
    {bedNum: 3},
]

  return (
    <>
      <h1>This is an app</h1>
      <Floorplan/>      
    </>
  );
}

export default App;
