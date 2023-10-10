function WeatherIcon() {
    const weather = "stormy";

    const printIcon = (name) => {
        const weatherMap = {
            sunny: "☀️",
            cloudy: "☁️",
            rainy: "🌧",
            stormy: "⛈",
        };
        return weatherMap[name];
    };

    // return (
    //     <p>
    //         {weather === "sunny" ? "☀️" : "☁️"}
    //     </p>
    // );
    return <p>{printIcon(weather)}</p>
}

export default WeatherIcon;