import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classNames  from 'classnames';
import "./index.css";
//https://react-bootstrap.github.io/components/carousel/
export default function CustomCarousel(props){
    const {customClassName, items} = props;
    const imgClass = classNames("d-block w-100", customClassName);
    return <Carousel {...props} >
        {items.map(item => {
            return <Carousel.Item>
                <img className={imgClass}
                     src={item.src}
                     alt={item.alt}
                />
                <Carousel.Caption>
                    {item.caption}
                </Carousel.Caption>

            </Carousel.Item>
        })}
    </Carousel>
}