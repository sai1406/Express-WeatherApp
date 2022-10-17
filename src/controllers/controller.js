const axios = require("axios")
const Weather = require("../model/Weather")
exports.renderHomePage = (req,res)=>{
    res.render("index")
}
exports.getWeather = (req,res)=>{
    const city = req.body.city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5bc072e0b83622d2951840306e51648a&units=metric`
    const weather = new Weather(req.body.city)
    weather.validateUserInput()
    if(weather.errors.length){
        res.render("index",{
            error: weather.errors.toString()
        })
    }
    else{
        axios.get(url).then((response)=>{
            res.render("index",{
                weather:`It is currently ${response.data.main.temp} in ${response.data.name}.`
            })
    
        }).catch((error)=>{
            console.log(error)
        })
    }
    }
 


exports.renderAboutPage = (req,res)=>{
    res.render("about")
}