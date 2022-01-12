import react from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import NavBar from "./NavBar";
import NoteCard from "./NoteCard";
import CreateNote from "./CreateNote";
const Dashboard = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="bg-gray-900 h-ful">
        <NavBar avatar={user.picture} fName={user.given_name} />

        <div className="flex flex-row p-10 flex-wrap items-start justify-evenly">
          <CreateNote  user={user.email}/>
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>

        <p>{console.log(JSON.stringify(user))}</p>
      </div>
    )
  )

}

export default Dashboard;