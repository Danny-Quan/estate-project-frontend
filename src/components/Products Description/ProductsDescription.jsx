import React from "react";
import Backdrop from "./../Backdrop";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./productsDescription.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { useParams } from "react-router-dom";
// import featureData from "./../landingPage/Components/featureData";
import ProductInfo from "./ProductInfo";
import Navbar from "../navigation/Navbar";
import SimilarProductsPage from "./SimilarProductsPage";
import { useState } from "react";
import { useEffect } from "react";
import axios from "./../../axios";

function ProductsDescription() {
  const params = useParams().id;
  const locationParam= useParams().location;
  const [productItem, setProductItem] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/v1/apartments/apartment/${params}`, { withCredentials: true })
      .then((res) => {
        setProductItem(res.data.apartment);
      })
      .catch((err) => console.log(err.response.data.error));
  }, [params]);
  const [dataState, setDataState] = useState();
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/v1/apartments/apartment/${params}`, { withCredentials: true })
      .then((res) => setDataState(res.data.apartment))
      .catch((err) => console.log(err.response.data.message));
  }, [params]);
  useEffect(() => {
    axios
      .get(
        `/api/v1/apartments/allApartments?limit=3&location=${locationParam}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setSimilarProducts(res.data.apartments);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  // const myData = featureData.filter((data) => {
  //   return data.id == params;
  // });
  // const [dataState, setDataState] = useState([]);
  // useEffect(() => {
  //   setDataState(myData);
  // }, []);

  // const productData = productItem.map((product) => (
  //   <ProductInfo key={product.id} {...product} />
  // ));
  //console.log(myData)

  const products = similarProducts.map((product) => (
    <SimilarProductsPage key={product._id} {...product} />
  ));
  return (
    <section>
      <div className="container">
        <div className="navbar--styled">
          <Navbar />
        </div>
        <div className="full--description--and--sidebar">
          <div className="description--content">
            <Splide
              options={{
                perPage: 1,
                arrows: true,
                pagination: false,
                gap: "1rem",
              }}
            >
              {/* {dataState.map((product) =>
                product.images.map((img, index) => (
                  <SplideSlide key={img[index]}>
                    <div className="product--img--card">
                      <img src={img} alt="" />
                    </div>
                  </SplideSlide>
                ))
              )} */}
              <SplideSlide>
                <div className="gallery--slider">
                  <img
                    src={`https://estate-project-backend.herokuapp.com/public/img/apartments/${productItem.coverPhoto}`}
                    alt=""
                  />
                </div>
              </SplideSlide>
            </Splide>

            <div>{<ProductInfo /> ? <ProductInfo /> : <Backdrop />}</div>
          </div>
          <div className="product-description-sidebar">
            <h2>Similar Apartments</h2>
            {products ? products : <Backdrop />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsDescription;
