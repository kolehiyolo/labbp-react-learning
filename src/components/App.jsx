import React, {useState} from "react";
// import https from "https";

function App() {
  const [inputValue, setInputValue] = useState();
  const [name, setName] = useState();

  var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";
  var weatherApiKey = "appid=092e0f7f9c74b92b1d8ba0cd87abf2b7";
  var weatherParameters = "&units=metric&";

  function handleOnChange(event) {
    setInputValue(event.target.value);
  }

  function handleOnClick(event) {
    var weatherLink = weatherApiUrl + "?q=" + inputValue + weatherParameters + weatherApiKey;

    console.log("The city in question is " + inputValue);
    console.log("The address is " + weatherLink);

    // We are now calling the Weather API to get the data
    fetch(weatherLink)
    .then((res) => res.json())
    .then((data) => {
      console.log("The Weatherman is now consulting the Ancients");
      // console.log("--statusCode", apiRes.statusCode);

      // const temp = weatherData.main.temp;
      const desc = data.weather[0].description;
      // console.log("Temperature = " + temp);
      console.log("Description = " + desc);
      console.log("\n");

      // var icon = "http://openweathermap.org/img/wn/"
      // icon = icon + weatherData.weather[0].icon;
      // icon = icon + "@2x.png";

      // res.write( "<h2>The weather is currently " + desc + "</h2>" ) ; 
      // res.write( "<h2>The temperature is currently " + temp + "</h2>" ) ; 

      setName(desc);
    })
    .catch((err) => {
       console.log(err.message);
    });

    // https.get(weatherLink, function (apiRes) {
    //   console.log("The Weatherman is now consulting the Ancients");
    //   console.log("--statusCode", apiRes.statusCode);
    //   // console.log("--headers:", apiRes.headers);
    //   console.log("\n");

    //   if (apiRes.statusCode === 404) {
    //     console.log(inputValue + " isn't a city, bruh");
    //     console.log("Try again");

    //     // res.send(html);
    //     setName("Wrong input");
    //   } else {
    //     apiRes.on("data", function (data) {
    //       // console.log(data);
    //       const weatherData = JSON.parse(data);
    //       // console.log(weatherData);

    //       // const temp = weatherData.main.temp;
    //       const desc = weatherData.weather[0].description;
    //       // console.log("Temperature = " + temp);
    //       console.log("Description = " + desc);
    //       console.log("\n");

    //       // var icon = "http://openweathermap.org/img/wn/"
    //       // icon = icon + weatherData.weather[0].icon;
    //       // icon = icon + "@2x.png";

    //       // res.write( "<h2>The weather is currently " + desc + "</h2>" ) ; 
    //       // res.write( "<h2>The temperature is currently " + temp + "</h2>" ) ; 

    //       setName(inputValue);
    //     });
    //   }
      // });

    event.preventDefault();
  }

  return (
    <div className="container">
      {/* <h1>Hello {name}</h1> */}
      <h1>The weather is {name}</h1>
      <form onSubmit={handleOnClick}>
        <input 
          onChange={handleOnChange}
          type="text"
          placeholder="What's your name?"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;