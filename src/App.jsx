import {useEffect, useState } from 'react'
import axios from 'axios'

const RestApi =()=>{
    const [dataApi,setDataApi]=useState([]);
    const [categoryName ,setCategoriName]=useState('')

  useEffect(()=>{

  const apiCripto =async()=>{
    const res = await axios.get('https://raw.githubusercontent.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA/master/data/crypto/en.json')
      setDataApi(res.data.apis); 
      setCategoriName(res.data.categoryName);
    }

    apiCripto();

  },[]);
  return(
  <div className=''>
      <div className='  bg-sky-900 h-10 '>
            <h1 className='text-2xl text-center text-blue-50 '>{categoryName}</h1>
        </div>
      <div className='w-full h-full bg-slate-500 text-lg'>
      <ul>{dataApi.map(( apis , Index)=>(
        <li key = {Index}>
    <div className='text-1xl font-serif text-ellipsis'>
            <p>Api Name: {apis.apiName} </p>
              <p>documentationUrl: <a className='underline decoration-blue-950 text-blue-950' href={apis.documentationUrl} target='_blank ' rel='noopener noreferrer'>{apis.documentationUrl}</a></p>
                <p> Developer name: {apis.developer.name}</p>
              <p>ProvileUrl: {apis.developer.provileUrl? `${apis.developer.provileUrl}`:'Null'} </p>
          <p>Status: {apis.status? 'Yes' :'NO'}</p>
        </div>
        <hr></hr>
          </li> ))}
      </ul>
    </div>
  </div>
);
};
function App(){ 
  const [datas, setDatas] = useState([]);
  const [categoryName ,setCategoriName]=useState('');
    const apiUrl =
      "https://raw.githubusercontent.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA/master/data/e-commerce/id.json";
  const fetchData = async () => {
    const res = await axios.get(apiUrl);
    return res.data;
  };

  useEffect(() => {
    fetchData().then((res) => {
      setDatas(res.apis);
      setCategoriName(res.categoryName);
    });
  }, []);
  return (
    <div>

      <RestApi/>

        <div className='h-10 bg-sky-900 text-center text-2xl text-blue-100'>
          <h1 className=''>{categoryName}</h1>
            </div>
      {datas.length && datas.map((data, index) => {
        return (
          <div key = {index}>
            <div className=' text-ellipsis font-serif lg:text-lg bg-slate-500 w-100px sm:text-wrap w-full' >
              <p>nama api : {data.apiName}</p>
                <p>status : {data.status ? "true" : "false"} </p>
                    <p>documentationUrl :<a className="text-blue-950 underline decoration-blue-950" href= {data.documentationUrl}  target='_blank' rel='noopener noreferrner'>{data.documentationUrl}</a></p>
                  <p> Developer :{data.developer.name}</p>
                <p>Provile : {data.developer.provileUrl ? `${data.developer.provileUrl}` : "Kosong"}</p>
            </div>
          <hr/>
            </div>
          );
        })}
    </div>
  );
  }
export default App