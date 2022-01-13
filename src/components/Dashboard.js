import react, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Logout from "./Logout";
import NavBar from "./NavBar";
import NoteCard from "./NoteCard";
import CreateNote from "./CreateNote";
import { useEffect } from "react";



const Dashboard = () => {
  const UriPrefix = "http://localhost:3001";
  const params = new URLSearchParams()
  const { user, isAuthenticated } = useAuth0();
  const [isNewNote, setIsNewNote] = useState(0)
  
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const [notes, setNotes] = useState([])
 

  params.append('userId', user.email)

  useEffect(async() => {
    await axios.post(UriPrefix + '/', params, config)
      .then((res) => { setNotes(res.data) })
    console.log(notes);
    //notes.shift()

  }, [isNewNote])
//handler 
const handleUpdate=(x)=>{
  setIsNewNote(x)
  
}
console.log(notes)
  return (
    
    
    isAuthenticated && (
      <div className="bg-gray-900 h-full min-h-screen lg:min-h-screen lg:h-full">
        <NavBar avatar={user.picture} fName={user.given_name} />

        <div className="flex flex-row p-10 flex-wrap items-start justify-evenly">
          <CreateNote user={user.email} newNote={handleUpdate}/>
     
          {
           
          notes.map((note)=>{
         
            return <NoteCard title={note.title} desc={note.desc} id={note._id} isDeleted={handleUpdate}/>
          })
          }

        </div>


      </div>
    )
  )

}

export default Dashboard;