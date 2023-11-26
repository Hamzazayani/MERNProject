const isAdmin = (req, res, next) => {
    if (req.user.role == "Admin") {
        next()
        return;
    }
    res.status(401).send({msg: "access denied"})
}
module.exports=isAdmin