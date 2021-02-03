import Slider from 'react-slick'

export default function CarouselWrapper(props) {
    var settings = {
      dots: true
    }

    return (
        <div className="container">
            <Slider {...settings}>
                <div>
                    <img src="https://i.redd.it/lgfpr0ewxzkx.jpg" width="200px" alt=""/> 
                </div>
                <div>
                    <img src="https://i.redd.it/lgfpr0ewxzkx.jpg" width="200px" alt=""/> 
                </div>
                <div>
                    <img src="https://i.redd.it/lgfpr0ewxzkx.jpg" width="200px" alt=""/> 
                </div>
                <div>
                    <img src="https://i.redd.it/lgfpr0ewxzkx.jpg" width="200px" alt=""/> 
                </div>
            </Slider>
        </div>
    )
}