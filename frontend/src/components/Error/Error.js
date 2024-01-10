import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearError, selectErrorMessage } from "../../redux/slice/errorSlice";
import { useEffect } from "react";
const Error = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorMessage) {
      if (errorMessage.includes("Error")) {
        toast.error(errorMessage);
      } else {
        toast.info(errorMessage);
      }
      dispatch(clearError());
    }
  }, [errorMessage, dispatch]);

  return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
