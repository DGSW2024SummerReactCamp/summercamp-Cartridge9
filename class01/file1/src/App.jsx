import React from "react";
import Hello from './Hello';
import Greeting from "./Greeting";
import Wrapper from "./Wrapper";
import MyComponent from "./MyComponent";
import Say from "./Say";
function App(){
  // const name = prompt("이름 입력")
  // return(
  //   <div>
  //     <Wrapper>
  //       <Hello helloName={name}/>
  //       <Greeting greetingName={name}/>
  //     </Wrapper>
  //   </div>
  // );

  // const handleOnchange = (event)=>{
  //   console.log(event.target.value + "라고 입력")
  // }
  // return (
  //   <div>
  //     <input type="text" onChange={handleOnchange} />
  //   </div>
  // )

  return (
    <div>
      {/* <MyComponent name="박재민">리액트방학특강</MyComponent> */}
      <Say></Say>
    </div>

  );
};
export default App;