"use client";
import Image from "next/image";
import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import waw from "@/public/waw.jpeg";
import rice from "@/public/rice.jpeg";
import items from "@/public/item-list.jpg";

export default function CarouselSlide() {
  // const responsive = {
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 1,
  //     //   slidesToSlide: 3 // optional, default to 1.
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 1,
  //     //   slidesToSlide: 2 // optional, default to 1.
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1,
  //     //   slidesToSlide: 1 // optional, default to 1.
  //     }
  //   };
  const slideImages = [
    {
      url: "/item-list.jpg",
      caption: "Slide 1",
    },
    {
      url: "/waw.jpeg",
      caption: "Slide 2",
    },
    {
      url: "/rice.jpeg",
      caption: "Slide 3",
    },
  ];

  const fadeImages = ["/item-list.jpg", "/waw.jpeg", "/rice.jpeg"];
  return (
    // <div className="slide-container">
    //   {/* <Carousel
    //     swipeable={false}
    //     draggable={false}
    //     showDots={true}
    //     responsive={responsive}
    //     ssr={true} // means to render carousel on server-side.
    //     infinite={true}
    //     autoPlay={true}
    //     autoPlaySpeed={3000}
    //     keyBoardControl={true}
    //     customTransition="all .5"
    //     transitionDuration={500}
    //     containerClass="carousel-container"
    //     removeArrowOnDeviceType={["tablet", "mobile"]}
    //     // deviceType={this.props.deviceType}
    //     dotListClass="custom-dot-list-style"
    //     itemClass="carousel-item-padding-40-px"
    //   >
    //     <div className=" min-h-screen w-full bg-black text-white">
    //     <Image src={items} alt="waw detergent image"/>
    //     </div>
    //     <div className=" min-h-screen w-full bg-black text-white">
    //     <Image src={waw} alt="waw detergent image"/>
    //     </div>
    //     <div className=" min-h-screen w-full bg-black text-white">
    //     <Image src={rice} alt="waw detergent image"/>
    //     </div>
    //     <div className=" min-h-screen w-full bg-black text-white">Item 4</div>
    //   </Carousel> */}
    //   {/* <Slide>
    //     {slideImages.map((slideImage, index) => (
    //       <div key={index}>
    //         <Image src={slideImage.url} width={750} height={1330} alt="yo" className=" w-full"/>
    //       </div>
    //     ))}
    //   </Slide> */}
    // </div>
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <Image src={'/cheap.jpg'} className=" w-full md:hidden" width={300} height={700} alt="yo"/>
          <Image src={'/cheap-lg.jpg'} className=" w-full h-screen md:block"  width={700} height={300} alt="yo"/>
        </div>
        <div className="each-fade">
          <Image src={'/item-list.jpg'} className=" w-full md:hidden" width={300} height={700} alt="yo"/>
          <Image src={'/list-lg.jpg'} className=" w-full h-screen md:block"  width={700} height={300} alt="yo"/>
        </div>
        <div className="each-fade">
        <Image src={'/rice.jpeg'} className=" w-full md:hidden" width={300} height={700} alt="yo"/>
        <Image src={'/rice-lg.jpg'} className=" w-full h-screen md:block"  width={700} height={300} alt="yo"/>
        </div>
        <div className="each-fade">
        <Image src={'/waw.jpeg'} className=" w-full md:hidden" width={300} height={700} alt="yo"/>
        <Image src={'/waw-lg.jpg'} className=" w-full h-screen md:block"  width={700} height={300} alt="yo"/>
        </div>
        
      </Fade>
    </div>
  );
}
