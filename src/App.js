import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui_slice";
let isFirstTime = true;

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (isFirstTime) {
      isFirstTime = false;
      return;
    }
    dispatch(
      uiActions.showNotification({
        type: "warning",
        message: "Sending request...",
        open: true,
      })
    );
    const updateCart = async () => {
      let response = await fetch(
        "https://redux-http-5cdae-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await response.json();
      dispatch(
        uiActions.showNotification({
          type: "success",
          message: "Added cart items successfully1",
          open: true,
        })
      );
    };

    updateCart().catch((e) => {
      dispatch(
        uiActions.showNotification({
          type: "error",
          message: "Added cart error",
          open: true,
        })
      );
    });
  }, [cart]);

  return (
    <div className="App">
      {notification && notification.open && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
