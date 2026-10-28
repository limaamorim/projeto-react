import banner from "../../assets/banner.png";
import './Banner.css'

function Banner() {
  return (
    <header className="banner">
      <img src={banner} alt="banner" />
    </header>

  );
}

export default Banner;