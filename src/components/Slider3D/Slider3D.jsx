import "./Slider3D.css";
import album1 from "../../images/slider_3d/svistki.png";
import album2 from "../../images/slider_3d/sreetecho.jpeg";
import album3 from "../../images/slider_3d/cristofer.jpg";
import album4 from "../../images/slider_3d/sladkih.png";
import album5 from "../../images/slider_3d/freerio.png";
import album6 from "../../images/slider_3d/2004.jpg";
import album7 from "../../images/slider_3d/cruiser-aurora.jpg";
import album8 from "../../images/slider_3d/graduation.jpg";
import album9 from "../../images/slider_3d/odno.jpg";
import album10 from "../../images/slider_3d/pox-wave.jpg";

const Slider3D = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img loading="lazy" src={album1} alt="" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img loading="lazy" src={album2} alt="" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img loading="lazy" src={album3} alt="" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img loading="lazy" src={album4} alt="" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img loading="lazy" src={album5} alt="" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img loading="lazy" src={album6} alt="" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img loading="lazy" src={album7} alt="" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img loading="lazy" src={album8} alt="" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img loading="lazy" src={album9} alt="" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img loading="lazy" src={album10} alt="" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="CSS ONLY">CSS ONLY</h1>
        <div className="author">
          <h2>LUN DEV</h2>
          <p>
            <b>Web Design</b>
          </p>
          <p>Subscribe to the channel to watch many interesting videos</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default Slider3D;
