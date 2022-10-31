import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './common.css';

function App() {
  const [userdata, setUserdata] = useState([]);
  const [insData, setData] = useState('');

  //통신시 useEffect 무한 루프 방지
  const [loopCheck, setLoopCheck] = useState(0);
  
  const sendRequest = async() => {
    const response = await axios.get('http://localhost:8080/sel_user');
    // console.log(response.data);
    const resdata = response.data;
    setUserdata(resdata);
    console.log(resdata);
  };

  const inputData = (e) => {
    setData(e.target.value);
  }

  const sendData = async () => {
    const res = await axios.post('http://localhost:8080/ins_user', 
    {NAME : insData});
    setLoopCheck(loopCheck+1);
    setData("");
  }

  const keySendData = async (e) => {
    if(e.key === 'Enter'){
      const res = await axios.post('http://localhost:8080/ins_user', 
      {NAME : insData});
      setLoopCheck(loopCheck+1);
      setData("");
    }
  }

  useEffect(()=>{
    sendRequest();
  },[loopCheck]);

  // const delData = async (e) =>{
  //   const res = await axios.post('http://localhost:8080/del_user',
  //   {data : e.target.value});
  // }

  return (
    <div className="App">
      <input 
      type="text"
      onChange={inputData}
      onKeyUp={keySendData}
      value={insData} />
      <button
      onClick={sendData}>send</button>
      <button
      onClick={delData}>
        dleData
      </button>
      <ul>
        {userdata.map((a,i)=>{
          return(
            <div className='liDiv'>
              <li key={i}>{a.NAME}</li>
              {/* <span
              onClick={delData}>x</span> */}
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;