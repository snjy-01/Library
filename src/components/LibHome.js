import React from 'react'
import Books from './Books'
export default function LibHome(props) {
    let adj = {
        minHeight: "35vh"
    }
    return (
        <div className='container my-4' style={adj}>
            <h1 className='text-center'>Issued Book's</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">BOOK ID</th>
                        <th scope="col">BOOK NAME</th>
                        <th scope="col">STUDENT ID</th>
                        <th scope="col">STUDENT NAME</th>
                        <th scope="col">DELETE RECORD</th>
                    </tr>
                </thead>
            </table>
            {props.books.length === 0 ? "No Book is Issued" :
                props.books.map((show) => {
                    return (<Books key={show.id} show={show} onDelete={props.onDelete} />)
                })
            }


        </div>
        )
}
