exports.homepage= function (req,res) {
    const name = req.user.username;
    res.render('dashboard',{pageTitle:'Dashboard',nameAdmin: name,admin: req.admin,
})
}