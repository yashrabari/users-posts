import React, { useEffect, useState } from 'react'
import { getUsers } from '../Networks/users'



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Link } from 'react-router-dom'


export default function UsersPage() {

    const [users, setUsers] = useState([])


    useEffect(() => {
        fetchUsers()
    }, [])




    const fetchUsers = async () => {
        var res = await getUsers()
        setUsers(res)
    }



    return (
        <div >
            <h1>Users Data</h1>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id </TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Username</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Website</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>

                                <Link to={'/posts'} state={{ id: row.id, name: row.name }}><TableCell align="right">{row.name}</TableCell></Link>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.website}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
