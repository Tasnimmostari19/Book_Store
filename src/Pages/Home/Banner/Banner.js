import React from 'react';
import { Image } from 'react-bootstrap';
import b1 from '../../../images/banner/alfons-morales-YLSwjSy7stw-unsplash.jpg';
import b2 from '../../../images/banner/istockphoto-1265077901-170667a.jpg';
import b3 from '../../../images/banner/istockphoto-1307515374-170667a.jpg';


const Banner = () => {


    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <Image style={{ width: "150px", height: "600px" }} src={b1} className="d-block w-100" alt="..." />

                </div>
                <div class="carousel-item">
                    <Image style={{ width: "1533px", height: "600px" }} src={b2} class="d-block w-100" alt="..."></Image>

                </div>
                <div class="carousel-item">
                    <Image style={{ width: "1533px", height: "600px" }} src={b3} class="d-block w-100" alt="..."></Image>

                </div>
            </div>
        </div>
    );
};

export default Banner;