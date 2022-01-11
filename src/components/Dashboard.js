import react from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import NavBar from "./NavBar";
import NoteCard from "./NoteCard";
const Dashboard = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated &&(
        <div className="bg-gray-900 h-screen">
              <NavBar avatar={user.picture} fName={user.given_name}/>

                <div className="flex flex-row p-10 flex-wrap">
                   <NoteCard/>
                   <NoteCard/>
                   <NoteCard/>
                </div>
           
          <p>{console.log(JSON.stringify(user))}</p>
        </div>
        )
    )

}

export default Dashboard;