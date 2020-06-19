//importing express into file.
const express=require('express');

//initialize express
const app=new express();

//setting template engine to ejs
app.set('view engine','ejs');
app.set("views","./src/views");
const nav=[
    {link:'/home',name:'HOME',disicon:'fa fa-home'},
    {link:'/book',name:'BOOK',disicon:'fa fa-book'},
    {link:'/author',name:'AUTHOR',disicon:'fa fa-users'},
    {link:'/addbook',name:'ADD BOOK',disicon:'fa fa-envelope'}
];
app.use(express.static('./public'));

//using express.router class for book router
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorRouter = require('./src/routes/authorRoutes')(nav)
// using bus router,whenever /book is coming it should
app.use('/book',booksRouter); 
app.use('/author',authorRouter);
//creating nav as array of objects

//creation of details as array of objects
const details=[{link:'/book',name:'Book',img:'book.jpg',desc:'This section deals with different kids of books like Kids book , Biographies ,Fiction ,Non-Fiction etc. '},
{link:'/author',name:'Author',img:'author.jpg',desc:'Author section list out books based on its authors.different books of same authors can be found here.'},
{link:'/signup',name:'Registration',img:'regislerlog.jpg',desc:'Register with username and password to access all the features.'}
];

//creating end point/route handler for index
app.get('/',function(req,res){
    res.render('index',
    {
    nav:[{link:'/login',name:'LogIn'},
       {link:'/signup',name:'SignUp'}],
        title:'Library Management'
    });
});
//creating router for login

app.get('/login',function(req,res){
    res.render('login',
    {
    nav:[{link:'/login',name:'LogIn'},
       {link:'/signup',name:'SignUp'}
    ],
        title:'Library Management'
    });
});
app.get('/signup',function(req,res){
    res.render('signup',
    {
    nav:[{link:'/login',name:'LogIn'},
       {link:'/signup',name:'SignUp'}
    ],
        title:'Library Management'
    });
});
    
app.get('/home',function(req,res){
    res.render('home',
    {
    nav,details,
        title:'Library Management'
    });
});

app.get('/addbook',function(req,res){
    res.render('addbook',
    {
    nav,
        title:'Library Management'
    });
});


    //Listen on a port
    app.listen(5000);
    
