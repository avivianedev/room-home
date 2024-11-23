import "./RoomStyling.modules.scss"
import { HiArrowLongRight } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";
import data from "./data.json"
import { useState, useEffect } from "react";
import About from "../About";

const RoomStyling = () => {

    let [count, SetCount] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const incrementCount = () => {
        if (count < 3) {
            SetCount(count + 1)
        }
        return
    }
    const decrementtCount = () => {
        if (count > 1) {
            SetCount(count - 1)
        }
        return
    }

    const idKey = `id${count}`;
    return (
        <section className="roomstyling-wrapper">
            <div className="roomstyling-image">
                {isMobile ? <img className="image-section responsive" src={data[0][idKey].responsive} alt="images of decorative furniture" />

                    : <img className="image-section responsive" src={data[0][idKey].image} alt="images of decorative furniture" />}
            </div>

            <div className="roomstyling-description">
                <div className="box-content">
                    <h2 className="title">{data[0][idKey].title}</h2>
                    <div className="description">
                        <p>{data[0][idKey].description}</p>
                    </div>

                    <div className="btn-shop">
                        Shop now
                        <HiArrowLongRight className="icon-long-arrow" />
                    </div>
                </div>

                <div className="box-navigation">
                    <div className="navigation-content left">
                        <SlArrowRight onClick={decrementtCount} className="arrow-icon" color="white" />
                    </div>
                    <div className="navigation-content">
                        <SlArrowRight onClick={incrementCount} color="white" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default RoomStyling;