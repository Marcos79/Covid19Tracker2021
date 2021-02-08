import React, { useState, useEffect } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";
import image from "./images/image.png";


const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchedData = async () => {
      const data = await fetchData();
      setData(data);
    };

    fetchedData();
  }, []);

  const handleCountryChange = async (country) => {
    const handleCountry = await fetchData(country);
    setCountry(country, handleCountry);
    console.log(data)
    
  };
  

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
   
};

export default App;

// import React from 'react';

// import { Cards, CountryPicker, Chart } from './components';
// import { fetchData } from './api/';
// import styles from './App.module.css';

// import image from './images/image.png';

// class App extends React.Component {
//   state = {
//     data: {},
//     country: '',
//   }

//   async componentDidMount() {
//     const data = await fetchData();

//     this.setState({ data });
//   }

//   handleCountryChange = async (country) => {
//     const data = await fetchData(country);

//     this.setState({ data, country: country });
//   }

//   render() {
//     const { data, country } = this.state;

//     return (
//       <div className={styles.container}>
//         <img className={styles.image} src={image} alt="COVID-19" />
//         <Cards data={data} />
//         <CountryPicker handleCountryChange={this.handleCountryChange} />
//         <Chart data={data} country={country} /> 
//       </div>
//     );
//   }
// }

// export default App;