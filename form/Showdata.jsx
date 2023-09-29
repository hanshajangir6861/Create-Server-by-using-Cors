import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Showdata() {
    const [data, setData] = useState([])
    async function fetchData() {
        const NewData = await axios.get("http://localhost:4000")
            .then((res) => {
                setData(res.data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <table>

            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>PhoneNo</th>
                    {/* <th>Action</th> */}

                </tr>
            </thead>
            <tbody>
                {data.map((student) => {
                    return (
                        <>
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.Name}</td>
                                <td>{student.age}</td>
                                <td>{student.phone}</td>

                            </tr>
                        </>



                    )
                })}
            </tbody>

            <Link to='/add' id='add'>Add More</Link>
        </table>
    )
}

export default Showdata