import axios from 'axios';
import React,{useState,useEffect} from 'react';

function App() {
  const [userdata, setUserdata] = useState([]);

  const sendRequest = async() => {
    const response = await axios.get('http://localhost:8080');
    // console.log(response.data);
    const resdata = response.data;
    setUserdata(resdata);
    console.log(resdata);
  };

  useEffect(()=>{
    sendRequest();    
  },[]);

  return (
    <div className="App">
      <ul>
        {userdata.map((a,i)=>{
          return(
            <li key={i}>{a.id}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;