var mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
//connect mongoose
var mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Product = require('./models/products');
const Brand = require('./models/brands');
const Purpose = require('./models/purposes');
const User = require('./models/users');
const Order = require('./models/orders');
const Admin = require('./models/admins');

mongoose.connect(mongoDB, { useNewUrlParser: true }, function(error) {
    if (error)
        throw error;

    console.log('Successfully connected');

    //tạo admin Nguyen
    const mvcAdmin = new Admin({
        _id: new mongoose.Types.ObjectId(),
        username: 'nhoknguyen00',
        password: '123',
        position: 'Quản lý'
    });

    mvcAdmin.password = mvcAdmin.generateHash(mvcAdmin.password);

    mvcAdmin.save(function(error){
        if (error) throw error;
    });
    console.log('Admin is created!');

    //tạo brand Asus
    const mvcBrand = new Brand({
        _id: new mongoose.Types.ObjectId(),
        name:'ASUS',
        img: 'img/Asus.jpg',
        description: 'ASUSTeK Computer Incorporated là một tập đoàn đa quốc gia đặt trụ sở tại Đài Loan chuyên sản xuất các mặt hàng điện tử như bo mạch chủ, máy tính xách tay, máy chủ, điện thoại di động và các sản phẩm máy tính khác.'
    });

    mvcBrand.save(function(error){
        if (error) throw error;
    });

    const ASUS = mvcBrand._id;
    console.log('Brand is created!');

    //tạo purpose Gaming
    const mvcPurpose = new Purpose({
        _id: new mongoose.Types.ObjectId(),
        name: 'Gaming',
        description: 'Dòng laptop chuyên dùng để chơi game'
    });

    mvcPurpose.save(function(error){
        if (error) throw error;
    });

    const Gaming = mvcPurpose._id;
    console.log('Purpose is created!');

    //tạo product ASUS TUF FX505DT-AL003T
    const mvcProduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'ASUS TUF FX505DT-AL003T',
        img:'img/Asus TUF FX505DT-AL003T',
        brand: ASUS,
        purpose: Gaming,
        size: 15,
        price: 20990000,
        description:'Chip AMD Ryzen 7 – 3750H, SSD 512GB, Ram 8GB'
    });

    mvcProduct.save(function(error){
        if (error) throw error;
    });

    const TUF_FX505DT = mvcProduct._id;
    console.log('Product is created!');

    //tạo user nhoknguyen00
    const mvcUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username: 'nhoknguyen00',
        password: '123',
        email: 'miketuannguyen@gmail.com',
        info: {
            name: 'Nguyen',
            address: '227 Nguyễn Văn Cừ',
            sdt: '123456789',
        },
    });

    mvcUser.password = mvcUser.generateHash(mvcUser.password);

    mvcUser.save(function (error) {
        if(error) throw error;
    });
    const Nguyen = mvcUser._id;
    console.log('User is created!');

    //tạo order
    const mvcOrder = new Order({
        _id: new mongoose.Types.ObjectId(),
        user: Nguyen,
        cart:{},
        payment:'Ship COD',
        created: Date.now(),
        status: 'Đã giao'
    });

    mvcOrder.save(function (error) {
        if(error) throw error;
    });
    console.log('Order is created!');
});