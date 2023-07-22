import React from "react";
import Doc3 from "../images/3doc.png";

const Video = () => {
  return (
    <div>
      <div className="video_consult">
        <div className="video_all">
          <div className="first_part_of_video">
            <h1>
              Skip the travel! <br />
              Take Online Doctor Consultation
            </h1>
            <span>Private consultation + Audio call · Starts at just ₹199</span>
            <div className="enthino_vendi_oru_div">
              <img className="doc3_images" src={Doc3} alt="" />
              <span>+112 Doctors are online</span>
            </div>
            <button className="video_btn_consult">Consult Now</button>
          </div>
          <img
            className="irikkunna_thalla"
            src="https://www.practo.com/consult/static/images/homepage-hero-image-web-v1.png"
            alt=""
          />
        </div>
        <div className="video_h2_muthal">
          <div className="video_h2_muthal_here_we_go">
            <div className="position_set_aakan_ullath">
              <h2>25+ Specialities</h2>
              <span>Consult with top doctors across specialities</span>
            </div>
            <div className="video_part_all_cards">
              <div class="card">
                <img
                  src="https://www.practo.com/consult/static/images/top-speciality-gynaecologist.svg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Gynaeocology</h5>
                  <span className="price">₹599</span>
                  <span className="price1">Consult</span>
                </div>
              </div>

              {/* ============================================================================================================================= */}

              <div class="card">
                <img
                  src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Gynaeocology</h5>
                  <span className="price">₹599</span>
                  <span className="price1">Consult</span>
                </div>
              </div>

              {/* ======================================================================================================================= */}
              <div class="card">
                <img
                  src="https://www.practo.com/consult/static/images/top-speciality-gp.svg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Gynaeocology</h5>
                  <span className="price">₹599</span>
                  <span className="price1">Consult</span>
                </div>
              </div>

              {/* ======================================================================================================================= */}
              <div class="card">
                <img
                  src="https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Gynaeocology</h5>
                  <span className="price">₹599</span>
                  <span className="price1">Consult</span>
                </div>
              </div>

              {/* ======================================================================================================================= */}
              <div class="card">
                <img
                  src="https://www.practo.com/consult/static/images/top-speciality-psychiatric.svg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Gynaeocology</h5>
                  <span className="price">₹599</span>
                  <span className="price1">Consult</span>
                </div>
              </div>

              {/* ======================================================================================================================= */}
              <div class="card">
                <img
                  src="https://www.practo.com/consult/static/images/top-speciality-stomach.svg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Gynaeocology</h5>
                  <span className="price">₹599</span>
                  <span className="price1">Consult</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Video;
