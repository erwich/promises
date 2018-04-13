var books = require('./api/books1');
var promiseBooks = require('./api/books2');

// Goal: read a 'book' from a given file path, insert the book into a SQL table,
// then make an API call to a third party site to let it know we have a new book

books.readBookFromFile('/path/to/book.txt', (err, bookData) => {
  if(err) {
    // awesome error handling
  } else {
    books.saveBookToTable(bookData, (err) => {
      if(err) {
        // some more error handling... which is harder
      } else {
        books.pushToWebService(bookData, (err, confirmation) => {
          // man this feels like a house built on sand
          if(err) {
            // ok, what? How do I even handle this?
          } else {
            // I guess we succeeded?
            console.log("Success: " + confirmation)
          }
        })
      }
    })
  }
});

/*
 * Promises!
 */

promiseBooks.readBookFromFile('/path/to/book.txt')
  .then((bookData) => {
    return promiseBooks.saveBookToTable(bookData)
  })
  .then((bookData) => {
    return promiseBooks.pushToWebService(bookData)
  })
  .then((confirmation) => {
    console.log("Success: " + confirmation)
  })
  .catch((error) => {
    console.log("Error: " + error)
  });
