import { useState } from "react";

import axios from "axios";
const CreateNote = (props) => {
    const UriPrefix = "http://localhost:3001";
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const insertNote = async () => {

        //check here
        props.newNote()

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
       const params = new URLSearchParams()
        params.append('title', title)
        params.append('desc', body)
        params.append('date', new Date())
        params.append('userId', props.user)
        console.log(params)
        await axios.post(UriPrefix + '/note', params, config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });



    }
    return (
        <div className="bg-gray-800 w-full lg:w-1/4 mt-10 rounded p-5 m-3 self-center ">
            <h3 className="text-slate-50 font-semibold mb-3">New Note</h3>
            <input type="text" placeholder="Pick John at 10" onChange={(e) => { setTitle(e.target.value) }} value={title} className="text-slate-50 text-md bg-gray-600 p-1 rounded w-full" />
            <textarea className="text-slate-50 text-md bg-gray-600 p-1 rounded w-full mt-2" onChange={(e) => { setBody(e.target.value) }} value={body} placeholder="More details " />
            <button className="bg-indigo-700 px-10 mt-1 w-full rounded py-1 text-slate-50 hover:bg-indigo-900" onClick={insertNote}>Create</button>
        </div>
    );
}

export default CreateNote;