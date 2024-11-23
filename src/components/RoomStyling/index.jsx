import "./RoomStyling.modules.scss"
import { HiArrowLongRight } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";
import data from "./data.json"
import { useState, useEffect } from "react";

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
        console.log("Button clicked");
        SetCount((prevCount) => (prevCount < 3 ? prevCount + 1 : prevCount));
        //SetCount(anterior => anterior + 1)
    }
    const decrementtCount = () => {
        console.log("Button clicked");
        SetCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
        //SetCount(anterior => anterior - 1)
    }

    console.log("Valor do count: ", count)
    const idKey = `id${count}`;
    return (
        <section className="roomstyling-wrapper">

            <div className="roomstyling-image">

                {isMobile ? <img key={idKey} className={`image-section ${count === 1 ? "active" : ""}`} src={data[0][idKey].responsive} alt="images of decorative furniture" />

                    : <img className={`image-section ${count === 1 ? "active" : ""}`} src={data[0][idKey].image} alt="images of decorative furniture" />}
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
                    <button className="navigation-content left" onClick={decrementtCount} >
                        <div >
                            <SlArrowRight className="arrow-icon" color="white" />
                        </div>
                    </button>
                    <button className="navigation-content" onClick={incrementCount}>
                        <div >
                            <SlArrowRight color="white" />
                        </div>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default RoomStyling;