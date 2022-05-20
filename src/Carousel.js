// App.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Magnifier from "react-magnifier";
// import { GlassMagnifier } from 'react-image-magnifiers';

const images_arr = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
     "https://swiperjs.com/demos/images/nature-9.jpg",
   ];

export default function Carousel() {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    }

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        // arrows: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="App">
            <div className="slider-wrapper">
                <Slider
                    {...settingsMain}
                    asNavFor={nav2}
                    ref={(slider) => setSlider1(slider)}
                >
                    {images_arr.map((img,i) => (
                        <div className="slick-slide" key={i}>
                            <img className ="slick-slide-image" src={img}/>
                            {/* <Magnifier
                                className="slick-slide-image"
                                mgShape = "circle"
                                mgHeight={150}
                                mgWidth={150}
                                src={img}
                            /> */}
                            {/* <GlassMagnifier
                            imageSrc={img} */}
                            {/* // cursorStyle='pointer'
                            // magnifierSize="50px"
                            /> */}
                            {/* {magnify(i,3)} */}
                        </div>
                        
                    ))}
                </Slider>

                

                <div className="thumbnail-slider-wrap">
                    <Slider
                        {...settingsThumbs}
                        asNavFor={nav1}
                        ref={(slider) => setSlider2(slider)}
                    >
                        {images_arr.map((img,i) => (
                            <div className="slick-slide" key={i}>
                                <img
                                    className="slick-slide-image"
                                    src={img}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );

    // function magnify(imgID, zoom) {
    //     var img, glass, w, h, bw;
    //     img = images_arr[imgID];
      
    //     /* Create magnifier glass: */
    //     glass = document.createElement("DIV");
    //     glass.setAttribute("class", "img-magnifier-glass");
      
    //     /* Insert magnifier glass: */
    //     img.parentElement.insertBefore(glass, img);
      
    //     /* Set background properties for the magnifier glass: */
    //     glass.style.backgroundImage = "url('" + img.src + "')";
    //     glass.style.backgroundRepeat = "no-repeat";
    //     glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    //     bw = 3;
    //     w = glass.offsetWidth / 2;
    //     h = glass.offsetHeight / 2;
      
    //     /* Execute a function when someone moves the magnifier glass over the image: */
    //     glass.addEventListener("mousemove", moveMagnifier);
    //     img.addEventListener("mousemove", moveMagnifier);
      
    //     /*and also for touch screens:*/
    //     glass.addEventListener("touchmove", moveMagnifier);
    //     img.addEventListener("touchmove", moveMagnifier);
    //     function moveMagnifier(e) {
    //       var pos, x, y;
    //       /* Prevent any other actions that may occur when moving over the image */
    //       e.preventDefault();
    //       /* Get the cursor's x and y positions: */
    //       pos = getCursorPos(e);
    //       x = pos.x;
    //       y = pos.y;
    //       /* Prevent the magnifier glass from being positioned outside the image: */
    //       if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    //       if (x < w / zoom) {x = w / zoom;}
    //       if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    //       if (y < h / zoom) {y = h / zoom;}
    //       /* Set the position of the magnifier glass: */
    //       glass.style.left = (x - w) + "px";
    //       glass.style.top = (y - h) + "px";
    //       /* Display what the magnifier glass "sees": */
    //       glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    //     }
      
    //     function getCursorPos(e) {
    //       var a, x = 0, y = 0;
    //       e = e || window.event;
    //       /* Get the x and y positions of the image: */
    //       a = img.getBoundingClientRect();
    //       /* Calculate the cursor's x and y coordinates, relative to the image: */
    //       x = e.pageX - a.left;
    //       y = e.pageY - a.top;
    //       /* Consider any page scrolling: */
    //       x = x - window.pageXOffset;
    //       y = y - window.pageYOffset;
    //       return {x : x, y : y};
    //     }
    //   }
}
