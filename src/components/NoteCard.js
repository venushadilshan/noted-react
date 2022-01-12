import { FaTrash,FaPen } from "react-icons/fa";
const NoteCard = (props) => {
    return (  <div className="bg-gray-800 w-full lg:w-1/4 mt-10 rounded p-5 m-3 self-start">
    <h1 className="text-slate-50 text-xl">{props.title}</h1>
    <p className="text-slate-400 mt-3">{props.desc}</p>
    <div className="flex flex-row items-center justify-end w-full">
    <button className="bg-lime-500 px-2 mt-1 mx-1 rounded py-1 text-slate-50 hover:bg-indigo-900" ><FaPen/></button>
    <button className="text-slate-50 px-2 mt-1  mx-1 rounded py-1 bg-red-500 hover:bg-red-700" ><FaTrash/></button>
    </div>
</div> );
}
 
export default NoteCard;