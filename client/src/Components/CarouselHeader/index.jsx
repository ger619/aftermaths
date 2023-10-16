import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../assets/1.jpeg"
import image2 from "../../assets/2.jpeg"
import image3 from "../../assets/3.jpg"


const CarouselHeader = () => {
    return (
        <>
            <Carousel className="opacity-80">
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>



);
}

export default CarouselHeader