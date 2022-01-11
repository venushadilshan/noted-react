import react from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Logout = () => {
    const { logout } = useAuth0();
    return (
        <button className="bg-indigo-700 px-2 rounded py-1 mr-3 text-slate-50 hover:bg-indigo-900" onClick={() => { logout() }}>Logout</button>
    )

}

export default Logout;