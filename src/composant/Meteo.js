import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import direction from "../assets/icones/direction_icon.png";
import water from "../assets/icones/water_icon.png";
import wave from "../assets/icones/wave_icon.png";
import cloud from "../assets/icones/cloud_icon.png";
import Moon, { Cloud, Humidite, Pression, Temperature, Vent } from "./modules/Indicateur";

function Meteo() {
  const [data, setData] = useState([]);
  const meteoAPI = () => {
    fetch(
      "http://api.openweathermap.org/data/2.5/onecall?lat=-21.115141&lon=55.536384&appid=c8bf235a8a58fb21fff7b54152bbd9cd&units=metric&exclude=hourly,alerts,current"
    )
      .then((reponse) => reponse.json())
      .then((value) => setData(value.daily))
      .catch((error) => console.log("error", error));
  };
  // console.log(data);
  // window.addEventListener('load', () =>{
  //   let displayDate = new Date();
  //   let heures = displayDate.getHours();
  //   let minutes = displayDate.getMinutes();
  //   minutes = checkTime(minutes);
  //   // var t = setTimeout(startTime, 500);
  //   function checkTime(i) {
  //       if (i < 10) {i= "0" + i};
  //       return i;
  //   }
  //   console.log(heures);
  // })
  // const onloadDate = () => {
  //   window.onload = function () {
  //     let displayDate = new Date();
  //     let heures = displayDate.getHours();
  //     // let minutes = displayDate.getMinutes();
  //     console.log(heures);
  //   }
  // }
  useEffect(() => {
    meteoAPI();
  }, []);
  return (
    <>
      <header>
        <div className="box-meteo">
          <Swiper
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
          >
            {data.map((res, index) =>
              index === 0 ? (
                <><SwiperSlide>
                  <Temperature
                    indic={res.temp.day}
                    weather={res.weather}
                    key={index} />
                </SwiperSlide><SwiperSlide>
                    <Vent img={direction} indic={res.wind_speed} degre={res.wind_deg} />
                  </SwiperSlide><SwiperSlide>
                    <Humidite img={water} indic={res.humidity} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Pression img={wave} indic={res.pressure}/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Cloud img={cloud} indic={res.clouds}/>
                  </SwiperSlide>
                  </>
              ) : (
                <></>
              )
            )}
          </Swiper>
        </div>
        <div className="box-moon">
          {
            data.map((res,index) => (
              index === 0 ? <Moon moonPhase={res.moon_phase}/> : <></>
            ))
          }
        </div>
      </header>
    </>
  );
}

export default Meteo;
