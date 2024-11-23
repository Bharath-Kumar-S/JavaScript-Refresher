// import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import Home from './Home';
// import Stars from './Stars';

// const App = () => (
//   <Router>
//     <nav>
//       <NavLink
//         to="/"
//         end // Ensures only the exact path "/" is matched
//         style={({ isActive }) => ({
//           color: isActive ? 'cyan' : 'grey'
//         })}
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/stars"
//         style={({ isActive }) => ({
//           color: isActive ? 'cyan' : 'grey'
//         })}
//       >
//         Stars
//       </NavLink>
//     </nav>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/stars" element={<Stars />} />
//     </Routes>
//   </Router>
// );

// export default App;





// import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
// import Observatory from './Observatory';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         {/* Navigation link to Observatory */}
//         <NavLink
//           to="/observatory"
//           style={({ isActive }) => ({
//             color: isActive ? 'cyan' : 'grey'
//           })}
//         >
//           Observatory
//         </NavLink>
//       </nav>
//       <Routes>
//         {/* Route for the Observatory component */}
//         <Route path="/observatory" element={<Observatory />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

