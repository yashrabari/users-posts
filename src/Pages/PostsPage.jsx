import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getUsersPosts } from '../Networks/posts'



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PostsPage() {

    var [posts, setPosts] = useState([])
    const location = useLocation()


    useEffect(() => {
        if (!location.state.id) {
            return alert("No User Found")
        }
        fetchPosts(location.state.id)
    }, [])


    const fetchPosts = async (id) => {
        var res = await getUsersPosts(id)
        setPosts(res)
    }


    return (
        <div>
            <h1>Posts From {location.state.name || 'User'}</h1>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id </TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Body</TableCell>
                            <TableCell align="right">User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>

                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.body}</TableCell>
                                <TableCell align="right">{location.state.name || 'User'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
