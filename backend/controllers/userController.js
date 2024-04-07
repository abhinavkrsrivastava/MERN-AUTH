//@Description = Auth User/ set token
//route = POST /api/user/auth
//@access Public

const authUser = (req, res) => {
    res.status(200).json({message : 'Auth user'});
}

export {
    authUser
}