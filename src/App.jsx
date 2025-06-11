import { useState } from 'react'
import { BrowserRouter, useParams } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import clsx from 'clsx';
import React from 'react'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path="" element={}></Route>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  )
}

export default App
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App
//          />
//       </BrowserRouter>
//     </React.StrictMode>
//   );
