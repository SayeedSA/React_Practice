import React, {Component} from "react";
//import Person from './Person';



// function Person(){
//     return (
//       <div>
//         <h1>My name is Sayeed Component</h1>
//       </div>
//     );
//   }

//Use Props as a parameter in a function

  let Person = (props) => {
      console.log(props)
    return (
        <div>
          <h1>Name {props.name} and Age {props.age} years  </h1>
        </div>
      );
  }


//use props in a class as a constructor parameter
// class Person extends Component{
//   // constructor(props){
//   //   super(props);
//   // }
//   render() {
//     console.log(this.props);
//     return (
//             <div>
//               <h1>Name {this.props.name} and Age {this.props.age} years  </h1>
//             </div>
//           );
//   }
// }

  export default Person;
