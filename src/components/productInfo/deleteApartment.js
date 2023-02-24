import axios from "./../../axios";
import { showAlert } from "../alerts";
import { hideAlert } from "../alerts";

const deleteApartment = (id) => {
    let confirmed= window.confirm('Are you sure you want to delete this apartment?');
    if(confirmed){
        axios
        .delete(`/api/v1/apartments/apartment/${id}`)
        .then((res) => {
        hideAlert()
        showAlert('success','Apartment deleted successfully');
        window.setTimeout(()=>{
            window.location.reload();
        },2000)
    })
        .catch((err) => {
            //console.log(err)
            showAlert('error',err.response.data.error)
        });
    }else{
        confirmed=false
    }
};

export default deleteApartment;
