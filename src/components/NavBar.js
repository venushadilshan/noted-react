
import Logout from "./Logout";
const NavBar = (props) => {
    return (<div className="bg-gray-800 w-full " style={{position:"sticky" ,top:"0", zIndex:"20"}}>
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
         
            <img className="rounded-full w-12 my-2 ml-3"  src={props.avatar}/>
            <h1 className="text-lg text-slate-50 m-2">Welcome, {props.fName}</h1>
            </div>
       
        <div className="flex flex-row items-center">  
       <Logout/>
        </div>
      
        </div>
    </div>);
}

export default NavBar;