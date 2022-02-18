import React , {useMemo, useState, useEffect} from 'react';
//import ReactDOM from 'react-dom';
//import ReactModal from 'react-modal';
import Axios from 'axios';
import Table from "./Table";




class App extends React.Component {
  //ReactModal.setAppElement('#root');
  constructor()
{
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
}


  const Columns = useMemo(
  () => [
  {
    Header: 'TodoId',
    accessor: 'id'

  },
  {
    Header: 'Title',
    accessor: 'title',
    disableSortBy: true
  },
  {
    Header: 'Status',
    accessor: d=> d.completed ? 'Completed' : 'Incomplete',
    disableSortBy: true
  },
  {

  Header: 'Action',
  Cell: ({ cell }) =>(
    <div>      
    {/* <button value={cell.row.values.id} onClick= {e => CallApi(e.target.value)}>      */}
    <button value={cell.row.values.userId} onClick= {() => CallApi(10)}>     
       View
    </button>    
    </div>
  ),
  }
  ], [] );

  

  useEffect(() => {
    (async () => {
      const result = await Axios ("https://jsonplaceholder.typicode.com/todos");
      setData(result.data);
    }) ();
  }, []);

  return (
    <div className="App">
      <Table columns={Columns} data = {data} />
    </div>

  );
  function CallApi(userid){
  
  const [userdetails, setUserDetails] = useState([]);   

  const fetchData= async ()=>{
        const response  = await Axios.get(Axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
        if (response)
                {
                    this.setUserDetails({userdetails: response.data})
                    const list= response.data;
                    console.log(list)
                }
    }
  // React.useEffect(() => {
  //   Axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`).then((response) =>
  //    { setUserDetails(response.data);});
  // }, []);

//   if (!userdetails) return null;
// 
//   return (
//     <div>
//       <h1>userdetails.name</h1>
//     </div>
//     )

  
  
    // return(
    //   <div className="App1">
    //   <ul>
    //     state.userdetails.map(userdetail => <li>{userdetails.name}</li>)
    //   </ul>
    //   </div>
    //   ) 
  
}

}



export default App;
