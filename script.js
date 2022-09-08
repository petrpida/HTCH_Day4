/*const updateInfo = () => {
    let weatherData
    const getWeatherInfo = () => {
        fetch ("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Prague?unitGroup=metric&key=PRGTGEACEYVUGRHRV2XQX6NYE&contentType=json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                weatherData = data

                const city = document.getElementById("city")
                city.textContent = data.address

                const area = document.getElementById("area")
                area.textContent = data.resolvedAddress

                const description = document.getElementById("description")
                description.textContent = data.description

                const temp = document.getElementById("temp")
                temp.textContent = `Temperature: ${data.currentConditions.temp} °C`

                const feelsLike = document.getElementById("feelslike")
                feelsLike.textContent = `Feels like: ${data.currentConditions.feelslike} °C`

                const pressure = document.getElementById("pressure")
                pressure.textContent = `Pressure: ${data.currentConditions.pressure} hPa`

                const humidity = document.getElementById("humidity")
                humidity.textContent = `Humidity: ${data.currentConditions.humidity} %`

                const uvindex = document.getElementById("uvindex")
                uvindex.textContent = `UV index: ${data.currentConditions.uvindex}`

                return data
            })
    }
        getWeatherInfo()

    let counter = 0
    const update = document.getElementById("update")
    update.textContent = `Updated ${counter} minute(s) ago`
    const minutesCount = setInterval(() => {
        // counter++
        update.textContent = `Updated ${counter} minute(s) ago`
        console.log(counter)
    }, 10000)
    if (counter >= 10) {
        clearInterval(minutesCount)
    }

    const btn = document.getElementById("btn")
    btn.addEventListener("click", () => {
        clearInterval(minutesCount)
        updateInfo()
        counter = 0
        update.textContent = `Updated ${counter} minute(s) ago`
    })
}

updateInfo()
setInterval(updateInfo, 10000)*/

setInterval(function refresh() {
    let dataGlobal;

    const getData = async () => {
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Praha?unitGroup=metric&key=9ST3RT8R5VX5M64FVANSPHQC2&contentType=json");
        const data = await response.json();
        dataGlobal = data;
        return data;
    };

    const updateInfo = async () => {
        await getData();
        console.log(dataGlobal);

        const city = document.getElementById("city")
        city.textContent = dataGlobal.address

        const area = document.getElementById("area")
        area.textContent = dataGlobal.resolvedAddress

        const description = document.getElementById("description")
        description.textContent = dataGlobal.description

        const temp = document.getElementById("temp")
        temp.textContent = `Temperature: ${dataGlobal.currentConditions.temp} °C`

        const feelsLike = document.getElementById("feelslike")
        feelsLike.textContent = `Feels like: ${dataGlobal.currentConditions.feelslike} °C`

        const pressure = document.getElementById("pressure")
        pressure.textContent = `Pressure: ${dataGlobal.currentConditions.pressure} hPa`

        const humidity = document.getElementById("humidity")
        humidity.textContent = `Humidity: ${dataGlobal.currentConditions.humidity} %`

        const uvindex = document.getElementById("uvindex")
        uvindex.textContent = `UV index: ${dataGlobal.currentConditions.uvindex}`

        let counter = 0
        const update = document.getElementById("update")
        update.textContent = `Updated 0 minute(s) ago`

        const minutesCount = setInterval(() => {
            counter++
            update.textContent = `Updated ${counter} minute(s) ago`
            if (counter === 4) {
                clearInterval(minutesCount)
            }
        }, 60000)



        const btn = document.getElementById("btn")
        btn.addEventListener("click", () => {
            location.reload()
        })

    };
    updateInfo()

    return refresh;
}(), 300000);










