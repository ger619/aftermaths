import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export  default const Carousel = () => {
    return (
        <Carousel>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.png" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));

