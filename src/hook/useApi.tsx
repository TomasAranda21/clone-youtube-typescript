import { useContext } from "react";
import ApiProvider from "../context/ApiContext";


const useApi = () => {

    return useContext(ApiProvider)

}

export default useApi