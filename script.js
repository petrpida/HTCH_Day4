const container = document.querySelector(".container")

fetch ("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Prague?unitGroup=metric&key=PRGTGEACEYVUGRHRV2XQX6NYE&contentType=json")
.then((response) => response.json())
.then((data) => {
    console.log(data)

    const city = document.createElement("h2")
    city.textContent = data.address
    container.appendChild(city)

    const area = document.createElement("p")
    area.textContent = data.resolvedAddress
    container.appendChild(area)

    const description = document.createElement("h5")
    description.textContent = data.description
    container.appendChild(description)

    const temp = document.createElement("p")
    temp.textContent = `Temperature: ${data.currentConditions.temp} °C`
    container.appendChild(temp)

    const feelsLike = document.createElement("p")
    feelsLike.textContent = `Feels like: ${data.currentConditions.feelslike} °C`
    container.appendChild(feelsLike)

    const pressure = document.createElement("p")
    pressure.textContent = `Pressure: ${data.currentConditions.pressure} hPa`
    container.appendChild(pressure)

    const humidity = document.createElement("p")
    humidity.textContent = `Humidity: ${data.currentConditions.humidity} %`
    container.appendChild(humidity)

    const uvindex = document.createElement("p")
    uvindex.textContent = `UV index: ${data.currentConditions.uvindex}`
    container.appendChild(uvindex)



    const btn = document.createElement("button")
    btn.textContent = "REFRESH"
    container.appendChild(btn)

    const update = document.createElement("p")
    update.textContent = `Updated 3 minute(s) ago`
    update.classList.add("update")
    container.appendChild(update)
})





