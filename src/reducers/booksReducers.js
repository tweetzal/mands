"use strict"
//BOOKS REDUCERS
export function booksReducers (state={books:[
        {
        _id: 1,
        title:'Jeans',
        description: 'Skinny jeans are an essential item in the wardrobe of any modern man, and this style lets you nail the trend without feeling restricted. These stretch jeans for men work to keep you feeling more comfortable throughout the day, whether you’re travelling or taking on a busy weekend.',
            price: 32.95,
            code: 'J01'
        },
        {
            _id: 2,
            title:'Blouse',
            description: 'Our high neck blouse features a button fastening at the back of the neck and contrast cuffs and is cut in a flattering fit that drapes elegantly on the body.',
            price: 24.95,
            code: 'B01'
        },
        {
        _id: 3,
        title:'Socks',
        description: 'Keeping you cool and fresh throughout the day, these essential men’s socks boast antibacterial and moisture wicking properties to keep sweat and unwanted odours away. The multipack of men’s socks are a must have for stocking up your sock drawer with their comfortable, soft cotton rich composition and simple design.',
        price: 7.95,
        code: 'S01'
        }
]},action){
        switch(action.type){

            case "GET_BOOKS":
                // let books = state.books.concat(action.payload);
                // return {books};
                return {...state, books:[...state.books]}
                
            break;

            case "POST_BOOK":
                // let books = state.books.concat(action.payload);
                // return {books};
                return {books:[...state.books,...action.payload]}
            break;

            case "DELETE_BOOK":
                // Create a copy of the current array of books
                const currentBookToDelete = [...state.books]
                // Determine at which index in books array is the book to be deleted
                const indexToDelete =
                currentBookToDelete.findIndex(
                    function(book){
                        return book._id == action.payload;
                } )
                //use slice to remove the book at the specified index
                return {books:[...currentBookToDelete.slice(0, indexToDelete),
                ...currentBookToDelete.slice(indexToDelete +
                    1)]}
            break;
                    
            case "UPDATE_BOOK":
                    // Create a copy of the current array of books
                    const currentBookToUpdate = [...state.books]
                    // Determine at which index in books array is the book to be deleted
                    const indexToUpdate =
                currentBookToUpdate.findIndex(
                    function(book){
                        return book._id === action.payload._id;
                } )
                    // Create a new book object with the new
                    // values and with the same array index of the item
                    // we want to replace. To achieve this we will use
                    // ...spread but we could use concat method as well
                    const newBookToUpdate = {
                    ...currentBookToUpdate[indexToUpdate],
                    title: action.payload.title
                }
                    // This Log has the purpose to show you how newBookToUpdate looks like
                    console.log("what is it newBookToUpdate ? ",newBookToUpdate);
                    //use slice to remove the book at the
                // specified index, replace with the new object and
                // concatenate witht he rest of items in the array
                return {books: [...currentBookToUpdate.slice(0, indexToUpdate),
                    newBookToUpdate,
                    ...currentBookToUpdate.slice(indexToUpdate + 1)]}
            break; 
        }
  return state
}