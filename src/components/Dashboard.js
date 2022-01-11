import react from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
const Dashboard = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated &&(
        <div>
            <Logout/>
            <img src={user.picture} alt={user.name}/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            {JSON.stringify(user)}
        </div>
        )
    )

}

export default Dashboard;