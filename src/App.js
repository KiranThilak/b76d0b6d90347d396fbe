import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [apiData, setApiData] = useState('')
  useEffect( ()=> {
    async function callApi(){
    const apiresult = axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
  console.log(apiresult) 
  setApiData((await apiresult).data)
  }
  callApi();
  //console.log(apiData);
  }, [apiData])
  return (
    <div className='App'>
    <table>
      <tr>
        <th>Id</th>
        <th>TITLE</th>
        <th>BODY</th>
        <th>BODY</th>



      </tr>
    </table>
    
      { apiData &&
        (apiData).map((apiDetails, index)=>{
          return(
            <tr>
            <td>{apiDetails.id}</td>
            
            </tr>
          )
        })
      }
      
      
    </div>
  );
}

export default App;
