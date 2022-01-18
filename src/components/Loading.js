import loadingIcon from "../assets/img/loading.gif";
const Loading = (props) => {
    return ( 
    <div className="h-full  backdrop-blur-sm flex flex-col items-center justify-center w-full" style={{position:"fixed", display:props.visibility}}>
        <div className="bg-gray-600 px-32 py-10 rounded shadow-lg flex items-center flex-row">
            <img src={loadingIcon} className="w-10 mx-1"/>
            <h1 className="text-slate-50 text-xl">Loading...</h1>
        </div>
    </div> );
}
 
export default Loading;