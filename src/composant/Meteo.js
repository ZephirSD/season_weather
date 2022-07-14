import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import direction from "../assets/icones/direction_icon.png";
import water from "../assets/icones/water_icon.png";
import  { Humidite, Temperature, Vent } from "./modules/Indicateur";

function Meteo() {
  const [data, setData] = useState({});
  const meteoAPI = async () => {
    const api = await fetch(
      "http://api.openweathermap.org/data/2.5/onecall?lat=-21.115141&lon=55.536384&appid=c8bf235a8a58fb21fff7b54152bbd9cd&units=metric&exclude=hourly,alerts,current"
    );
    const response = await api.json();
    setData(response.daily[0]);
  };
//   console.log(data);
  useEffect(() => {
      meteoAPI();
    //   console.log(data);
  },[])
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
            <SwiperSlide>
              <Temperature indic={data.temp.day} weather={data.weather.main}/>
            </SwiperSlide>
            <SwiperSlide>
              <Vent img={direction} indic={data.wind_speed} degre={data.wind_deg}/>
            </SwiperSlide>
            <SwiperSlide>
              <Humidite img={water} indic={data.humidity}/>
            </SwiperSlide>
          </Swiper>
        </div>
      </header>
    </>
  );
}

export default Meteo;
