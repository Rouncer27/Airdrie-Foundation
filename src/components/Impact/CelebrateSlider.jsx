import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./celebrateSlider.scss";

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  fade: false,
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

const CelebrateSlider = ({ data }) => {
  return (
    <div className="impact-celslide">
      <div className="impact-celslide-wrapper">
        <div className="impact-celslide-intro">
          <div>
            <h2>{data.title}</h2>
            <h3>{data.subTitle}</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
      <Slider className="impact-celslide-slider" {...settings}>
        {data.slides.map((slide, index) => {
          return (
            <div className="impact-celslide-slider-slide" key={index}>
              <img
                src={slide.slideImage.sourceUrl}
                alt={slide.slideImage.altText}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CelebrateSlider;
