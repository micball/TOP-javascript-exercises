const getTheTitles = function(booksObj) {
    let arr = booksObj.map(book=> book.title);
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
