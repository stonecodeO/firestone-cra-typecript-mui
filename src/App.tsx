import React, { useEffect, useState} from 'react';
import './App.css';
import { database } from "./firebase-config";
import { collection, getDocs} from "@firebase/firestore";
interface Istate{
  user:{    
    id: string
  }
} 
function App() {
  const [users, setUsers] = useState<Istate["user"][]>([])
  const usersCollectionRef = collection(database, "users")
  useEffect(()=>{
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) =>({...doc.data(), id:doc.id})))
      }   
  
    getUsers();

  },[usersCollectionRef])  

  return (
    <div className="App">
      { users.map((user) => {

        return (
          <div className="">
            {""}
            <h1> id: {user.id}</h1>
          </div> )      
      })}
    </div>
  );
}

export default App;
