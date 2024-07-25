import React from 'react'

const MyComponent = ({name, children}) => {
  return (
    <div>
        이름은 {name} <br />
        childen 값은 {children} 입니다.
    </div>
  );
};
// MyComponent.defaultprops = {
//     name = "기본 이름",
// }

export default MyComponent;
