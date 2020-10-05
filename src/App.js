import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData, fetchDailyData } from "./api";
import virus from './images/virus.svg'
import styles from './App.module.css'

export default class App extends Component {

    state = {
        data: {},
        country: '',
        daily: {},
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data : fetchedData})
    }

    handleCountryChange = async (country) =>{
        
        if(!country){
            const fetchedData = await fetchData();
            this.setState({ data : fetchedData, daily:{}, country:''})
        }else{
        const daily = await fetchDailyData(country);
        this.setState({daily, country:country})
        }
    }

    render() {
        const {data, country, daily} = this.state;
        return (
            <div className={styles.container} >
                <h1>C<img src={virus} alt="virus" className={styles.virus} />VID-19</h1>
                <Cards  data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} daily={daily}/>
            </div>
        )
    }
}
