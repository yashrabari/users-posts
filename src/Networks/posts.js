import instance from ".";




const getUsersPosts = async (id) => {
    const res = await instance.get(`/posts?userId=${id}`)
    return res.data
}



export {
    getUsersPosts
}