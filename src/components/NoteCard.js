import { FaTrash, FaPen } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const NoteCard = (props) => {

    const UriPrefix = "https://noted-routes.herokuapp.com";


    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.desc);


    const deleteNote = async () => {
        await axios.delete(UriPrefix + `/note/${props.id}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        props.isDeleted(Math.random(1, 100))
    }


    const updateNote = async () => {
        setIsEditing(false);
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
     
   const params = new URLSearchParams()
    params.append('title', title)
    params.append('desc', body)
    params.append('date', new Date())


        await axios.put(UriPrefix + `/note/${props.id}`,params,config)
            .then((response) => { console.log(response) })
            .catch((err) => { console.log(err) })

    }


    const [isEditing, setIsEditing] = useState(false)
    var inputClass = "bg-gray-800"
    if (isEditing) {
        inputClass = "bg-gray-500"
    }


    return (<div className="bg-gray-800 w-full lg:w-1/4 mt-10 rounded p-5 m-3 self-start" data-aos="fade-up">
        <input type="text"  className={`text-slate-50 text-xl p-1 w-full rounded ${inputClass}`} value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <textarea className={`text-slate-50 text-md p-1 mt-2 w-full rounded ${inputClass}`} value={body} onChange={(e)=>{setBody(e.target.value)}}/>
        <div className="flex flex-row items-center justify-end w-full">
            {isEditing && (
                <button className="bg-lime-500 px-2 mt-1 mx-1 rounded  text-slate-50 hover:bg-indigo-900" onClick={updateNote} >Save</button>
            )}
            <button className="bg-lime-500 px-2 mt-1 mx-1 rounded py-1 text-slate-50 hover:bg-indigo-900" onClick={() => { setIsEditing(true) }}><FaPen /></button>
            <button className="text-slate-50 px-2 mt-1  mx-1 rounded py-1 bg-red-500 hover:bg-red-700" onClick={deleteNote}><FaTrash /></button>
        </div>
    </div>);
}

export default NoteCard;