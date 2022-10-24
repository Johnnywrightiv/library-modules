var Library = function() {
  var books = [];
  var addBook = function(book) {
    books.push(book);
  };
  var checkOutBook = function(book) {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', true);
    };
  };
  var returnBook = function(book) {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', false);
    } else {
      return `Error: No book with the name ${book} found in Library.`
    }
  };
  
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook,
  };
};

var Book = function(title, author) {
  var attributes = {
    checkedOut: false,
    title: title,
    author: author,
  };
  var getAttribute = function(attribute) {
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    } else {
      attributes[attribute] = undefined
    }
  };
  var setAttribute = function(attributeName, value) {
    if (attributes.hasOwnProperty(attributeName)) {
      attributes[attributeName] = value;
    };
  };
  
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute,
  };
};