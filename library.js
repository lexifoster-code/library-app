// write a constructor on books add in data about the book and then call on that data
// remember an object constructor is written like a function
// declare the function using the function keyword
//name that function in this case we will use the name book



const myLibrary=["the fault in our stars, games of thrones, street vengance ,naruto"];

//create a function that loops through the array and returns a specific display pattern.
//also allowing for user input to be displayed

function addToLibrary(){

}

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
//return the a function that dispalys the data about the book.
// cleaner practice to utilze prototype inheritance for function concerning construtor.