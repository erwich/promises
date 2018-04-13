var Promise = require('promise')

var readBookFromFile = (bookPath) => {
  console.log("BEGIN book reading ...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // emulating a two second file read
      var bookData = {
        "title" : "The Bible",
        "content" : "In the beginning God created the heavens and the earth ..."
      }

        console.log("END book reading");

        resolve(bookData)
        // or reject("error message")
    }, 2000)
  })
}

var saveBookToTable = (bookData) => {
  console.log("BEGIN saving book to table ...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // emulating a one second table write
      // INSERT INTO books ...

      console.log("END saving book to table")
      // resolve(bookData)
      reject("Connection to DB went away. :(")
    }, 1000)
  })
}

var pushToWebService = (bookData) => {
  console.log("BEGIN API call ...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // emulating a one and a half second web services API call
      // POST book data to books-r-us.com
      var apiResponse = {
        "status" : 200,
        "message" : "102030491ABC"
      }

      console.log("END API call")

      if(apiResponse.status == 200) {
        resolve(apiResponse.message)
      } else {
        reject(apiResponse.message)
      }
    }, 1500)
  })
}

module.exports = {
  readBookFromFile,
  saveBookToTable,
  pushToWebService
}
