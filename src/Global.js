import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from './components';

import styles from './Global.module.css';

import { fetchData } from './api';


class Global extends Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        console.log('global ',fetchedData);
        this.setState({data: fetchedData, country: country});
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <Cards className={styles.image} data={data} alt=""/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default Global;