const sequelize = require("sequelize");
// const Op = sequelize.Op;
// const router = new express.Router();

const Status = require("./models/index").Status;
const User = require("./models/index").User;
const Author = require("./models/index").Author;
const Genre = require("./models/index").Genre;
const Book = require("./models/index").Book;

Status.bulkCreate([
        { name: 'carrito' },
        { name: 'creado' },
        { name: 'cancelado' },
        { name: 'procesando' },
        { name: 'completado' }
    ])
    .then(() => {
        User.create({
            name: 'admin',
            address: 'Castillo',
            email: 'admin@gmail.com',
            isAdmin: true,
            password: 'admin'
        })
    })
    .then(() => {
        Author.bulkCreate([{
                name: 'Marcos',
            },
            {
                name: 'Matias',
            },
            {
                name: 'Rodrigo',
            },
            {
                name: 'Marcela',
            },
            {
                name: 'Pepe',
            },
        ])
    })
    .then(() => {
        Genre.bulkCreate([{
                name: 'Programacion',
            },
            {
                name: 'Electronica',
            },
            {
                name: 'Ficcion',
            },
            {
                name: 'No ficcion',
            },
            {
                name: 'Novela',
            },
        ])
    })
    .then(() => {
        Book.bulkCreate([{
                title: 'Design Patterns',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: 1399,
                stock: 50,
                urlImage: 'https://images-na.ssl-images-amazon.com/images/I/51szD9HC9pL._SX258_BO1,204,203,200_.jpg'
            },
            {
                title: 'PHP Design Patterns',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: 1199,
                stock: 150,
                urlImage: 'https://covers.oreillystatic.com/images/0636920028062/lrg.jpg'
            },
            {
                title: 'JavaScript Patterns',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: 999,
                stock: 20,
                urlImage: 'https://covers.oreillystatic.com/images/9780596806767/lrg.jpg'
            },
            {
                title: 'JavaScript Design Patterns',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: 1399,
                stock: 83,
                urlImage: 'https://covers.oreillystatic.com/images/0636920025832/lrg.jpg'
            },
            {
                title: 'High Performance Web Sites',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: 1999,
                stock: 128,
                urlImage: 'https://images-na.ssl-images-amazon.com/images/I/51V30oEPSDL._SX379_BO1,204,203,200_.jpg'
            },
            {
                title: 'Maintainable JavaScript',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: 859,
                stock: 50,
                urlImage: 'https://covers.oreillystatic.com/images/0636920025245/lrg.jpg'
            },
            {
                title: 'OpenShift for Developers',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: 399,
                stock: 5,
                urlImage: 'https://i2.wp.com/blog.openshift.com/wp-content/uploads/book.png?fit=760%2C999&ssl=1'
            },
            {
                title: 'Cloud Native Infrastructure',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: 1399,
                stock: 3,
                urlImage: 'https://cdn-images-1.medium.com/max/1600/1*xqL4Yr_APkjpb9pA3hxuoA.png'
            },
            {
                title: 'Jenkins',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: 1519,
                stock: 180,
                urlImage: 'http://2.bp.blogspot.com/-UXLJ6Wfrbxs/Twq0pKw6H4I/AAAAAAAABI4/TNm9WhLWqw4/s1600/jenkins-cover-small.jpg'
            },
            {
                title: 'Essential SQLAlchemy',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: 999,
                stock: 50,
                urlImage: 'https://covers.oreillystatic.com/images/9780596516147/lrg.jpg'
            },
        ])
    })