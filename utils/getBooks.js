const getBooks = (id)=>{
    const BooksArray = [
        {
            id: 1,
            name: 'Learn React v1',
            author: 'Mark Doe',
            releaseDate: new Date(1,3,2020),
            isbn: 123,
            image: 'https://pictures.abebooks.com/isbn/9781976210235-us.jpg'
        },
        {
            id: 6,
            name: 'Learn React v1',
            author: 'Mark Doe',
            releaseDate: new Date(1,3,2020),
            isbn: 123,
            image: 'https://pictures.abebooks.com/isbn/9781976210235-us.jpg'
        },
        {
            id: 2,
            name: 'Learn React v1',
            author: 'Mark Doe',
            releaseDate: new Date(1,3,2020),
            isbn: 123,
            image: 'https://pictures.abebooks.com/isbn/9781976210235-us.jpg'
        },
        {
            id: 3,
            name: 'Learn React v1',
            author: 'Mark Doe',
            releaseDate: new Date(1,3,2020),
            isbn: 123,
            image: 'https://pictures.abebooks.com/isbn/9781976210235-us.jpg'
        },
        {
            id: 4,
            name: 'Learn React v1',
            author: 'Mark Doe',
            releaseDate: new Date(1,3,2020),
            isbn: 123,
            image: 'https://pictures.abebooks.com/isbn/9781976210235-us.jpg'
        },
        {
            id: 5,
            name: 'Learn React v1',
            author: 'Mark Doe',
            releaseDate: new Date(1,3,2020),
            isbn: 123,
            image: 'https://pictures.abebooks.com/isbn/9781976210235-us.jpg'
        },
    ];
    if(id){
       const book = BooksArray.find((b)=> b.id === id);
       return book;
    }
    return BooksArray;
}

export {getBooks};