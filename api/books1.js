var readBookFromFile = (bookPath, cb) => {
  console.log("BEGIN book reading ...")
  setTimeout(() => {
    // emulating a two second file read
    var bookData = {
      "title" : "The Bible",
      "content" : "In the beginning God created the heavens and the earth ..."
    }

    console.log("END book reading");

    cb(null, bookData)
  }, 2000)
}

var saveBookToTable = (bookData, cb) => {
  console.log("BEGIN saving book to table ...")
  setTimeout(() => {
    // emulating a one second table write
    // INSERT INTO books ...

    console.log("END saving book to table")

    cb(null)
  }, 1000)
}

var pushToWebService = (bookData, cb) => {
  console.log("BEGIN API call ...")
  setTimeout(() => {
    // emulating a one and a half second web services API call
    // POST book data to books-r-us.com
    var apiResponse = {
      "status" : 200,
      "message" : "102030491ABC"
    }

    console.log("END API call")

    if(apiResponse.status == 200) {
      cb(null, apiResponse.message)
    } else {
      cb(apiResponse.message)
    }
  }, 1500)
}

module.exports = {
  readBookFromFile,
  saveBookToTable,
  pushToWebService
}
