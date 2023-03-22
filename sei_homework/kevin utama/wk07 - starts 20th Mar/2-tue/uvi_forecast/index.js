const axios = require('axios')

axios.get('https://api.ipify.org?format=json')
.then(res => res.data.ip)
.then(res => axios.get(`https://ipapi.co/${res}/json/`))
.then(res => {
    console.log(res.data.city + '/' + res.data.country_name)
    return res.data.city + ', ' + res.data.country_name
})
.then(res => axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${res}&key=${process.env.OPENCAGEAPIKEY}&language=en`))
.then(res => {
    let lat = res.data.results[0].geometry.lat
    let lon = res.data.results[0].geometry.lng
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,daily,alerts&appid=${process.env.OPENWEATHERAPIKEY}`)
})
// .then(res => console.log('Current Temperature: ' + res.data.main.temp + ' degree Celcius'))
.then(res => {
    let hourly = res.data.hourly
    hourly.slice(0, 5).forEach(hour => {
        const timestamp = hour.dt
        const date = new Date(timestamp * 1000)
        const dateValue = date.getHours()
        console.log('time:' + dateValue + ', uvi:' +  hour.uvi)
    })
})