import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = simpleRestProvider('http://localhost:5000');
// const dataProvider = jsonServerProvider('http://localhost:5000');
function App() {
    return (
        <Admin dataProvider={dataProvider} >
            <Resource name="users" list={ListGuesser} edit={EditGuesser}  />   
        </Admin>
    );
}
export default App;

















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
