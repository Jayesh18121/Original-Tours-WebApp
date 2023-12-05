import {useState,useEffect} from 'react';
import Loading from './Components/Loading';
import Tours from './Components/Tours';
const url = 'https://course-api.com/react-tours-project';
 
const App = () => {
  const [tour,setTour] = useState([]);
  const[loading,setLoading] = useState(false);


  const removeId = (id) =>{
    let newList = tour.filter((el)=>{
      return el.id !== id;
    })
    setTour(newList);
  }

  const getData = async() =>{

    try{
      setLoading(true);
      const res = await fetch("https://course-api.com/react-tours-project");
      const ans = await res.json();
      setTour(ans);
      setLoading(false);
    }
    catch(error){
      console.log(error);
    }
  }


  useEffect(()=>{
    getData();
  },[])

    if(loading){
      return(
        <>
        <Loading/>
        </>
      )
    }

    if(tour.length == 0){
      return(
        <>
        <button onClick={getData}>Refetch Data</button>
        </>
      )
    }
  
    return(
      <main>
      <div className='title'>Our Tours</div>
      <div className='title-underline'></div>
      <div className="tours">
        <Tours  tour = {tour} removeId = {removeId}/>
      </div>
      </main>
    )
  }
export default App;
