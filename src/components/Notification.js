import { Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui_slice";

const Notification = ({ type, message }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(uiActions.closeNotification());
  };

  return (
    <Alert severity={type} onClose={handleClose}>
      {message}
    </Alert>
  );
};

export default Notification;
