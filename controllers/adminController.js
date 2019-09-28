exports.admin_list =  (req,res) =>
{
    //console.log(req.user.info.position === 'Quản lý');
    res.render('admin/list', {
        pageTitle: 'Danh sách admin',
    });
};