//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

function DailyWeater({ day, icon = "sunny", size = 50 }) {
  // JSX
  return (
    <li className="daily-weather">
      <h2>{day}</h2>
      <img
        src={`../public/icons/${icon}.svg`}
        alt={icon}
        width={size}
        height={size}
      />
    </li>
  );
}

function WeeklyWeatherList() {
  return (
    <>
      <h1>Weekly Weather</h1>
      <ul className="weekly-weather-list">
        <DailyWeater day="MON" />
        <DailyWeater day="TUE" icon="rainy" />
        <DailyWeater day="WED" icon="partly-cloudy" />
        <DailyWeater day="THU" icon="rainy" />
        <DailyWeater day="FRI" icon="lightning" />
        <DailyWeater day="SAT" icon="fine-dust" />
        <DailyWeater day="SUN" />
      </ul>
    </>
  );
}

const container = document.getElementById("root") as HTMLDivElement;

if (container) {
  createRoot(container).render(<WeeklyWeatherList />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
