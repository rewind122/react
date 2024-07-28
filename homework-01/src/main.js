//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
function DailyWeater(_a) {
    var day = _a.day, _b = _a.icon, icon = _b === void 0 ? "sunny" : _b, _c = _a.size, size = _c === void 0 ? 50 : _c;
    // JSX
    return (React.createElement("li", { className: "daily-weather" },
        React.createElement("h2", null, day),
        React.createElement("img", { src: "../public/icons/".concat(icon, ".svg"), alt: icon, width: size, height: size })));
}
function WeeklyWeatherList() {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Weekly Weather"),
        React.createElement("ul", { className: "weekly-weather-list" },
            React.createElement(DailyWeater, { day: "MON" }),
            React.createElement(DailyWeater, { day: "TUE", icon: "rainy" }),
            React.createElement(DailyWeater, { day: "WED", icon: "partly-cloudy" }),
            React.createElement(DailyWeater, { day: "THU", icon: "rainy" }),
            React.createElement(DailyWeater, { day: "FRI", icon: "lightning" }),
            React.createElement(DailyWeater, { day: "SAT", icon: "fine-dust" }),
            React.createElement(DailyWeater, { day: "SUN" }))));
}
var container = document.getElementById("root");
if (container) {
    createRoot(container).render(React.createElement(WeeklyWeatherList, null));
}
else {
    console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
