const express = require("express");

const booksRouter1 = express.Router();//using express.router class for book router
//called function
function router(nav){

var books=[
    { title:'Alice in Wonderland',
      author:' Lewis Carroll',
      genre:'Fantacy',
   desc:"Alice's Adventures in Wonderland by Lewis Carroll is a story about Alice who falls down a rabbit hole and lands into a fantasy world that is full of weird, wonderful people and animals. It is classic children's book that is also popular with adults.",
      img:"kid1.jpg"   // static file is accessed it should be in Public as mentioned
    },
    { title:'Diary of a Wimpy Kid',
    author:'Jeff Kinney',
    genre:'Fiction',
    desc:"Diary of a Wimpy Kid is a children's novel written and illustrated by Jeff Kinney. It is the first book in the Diary of a Wimpy Kid series. The book is about a boy named Greg Heffley and his attempts to become popular in middle school.",
    img:"kid2.jpeg"   
    },
    { title:'Harry Potter',
    author:' J. K. Rowling',
    genre:'Fantasy',
    desc:'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.',

    img:"kid3.jpeg"   
    },
    { title:'Geronimo Stilton',
    author:'Elisabetta Dami',
    genre:"Children's literature",
    desc:"The Stilton family Geronimo Stilton—Geronimo is a rodent that lives in a city called New Mouse City. He is the publisher of the newspaper company, The Rodent's Gazette.",
    img:"kid4.jpeg"  
    },
    { title:'Wings of fire',
    author:'A P J Abdul Kalam',
    genre:'Autobiography',
    desc:"An Autobiography is an autobiographical novel that tells the readers a story about unlocking their inner potential.",
    img:"apj1.jpg"  
    },
    { title:'Julius Ceaser',
    author:'Shakespeare',
    genre:'Drama',
    desc:"The Tragedy of Julius Caesar (First Folio title: The Tragedie of Ivlivs Ceasar) is a history play and tragedy by William Shakespeare first performed in 1599. ",

    img:"shake1.jpg"  
    },
    { title:'Macbeth',
    author:'Shakespeare',
    genre:'Tragedy',
    desc:"Macbeth is a tragedy by William Shakespeare.It dramatises the damaging physical and psychological effects of political ambition on those who seek power for its own sake",
    img:"shake2.jpg"  
    }
    ]  
    
    //Method 2 
    booksRouter1.get('/',function(req,res){
        res.render("book",
    {
        // nav:[{link:'/books',name:'Books'},
        // {link:'/authors',name:'Author'}],
        nav,
        title:'Library Management',
        books    // pass books array along with the response(route)
    });
    });
    // for book single page
    booksRouter1.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('books',
        {
        // nav:[{link:'/books',name:'Books'},
        // {link:'/authors',name:'Author'}],
        nav,
        title:'Library Management',
        book:books[id]
        });
    });
    return booksRouter1;
}
    module.exports=router;

