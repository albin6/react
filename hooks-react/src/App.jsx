// import './App.css'
// import React from 'react'
// import MyContext from './components/MyContext'
// import ChildOne from './components/ChildOne'

// const userData = {
//   userName: 'xlone',
//   isLoggedin: false
// }

// function App() {
//   return (
//     <div>
//       <MyContext.Provider value={userData} >
//         <ChildOne />
//       </MyContext.Provider>
//     </div>
//   )
// }

// export default App

// import './App.css';
// import React from 'react';
// import Memoize from './components/Memoize';

// const skills = ['js', 'express', 'react'];

// function App() {
//   return (
//     <div>
//       <Memoize skills={skills} />
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import React from "react";
// import ParentComponent from "./components/ParentComponent";

// function App() {
//   return (
//     <div>
//       <ParentComponent />
//     </div>
//   );
// }

// export default App;

import "./App.css";

import React from "react";
import ReactMemo from "./components/ReactMemo";

function App() {
  return <ReactMemo num={2} />;
}

export default App;
