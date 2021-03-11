import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const dataList = [
    "https://in.bmscdn.com/showcaseimage/eventimage/music-jam-09-03-2021-10-12-30-104.jpg",
    "https://in.bmscdn.com/showcaseimage/eventimage/sea-wall-09-03-2021-07-43-39-618.jpg",
    "https://in.bmscdn.com/showcaseimage/eventimage/tom--jerry-mx4d-01-03-2021-04-33-14-990.jpg",
    "https://in.bmscdn.com/showcaseimage/eventimage/masala-sandwich-08-02-2021-03-43-56-370.jpg",
    "https://in.bmscdn.com/showcaseimage/eventimage/jab-we-separated-04-03-2021-11-10-59-372.jpg",
    "https://in.bmscdn.com/showcaseimage/eventimage/wrong-number-04-03-2021-11-11-59-741.jpg",
    "https://in.bmscdn.com/showcaseimage/eventimage/tank-cleaner-03-03-2021-06-24-19-722.jpg"
]

export const AddCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div style={{ padding: "5px 0px" }}>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile"]} autoPlay infinite>
                {
                    dataList?.map((banner, index) => (
                        <div style={{ padding: "0px 15px" }} key={index + 1}>
                            <img style={{ width: "102%", cursor: "pointer" }} src={banner} alt="Advertisement banner" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}