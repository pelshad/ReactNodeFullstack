import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './common.css';

function App() {
  const [userdata, setUserdata] = useState([]);
  const [insData, setData] = useState('');
  const [check, setCheck] = useState(0);
  
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
    setCheck(check+1);
  }

  useEffect(()=>{
    sendRequest();
  },[check]);

  // const delData = async (e) =>{
  //   const res = await axios.post('http://localhost:8080/del_user',
  //   {data : e.target.value});
  // }

  return (
    <div className="App">
      <div>{check}</div>
      <input 
      type="text"
      onChange={inputData} />
      <button
      onClick={sendData}>send</button>
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