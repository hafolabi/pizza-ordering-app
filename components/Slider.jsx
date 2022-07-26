import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Slider.module.css";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  
  const images = [
    "/img/slide1.png",
    "/img/slide2.png",
    "/img/slide3.png",
  ]

  const handleArrow =(direction)=>{
    if(direction === "l"){
      setSlideIndex(slideIndex !== 0 ? slideIndex - 1 : 2)
    }
    if(direction === "r"){
      setSlideIndex(slideIndex !== 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left:0}} onClick={()=> handleArrow('l')}>
      <Image src="/img/arrowl.png" layout='fill' alt="" objectFit="contain"  />
      </div>

      <div className={styles.wrapper} style={{transform: `translateX(${-100 * slideIndex}vw)`}}>
          {images.map((img, i)=>(
            <div className={styles.imgContainer} key={i}>
             <Image src={img} layout='fill' alt="" objectFit="contain" />
             </div>
          ))}
      </div>

      <div className={styles.arrowContainer} style={{right:0}} onClick={()=> handleArrow('r')}>
      <Image src="/img/arrowr.png" layout='fill' alt="" objectFit="contain"  />
      </div>
    </div>
  );
};

export default Slider;
