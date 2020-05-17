import React from 'react';


import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import covid19 from './images/covid19.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',

    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });

    } 

    render() {
        const { data, country } = this.state; 
        return (
            <div className={styles.container}>
                <img className = {styles.image} src={covid19} alt="COVID-19"/>
                <Cards data={this.state.data}></Cards>
                <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                <Chart data={data} country={country}></Chart>
            </div>
        )
    }
}
export default App;