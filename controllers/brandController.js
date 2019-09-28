exports.brand_list =  (req,res) =>
{
    //console.log(req.user.info.position === 'Quản lý');
    res.render('brands/list', {
        pageTitle: 'Danh sách thương hiệu',
    });
};