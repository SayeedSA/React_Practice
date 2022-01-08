import React, {Component} from 'react'
//import logo from './logo.svg';
import './App.css';
import Book from './components/Book';
//import Person from './components/Person';


//Functional Component
// function App() {
//   return (
//     <div className="App">
//       <h1>Sayeed</h1>
//       <Person />
//     </div> 
//   );
// }

//Class Component
// class App extends Component{
//   //state declare in only class component 
//   //state is own component value and it's a class component property
//   //props is access outside declare value
//   state = {
//     //it's own property of App.js
//     books : [
//       { bookName: "1994", Writer: "Sayeed" },
//       { bookName: "2012", Writer: "Sabbir" },
//       { bookName: "1995", Writer: "Ahmed" }
//     ],
//     otherProp: "I am some other prop"
//   }
  // constructor(){
  //   super();
  //   this.state = {};
  // }


  //add button to change value
  //It's For Practice 
// changeBookState = newBookName => {
//   // Wrong way: this.state.books[0].bookName = "1974"
//   this.setState({
//     books : [
//       { bookName: newBookName, Writer: "Sayeed" },
//       { bookName: "2012", Writer: "Sabbir" },
//       { bookName: "Onk Porte Hobe", Writer: "Ahmed" }
//     ]
//   });
// }

// changeInputState = event => {
//   this.setState({
//     books : [
//       { bookName: event.target.value, Writer: "Sayeed" },
//       { bookName: "2012", Writer: "Sabbir" },
//       { bookName: "Onk Porte Hobe", Writer: "Ahmed" }
//     ]
//   });
// }

// deleteBookState = index =>  {
//   const books = this.state.books.slice();
//   books.splice(index, 1)
//   this.setState({
//     books: books
//   })
// }

//   render(){ 

//     //const booksState = this.state.books;

//     const books = this.state.books.map((book,index) => {
//      return (
//       <Book 
//       bookName = {book.bookName} 
//       writer = {book.writer}
//       delete = {() => this.deleteBookState(index)}
//       />
//      )
//     })

//     console.log(books)
    //console.log(booksState)
    // let obj = new Component();
    // console.log(obj);
    
    //   return ( 
    // <div className="App">
    //   <h1>Book List</h1>
      // {/* <button onClick={this.changeBookState.onShow.bind(this, "Shukria")}>Change State</button>
      //   <input type="text" onChange={this.changeInputState} />
      //   {books} */}
      //   {/* <Book bookName={this.state.books[0].bookName} 
      //   Writer={this.state.books[0].Writer} />
      //   <Book bookName={this.state.books[1].bookName} 
      //   Writer={this.state.books[1].Writer} 
      //   inputName = {this.changeInputState}/>
      //   <Book bookName={this.state.books[2].bookName}
      //   Writer={this.state.books[2].Writer}
      //   change={this.changeBookState.bind(this, "Ruhani")} /> */}
      //   {/* <Book bookName="1984" Writer="George Orwell" />
      //   <Book bookName="1990" Writer="Sayeed" />
      //   <Book bookName="1970" Writer="Ahmed" /> */}
      // {/* <Person name="rahim" age="30" />
      // <Person name="kahim" age="40" /> */}
     
  //   </div> 
  // );
  // }


// Programming Hero Start

function App() {
  const products =[
    {name: 'Photoshop', price:'$90'},
    {name: 'Illustrator', price:'$65'},
    {name: 'Pdf reader', price:'$5'},
    {name: 'Adobe XD', price:'$200'}
  ]
  const friends =[
    {name: 'sayeed', age: '20'},
    {name: 'sabbir', age: '21'},
    {name: 'ahmed', age: '22'}
  ]
  const productNames = products.map(product => product.name)
  console.log(productNames)
  return(
    <div className='App'>
        <header className='App-header'>
          <p>Sayeed</p>

          <ul>
            {
              products.map(product=><li>{product.name}</li>)
            }
          </ul>
          {
            products.map(pd => <Product product={pd}></Product>)
          }
          {
            friends.map(fr => <Friend friend={fr}></Friend>)
          }
          <Sabbir name="Rubel Nayok"></Sabbir>
          <Sabbir name="Manna"></Sabbir>
          <Sabbir name="Bapparaj "></Sabbir>
        </header>
    </div>
  )
}
function Friend(props) {
  const frameStyle={
    border:'1px solid grey',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height: '250px',
    width: '200px',
    float:'left'
  }
  const {name, age} = props.friend;
  
  return(
    <div style={frameStyle}>
      <h3>{name}</h3>
      <h2>{age}</h2>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid grey',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height: '250px',
    width: '200px',
    float:'left'
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>      
      <button>Buy Now</button>
    </div>
  )
}

function Sabbir(props) {
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  console.log(props)
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Boss</h3>
    </div>
  
  )
}


export default App;
