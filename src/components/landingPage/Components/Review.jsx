import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from 'styled-components'

function Review() {
  // const [size, setSize]= useState()
  // window.addEventListener('resize', (e)=>{
  //   setSize(e.target.innerWidth)
  // })
  const size=(window.innerWidth)
  return (
    <section className="section--review">
      <div className="review--header">
        <h2>Clients Review</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          laboriosam ipsam reprehenderit. Odio veniam commodi distinctio!
          Quibusdam saepe excepturi nemo?
        </p>
      </div>
      <div className="reviews">
        <StyledSplide options={size >= 676?{
          perPage:2,
          arrows:true,
          pagination:false,
          gap: '1.3rem',
        }:{
          perPage:1,
          arrows:true,
          pagination:false,
          gap: '1.3rem',
        }}>
          <SplideSlide>
            <div className="review--card">
              <img src="/img/header--image1.jpg" alt="" />
              <div className="rating">
                <h4>Danny Quan</h4>
                <div className="icon">
                  <AiFillStar /> <span>3.2/5</span>
                </div>
              </div>
              <h5>Software Engineer</h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, ipsa quod nemo eligendi nihil excepturi ut cumque
                accusamus perspiciatis maxime! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Nam, deleniti?
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="review--card">
              <img src="/img/header--image1.jpg" alt="" />
              <div className="rating">
                <h4>Danny Quan</h4>
                <div className="icon">
                  <AiFillStar /> <span>4.5/5</span>
                </div>
              </div>
              <h5>Software Engineer</h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, ipsa quod nemo eligendi nihil excepturi ut cumque
                accusamus perspiciatis maxime! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Possimus, provident.
              </p>
            </div>
          </SplideSlide>
                    <SplideSlide>
            <div className="review--card">
              <img src="/img/header--image1.jpg" alt="" />
              <div className="rating">
                <h4>Danny Quan</h4>
                <div className="icon">
                  <AiFillStar /> <span>4.5/5</span>
                </div>
              </div>
              <h5>Software Engineer</h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, ipsa quod nemo eligendi nihil excepturi ut cumque
                accusamus perspiciatis maxime! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Possimus, provident.
              </p>
            </div>
          </SplideSlide>
                    <SplideSlide>
            <div className="review--card">
              <img src="/img/header--image1.jpg" alt="" />
              <div className="rating">
                <h4>Danny Quan</h4>
                <div className="icon">
                  <AiFillStar /> <span>4.5/5</span>
                </div>
              </div>
              <h5>Software Engineer</h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, ipsa quod nemo eligendi nihil excepturi ut cumque
                accusamus perspiciatis maxime! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Possimus, provident.
              </p>
            </div>
          </SplideSlide>
        </StyledSplide>
      </div>
    </section>
  );
}
const StyledSplide= styled(Splide)`
.splide__track{
    overflow: visible;
}
`

export default Review;
