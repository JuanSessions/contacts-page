
import React, { useEffect, useState } from 'react';

const BooksList = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        //fetch("http://monogo-contacts-juan.herokuapp.com/books")
        fetch("http://localhost:3001/books")
            .then(res => res.json())
            .then(data => {
                setBooks(data.books)
            })
    }, [])

    console.log("books:", books);

    return (
        <div>
            <h1>Books List Page</h1>
            <p>display of catalog</p>
            {
                books && books.map(book => {
                    return (
                        <div key={book.id}>
                            <h2> {book.title}</h2>
                            <p>{book.author} </p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default BooksList;



















// import React from 'react';
// import { connect } from 'react-redux';



// class Book extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     submitBook(input) {
//         this.props.createBook(input)
//     }

//     render() {
//         //title input tracker
//         let titleInput;
//         //return JSX
//         return (
//             <div>
//                 <h3>Books</h3>
//                 <ul>
//                     {/*traverse books array */}
//                     {this.props.books.map((b, i) => <li key={i}>{b.title}</li>)}
//                 </ul>
//                 <div>
//                     <h3>Books Form</h3>
//                     <form onSubmit={e => {
//                         //prevent request
//                         e.preventDefault();
//                         //Assemble inputs
//                         let input = { title: titleInput.value };
//                         //Call handler
//                         this.submitBook(input);
//                         //Reset Form
//                         e.target.reset();
//                     }}>
//                         <input type="text" name="title" ref={node => titleInput = node} />
//                         <input type="submit" />
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }
// //Map state from store to props
// const mapStateToProps = (state) => {
//     return {
//         //gives access to this.props.books -
//         books: state.books
//     }
// };


// //Map actions to props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         //can now ccess this.props.createBook
//         createBook: book => dispatch(bookActions.createBook(book))
//     }
// };

// //use connect to put them together
// export default connect(mapStateToProps, mapDispatchToProps)(Book);