import React, { useState } from 'react';

export default function Issue(props) {

    const [b_Id, setb_Id] = useState("");
    const [s_Id, sets_Id] = useState("");
    const [s_Name, sets_Name] = useState("");
    const [b_Name, setb_Name] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!b_Id) {
            alert("Book ID can't be empty")
        }
        else if (!s_Id) {
            alert("Student ID can't be empty")
        }
        else if (!b_Name) {
            alert("Book Name can't be empty")
        }
        else if (!s_Name) {
            alert("Student name can't be empty")
        }
        else {
            props.addBook(b_Id, b_Name, s_Id, s_Name);
            setb_Id("");
            sets_Id("");
            sets_Name("");
            setb_Name("");
        }
    }
    return (
        <div className='container my-2 py-3'>
            <h1>Issue A book</h1>
            <form onSubmit={submit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Book ID</span>
                    <input type="text" value={b_Id} onChange={(e) => { setb_Id(e.target.value) }} className="form-control" placeholder="Enter Book ID" id='b_Id' />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Student Id</span>
                    <input type="text" value={s_Id} onChange={(e) => { sets_Id(e.target.value) }} className="form-control" placeholder="Enter Student ID" id='s_Id' />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Book Name</span>
                    <input type="text" value={b_Name} onChange={(e) => { setb_Name(e.target.value) }} className="form-control" placeholder="Enter Book Name" id='b_Name' />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Student Name</span>
                    <input type="text" value={s_Name} onChange={(e) => { sets_Name(e.target.value) }} className="form-control" placeholder="Enter Student Name" id='s_name' />
                </div>

                <button type="submit" className="btn btn-outline-success">Issue Book</button>

            </form>
        </div>
    )
}
