import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import direction from "../assets/icones/direction_icon.png";
import water from "../assets/icones/water_icon.png";
import wave from "../assets/icones/wave_icon.png";
import cloud from "../assets/icones/cloud_icon.png";
import {
  Cloud,
  Humidite,
  Pression,
  Temperature,
  Vent,
  Moon,
} from "./modules/Indicateur";

function Meteo({ heuresDay }) {
  const [data, setData] = useState([]);
  const meteoAPI = () => {
    fetch(
      "http://api.openweathermap.org/data/2.5/onecall?lat=-21.115141&lon=55.536384&appid=c8bf235a8a58fb21fff7b54152bbd9cd&units=metric&exclude=hourly,alerts,current"
    )
      .then((reponse) => reponse.json())
      .then((value) => setData(value.daily))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    meteoAPI();
  }, []);
  return (
    <>
      <header>
        <div
          className="box-meteo"
          style={
            heuresDay >= 18
              ? { backgroundColor: "var(--background-indic-night)" }
              : heuresDay >= 7
              ? { backgroundColor: "var(--background-indic)" }
              : { backgroundColor: "var(--background-indic)" }
          }
        >
          <Swiper
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
          >
            {data.map((res, index) =>
              index === 0 ? (
                <>
                  <SwiperSlide>
                    <Temperature
                      indic={res.temp.day}
                      weather={res.weather}
                      key={index}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Vent
                      img={direction}
                      indic={res.wind_speed}
                      degre={res.wind_deg}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Humidite img={water} indic={res.humidity} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Pression img={wave} indic={res.pressure} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Cloud img={cloud} indic={res.clouds} />
                  </SwiperSlide>
                </>
              ) : (
                <></>
              )
            )}
          </Swiper>
        </div>
        {heuresDay >= 18 ? (
          <div
            className="box-moon"
            style={
              heuresDay >= 18
                ? {
                    backgroundColor: "var(--background-indic-night)",
                    color: "white",
                  }
                : heuresDay >= 7
                ? { backgroundColor: "var(--background-indic)", color: "black" }
                : { backgroundColor: "var(--background-indic)", color: "black" }
            }
          >
            {data.map((res, index) =>
              index === 0 ? <Moon moonPhase={res.moon_phase} /> : <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </header>
    </>
  );
}

export default Meteo;
