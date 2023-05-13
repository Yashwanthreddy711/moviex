import { useEffect } from 'react'
import { fetchDataFromApi } from './utils/Api';

function App() {
  useEffect(()=>{
    apiTesting();
  },[]);
     const apiTesting =()=>{
      fetchDataFromApi("/movie/popular")
      .then((res)=>{
        console.log(res);
      })
     }
  return (
   <div></div>
  )
}

export default App;
