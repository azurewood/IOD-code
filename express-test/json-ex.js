

const book={
    title: "to the Moon",
    description: "a book about space travelling",
    author:"Jian",
    pages:"400"
}


console.log(JSON.stringify(book))

const bookStr=`{"title":"To the Moon","description":"a book about space travelling","author":"Jian","pages":"400"}`
console.log(JSON.parse(bookStr).title)