// write a constructor on books add in data about the book and then call on that data
// remember an object constructor is written like a function
// declare the function using the function keyword
//name that function in this case we will use the name book
//create a function that loops through the array and returns a specific display pattern.
//also allowing for user input to be displayed

//hardcoded to test and assure everything is running properly
const myLibrary=[{
    title:"the fault in our stars",
    author:"John Green",
    pages: "313",
    description:"insightful, bold, irreverent, and raw,  The Fault in Our Stars is award-winning author John Green's most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love."

},
{
    title:"Game of thrones",
    author:"George R.R Martin",
    pages: "n/a",
    description:"A Game of Thrones is a contemporary masterpiece of fantasy. The cold is returning to Winterfell, where summers can last decades and winters a lifetime"
}
]

const addBook =(ev) =>{
    ev.preventDefault(); //stops the form from submitting so you wo9nt lose all of your data
    const myBook = {  
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value,
        description: document.getElementById("description").value,
        rating: document.getElementById("rating").value

    }
    myLibrary.push(myBook);//an Array method used to update items in an array

    //one way to reset a form:document.forms.reset()
    document.querySelector("form").reset()
}
// saving to local storage
//local storage saves in a key value pair and once stored it doesnt expire meaning even if you clolse the browser window all data saved
//will remain there.

localStorage.setItem("myBookList" , JSON.stringify(myBook));

function book(title, author ,pages, description , rating){
    this.title = title
    this.author = author
    this.pages = pages
    this.decription = description
    this.rating = rating
    this.info = function(){
        console.log(book.info())
    }
}

//makes sure all content is loaded and adds a event listener to btn and will then run the function addbook.
document.addEventListener("DOMContentLoaded", 
()=>{
    document.getElementById("btn").addEventListener("click", addBook);
});
//return the a function that dispalys the data about the book.
// cleaner practice to utilze prototype inheritance for function concerning construtor.