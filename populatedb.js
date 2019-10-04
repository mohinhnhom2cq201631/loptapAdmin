var mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
//connect mongoose
var mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Product = require('./models/products');
const Brand = require('./models/brands');
const Component = require('./models/components');
const User = require('./models/users');
const Order = require('./models/orders');
const Admin = require('./models/admins');

mongoose.connect(mongoDB, { useNewUrlParser: true },async function(error) {
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
    

    //tạo component Gaming
    const mvcComponent1 = new Component({
        _id: new mongoose.Types.ObjectId(),
        name: 'Gaming',
        type: 'Dòng laptop',
        description: 'Dòng laptop chuyên dùng để chơi game'
    });

    mvcComponent1.save(function(error){
        if (error) throw error;
    });

    const Gaming = mvcComponent1._id;
    
    //tạo component Chip AMD Ryzen 7-3750H
    const mvcComponent2 = new Component({
        _id: new mongoose.Types.ObjectId(),
        name: 'AMD Ryzen 7-3750H',
        type: 'Chip',
        description: 'Nhờ sự xuất hiện của “vị cứu tinh” Ryzen 7 3850H mạnh nhất tính đến hiện tại của AMD, giá thành laptop gaming nói riêng giờ đây đã được giảm xuống đáng kể do không dùng chip xử lý của Intel là dòng Core i5-H series, từ đó các nhà sản xuất sẽ dồn chi phí để đầu tư nâng cấp vào những linh kiện phần cứng, trang bị tính năng công nghệ hoặc thêm số lượng cổng kết nối. Chẳng hạn như, dòng laptop gaming ASUS TUF FX505 / FX705 sẽ có sự kết hợp cùng CPU AMD Ryzen7 với card đồ họa rời NVIDIA GeForce GTX 1660Ti 6GB mới nhất, màn hình tần số quét 120Hz với tấm nền IPS, ổ SSD M.2 PCIe với mức dung lượng lên đến 512GB giúp có được tốc độ khởi chạy hệ thống và các ứng dụng thường dùng nhanh hơn, cũng như có nhiều dưng lượng lưu trữ hơn.'
    });

    mvcComponent2.save(function(error){
        if (error) throw error;
    });

    const AMDRyzen73750H = mvcComponent2._id;
    
    //tạo component RAM 8GB
    const mvcComponent3 = new Component({
        _id: new mongoose.Types.ObjectId(),
        name: 'RAM 8GB',
        type: 'RAM',
        description: '8 Gigabyte RAM'
    });

    mvcComponent3.save(function(error){
        if (error) throw error;
    });

    const RAM8GB = mvcComponent3._id;
    
    //tạo component VGA GTX 1650Ti
    const mvcComponent4 = new Component({
        _id: new mongoose.Types.ObjectId(),
        name: 'GTX 1650Ti',
        type: 'VGA',
        description: 'GTX 1650 sử dụng GPU TU117 mới, nhỏ và rẻ hơn so với TU116 trên card GTX 1660 và 1660 Ti. Vài điểm khác biệt rõ rệt giữa GTX 1650 và dòng 1660 chính là số lượng SM (Streaming Multiprocessor) – chúng dùng để xác định số lượng CUDA core, texture unit và ROP. Nó vẫn được xây dựng dựa trên 12nm. Kết quả là bộ khuôn có kích thước kém hơn một phần ba so với TU116, đạt 4.7 tỉ bóng bán dẫn.'
    });

    mvcComponent4.save(function(error){
        if (error) throw error;
    });

    const GTX1650Ti = mvcComponent4._id;
    
    console.log('Components are created!');

    //tạo product ASUS TUF FX505DT-AL003T
    const mvcProduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'ASUS TUF FX505DT-AL003T',
        img:'img/Asus TUF FX505DT-AL003T',
        brand: ASUS,
        chip: AMDRyzen73750H,
        vga: GTX1650Ti,
        ram: RAM8GB,
        purpose: Gaming,
        size: 15,
        price: 20990000,
        description:''
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