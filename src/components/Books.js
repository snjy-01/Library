import React from 'react'

export default function Books({ show, onDelete }) {

    return (
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">{show.sno}</th>
                        <td>{show.bid}</td>
                        <td>{show.bname}</td>
                        <td>{show.sid}</td>
                        <td>{show.sname}</td>
                        <td> <button type="button" className="btn btn-outline-danger" onClick={() => { onDelete(show) }}>remove</button></td>
                    </tr>
                </tbody>
            </table>
    )
}


