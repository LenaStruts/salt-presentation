import React, { useState } from "react"
import { Carousel } from 'react-bootstrap'
import Harvard from './HarvardX.jpg'
import codecademy from './codecademy.jpg'

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Harvard}
                    alt="HarvardX"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={codecademy}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default ControlledCarousel