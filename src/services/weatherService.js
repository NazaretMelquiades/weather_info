const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeatherByCity = async (city) => {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error("Tiempo no encontrado");
        }
        const weather = await response.json();

        return await weather

    } catch (error) {
        throw new Error(error.message);
    }
};

fetchWeatherByCity('madrid').then(data => console.log(data));
