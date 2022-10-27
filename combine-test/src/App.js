import axios from 'axios';
import React,{useState,useEffect} from 'react';

function App() {
  const [userdata, setUserdata] = useState([]);
  const [insData, setData] = useState('');

  const sendRequest = async() => {
    const response = await axios.get('http://localhost:8080/sel_user');
    // console.log(response.data);
    const resdata = response.data;
    setUserdata(resdata);
    console.log(resdata);
  };

  useEffect(()=>{
    sendRequest();    
  },{userdata});

  const inputData = (e) => {
    setData(e.target.value);
    console.log(insData);
  }

  const sendData = async () => {
    const res = await axios.post('http://localhost:8080/ins_user', {NAME : insData});
    console.log(insData);
  }

  return (
    <div className="App">
      <input 
      type="text"
      onChange={inputData} />
      <button
      onClick={sendData}>send</button>
      <ul>
        {userdata.map((a,i)=>{
          return(
            <li key={i}>{a.NAME}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;