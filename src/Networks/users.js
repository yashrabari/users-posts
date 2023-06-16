import instance from ".";




const getUsers = async () => {
    const res = await instance.get('/users')
    return res.data
}



export {
    getUsers
}