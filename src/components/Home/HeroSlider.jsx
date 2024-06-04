import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./heroSlider.scss";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 10000,
  centerMode: false,
  arrows: false,
  dots: true,
  pauseOnHover: true,
};

const HeroSlider = ({ data }) => {
  console.log("DATA: ", data);
  return (
    <div className="home-hero-slider">
      <Slider className="home-hero-slider-wrap" {...settings}>
        {data.slides.map((slide, index) => {
          return (
            <div className="home-hero-slider-slide" key={index}>
              <div className="home-hero-slider-slide-image">
                <img src={slide.image.sourceUrl} alt={slide.image.altText} />
              </div>

              <div className="home-hero-slider-slide-content">
                <div className="home-hero-slider-slide-content-inner">
                  <div
                    className="home-hero-slider-slide-content-inner-para"
                    dangerouslySetInnerHTML={{ __html: slide.content }}
                  />
                  <div>
                    <a href={slide.link.uri}>{slide.linkText}</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
