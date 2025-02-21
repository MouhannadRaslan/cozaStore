import Product from "./Product";
import Footer from "./Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, useRef } from "react";
import HomeStyle from "./Home.module.css";

function Home(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const moveSlide = (direction) => {
    const totalSlides = 3; 
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <>
    {/* banner start */}
    <div className={HomeStyle.banner}>
      <div
        className={`${HomeStyle.slider} slider`}
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}vw)`, transition: "0.5s ease-in-out" }}
      >
        <div className={HomeStyle.slide1}>
          <div data-aos="fade-right" className={HomeStyle.slideContent}>
            <h3>Women Collection 2018</h3>
            <h1>NEW SEASON</h1>
            <a href="">SHOP NOW</a>
          </div>
        </div>
        <div className={HomeStyle.slide2}>
          <div data-aos="fade-right" className={HomeStyle.slideContent}>
            <h3>Men New Season</h3>
            <h1>JACKETS & COATS</h1>
            <a href="">SHOP NOW</a>
          </div>
        </div>
        <div className={HomeStyle.slide3}>
          <div data-aos="fade-right" className={HomeStyle.slideContent}>
            <h3>Men Collaction 2018</h3>
            <h1>NEW ARRIVALS</h1>
            <a href="">SHOP NOW</a>
          </div>
        </div>
      </div>
      <div className={HomeStyle.prev} onClick={() => moveSlide(-1)}>
      <i class="fa-solid fa-caret-left fa-2xl"></i>
      </div>
      <div className={HomeStyle.next} onClick={() => moveSlide(1)}>
      <i class="fa-solid fa-caret-right fa-2xl"></i>
      </div>
    </div>
    <section className={HomeStyle.section}>
        <div className={`${HomeStyle.sectionImg1} ${HomeStyle.sectionImg}`}>
           <h1>Women</h1>         
           <p>spring 2018</p>
           <span>SHOP NOW</span>
        </div>
        <div className={`${HomeStyle.sectionImg2} ${HomeStyle.sectionImg}`}>
           <h1>Men</h1> 
           <p>spring 2018</p>
           <span>SHOP NOW</span>
        </div>
        <div className={`${HomeStyle.sectionImg3} ${HomeStyle.sectionImg}`}>
           <h1>Accessories</h1> 
           <p>New Trend</p>
           <span>SHOP NOW</span>
        </div>
    </section>
    {/* banner end */}
    <Product/>
    <Footer/>
    </>
  );
}

export default Home;
