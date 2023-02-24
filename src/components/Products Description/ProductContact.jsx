import React, {
  useRef,
  useState,
  useContext,
} from "react";
import Navbar from "../navigation/Navbar";
import emailjs from "@emailjs/browser";
import { hideAlert } from "../alerts";
import { showAlert } from "../alerts";
import { productContext } from "./ProductContext";
import ProductContactDetails from "./ProductContactDetails";
import Backdrop from './../Backdrop';

function ProductContact() {
  const inputName = useRef(null);
  const inputPhone = useRef(null);

  // const params = useParams().id;
  // const [productData, setProductData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`/api/v1/apartments/apartment/${params}`, { withCredentials: true })
  //     .then((res) => setProductData(res.data.apartment))
  //     .catch((error) => console.log(error.response.data.error));
  // }, []);

  // using context
  const productData = useContext(productContext);
console.log(productData)
  const [message, setMessage] = useState({});
  //handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    message.price = productData.price;
    message.duration = productData.yearsForRent;
    message.location = productData.location;
    message.propertyType = productData.propertyType;
    message.numberOfPersons = productData.numberOfPersons;
    message.summary = productData.summary;
    message.name = inputName.current.value;
    message.phone = inputPhone.current.value;
    const submitMessage = { ...message };
    emailjs
      .send(
        "service_13ea9k8",
        "template_nwapi5v",
        submitMessage,
        "6dDXpbDUVZb9J98Mi"
      )
      .then(
        (results) => {
          hideAlert();
          showAlert(
            "success",
            "Details sent successfull. our agent will contact soon!"
          );
        },
        (error) => {
          showAlert("error", "Oops! there was an error. try again later");
        }
      );
  };

  return (
    <div className="container">
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="product--contact">
        {/* here */}
        {<ProductContactDetails /> ? <ProductContactDetails /> : <Backdrop/>}
        <div className="request--call--product">
          <h2>Request for a call</h2>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              ref={inputName}
              placeholder="Enter name"
              name="name"
              required
            />
            <input
              type="tel"
              ref={inputPhone}
              placeholder="Enter Phone number"
              name="phone"
              required
            />
            <button type="submit">Make a request</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductContact;
