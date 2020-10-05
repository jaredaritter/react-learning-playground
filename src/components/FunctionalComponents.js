import React from 'react';

// FUNCTION DECLARATION
// function FunctionalComponent(props) {
//   return (
//     <div>
//       <h3>{props.title}</h3>
//     </div>
//   );
// }

// ARROW FUNCTION
const FunctionalComponent = (props) => {
  const { title } = props; // DESTRUCTURING WORKS

  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default FunctionalComponent;
