import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
// import { useEffect } from "react";

function App() {
  // const cart = useSelector(state => state.cart);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // useEffect(() => {
  //   const sendresponse = async () => {
  //     const res = await fetch(``,{
  //       method: 'POST',
  //       body: JSON.stringify(cart),
  //     }); //call to backend
  //     const data = await res.json();
  //     return data;
  //   }
  //   return sendresponse;
  // }, [cart])

  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout /> }
    </div>
  );
}

export default App;
