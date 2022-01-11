import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="bg-gray-900 w-full">
            <div className="flex flex-col items-center justify-between h-screen ">
                <div></div>
                <div className="container text-center">
                    <h1 className="text-4xl text-gray-700 font-semibold">Noted!</h1>
                    <p className="text-xl text-gray-500 font-light text-center">Save you notes quickly, access remotely.</p>
                    <button className="bg-indigo-700 px-10 mt-10 rounded py-1 text-slate-50 hover:bg-indigo-900" onClick={() => { loginWithRedirect() }}>Login
                    </button>
                </div>
                <p className="text-sm text-gray-500 font-light text-center mb-2">An App by VENUSHA</p>
            </div>


        </div>);
}

export default Login;