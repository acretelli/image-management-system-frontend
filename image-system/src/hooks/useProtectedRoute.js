import { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import AppContext from "../context/AppContext";

const useProtectedRoute = () => {
    const history = useHistory();
    const appContext = useContext(AppContext);
    const token = window.localStorage.getItem("token");

    useEffect(() => {
        if(token === null) {
          history.push("/login");
        }

        if(!appContext) {
          history.push("/");
        }
      }, [history]);

  return token;
};

export default useProtectedRoute;