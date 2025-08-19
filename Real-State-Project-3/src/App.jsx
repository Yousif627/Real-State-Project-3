import { useEffect, useState } from "react";
import PropertyList from "./components/PropertyList/propertyList";
import PropertyForm from "./components/PropertyForm/propertyForm";
// import PropertyDetails from "./components/PropertyDetails/PropertyDetails"
import "./App.css"


const App = ()=>{

  const[property, setProperty]= useState([])
  const[editProperty, setEditProperty] = useState(null)
  const[formIsShown, setFormIsShown]= useState(false)
  
  const handleShowForm=()=>{
    setFormIsShown(true)

  }
  const setEditPropertyHandler = (property)=>{
    setEditProperty(property)
    setFormIsShown(true)
  }


  return(
  
  <>
<button onClick={handleShowForm}>New Property</button>
{formIsShown ? <PropertyForm editProperty={editProperty} setEditProperty={setEditProperty} setFormIsShown={setFormIsShown} setProperty={setProperty}/> :null}\
<PropertyList property={property} setProperty={setProperty} setEditProperty={setEditPropertyHandler}/>



  </>
  )
}











export default App;
