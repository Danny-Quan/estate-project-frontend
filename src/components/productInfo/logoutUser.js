import axios from "./../../axios";
import { showAlert } from "../alerts";
import { hideAlert } from "../alerts";

const logoutUser = () => {
  let confirmed = window.confirm("Are you sure you want to log out?");
  confirmed
    ? axios
        .get("/api/v1/users/logout", { withCredentials: true })
        .then((res) => {
            hideAlert()
            showAlert('success', res.data)
            window.setTimeout(()=>{
                window.location.assign('/login')
            },2000)
        })
        .catch((err) => {
            showAlert('error', err.response.data.error)
        })
    : (confirmed = false);
};
export default logoutUser;
