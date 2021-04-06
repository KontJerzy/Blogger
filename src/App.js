import React, { useState} from 'react'
import "./App.css"
import Axios from 'axios'

const App = () => {

    const [ctid, setCtid] = useState(0);
    const [mname, setMname] = useState("");
    const [mlink, setMlink] = useState("");
    const [mdate, setMdate] = useState("");

    const [mediaList, setMediaList] = useState([]);

    const addMedia = () => {
        Axios.post("http://localhost:3001/create", {
            ctid: ctid,
            mname: mname,
            mlink: mlink,
            mdate: mdate,
        }).then(() =>{
            console.log("success");
        })
    };

    const getMedia = () => {
        Axios.get("http://localhost:3001/media").then((response) =>{
            console.log(response);
        })
    }

    return (
        <div className="App">
            <div className="information"> 
                <label>ctid</label>
                <input 
                type="number"
                onChange={(event) => {
                    setCtid(event.target.value);
                }}></input>
                <label>mname</label>
                <input 
                type="text"
                onChange={(event) => {
                    setMname(event.target.value);
                }}></input>
                <label>mlink</label>
                <input 
                type="text"
                onChange={(event) => {
                    setMlink(event.target.value);
                }}></input>
                <label>mdate</label>
                <input 
                type="date"
                onChange={(event) => {
                    setMdate(event.target.value);
                }}></input>
                <button onClick={addMedia}>Add Media</button>
            </div>
            <div className="employees">
                <button
                onClick={getMedia}>Show media</button>
            </div>
        </div>
    )
}

export default App
