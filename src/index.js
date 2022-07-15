// import React from "react";
// import reactDom from "react-dom";

// import "bootstrap/dist/css/bootstrap.css";

// import Counter from "./components/counter";

// const App = () => {
//     return <Counter />
// }

// reactDom.render(<App />, document.getElementById("root"));

//================================================================

// import React from "react";
// import ReactDOM from "react-dom/client";

// import "bootstrap/dist/css/bootstrap.css";

// import Counter from "./components/counter";

// const App = () => {
//     return <Counter />
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//=============================================

import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
