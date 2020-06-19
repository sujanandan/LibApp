const express = require("express");

const authorRouter1 = express.Router();//using express.router class for book router
//called function
function router(nav){

var authors=[
    { 
        name:' Rabindranath Tagore',
        lang:'English,Bengali',
        desc:"He was a Bengali poet, writer, music composer, and painter from the Indian subcontinent.",
        book:"Githanjali,Gora",
        img:"tagore.jpg"   // static file is accessed it should be in Public as mentioned
    },
    { 
        name:'A P J Abdul Kalam',
        lang:'English',
        desc:"Abdul Kalam was an Indian aerospace scientist and politician who served as the 11th President of India",
        book:"Wings of Fire,Ignited Minds",
        img:"kalam.jpg"   // static file is accessed it should be in Public as mentioned
      },
    { 
        name:'William Shakespeare',
        lang:'English',
        desc:"He is often called England's national poet and the Bard of Avon",
        book:"Hamlet, The Tempest, Othello",
        img:"shakesphere1.jpg"   // static file is accessed it should be in Public as mentioned
      },
      { 
        name:'Basheer',
        lang:'Malayalam',
        desc:"Vaikom Muhammad Basheer, fondly known as Beypore Sultan, was an Indian independence activist and writer of Malayalam literature.",
        book:"Pathummayude Aadu,Balyakalasakhi",
        img:"basheer.jpeg"   // static file is accessed it should be in Public as mentioned
      },
      { 
        name:"Kamala Surayya",
        lang:'Malayalam',
        desc:"Popularly known by her one-time pen name Madhavikutty .She is famous for her short stories and autobiography.",
        book:"Neermathalam,Neypayasam",
        img:"kamala.jpg"   // static file is accessed it should be in Public as mentioned
      }
      
    ]  
    
    //Method 2 
    authorRouter1.get('/',function(req,res){
        res.render("author",
    {
        // nav:[{link:'/books',name:'Books'},
        // {link:'/authors',name:'Author'}],
        nav,
        title:'Library Management',
        authors    // pass books array along with the response(route)
    });
    });
    // for book single page
    authorRouter1.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('authors',
        {
        // nav:[{link:'/books',name:'Books'},
        // {link:'/authors',name:'Author'}],
        nav,
        title:'Library Management',
        author:authors[id]
        });
    });
    return authorRouter1;
}
    module.exports=router;

