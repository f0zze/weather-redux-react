import React from 'react';
import Chart from '../components/chart';
import Map from '../components/google_map';

import { connect } from 'react-redux';

class WeatherList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature(C)</th>
                    <th>Pressure(hPa)</th>
                    <th>Humidity(%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather=> weather.main.temp), (temp) =>temp - 273);
        const humidities = cityData.list.map(weather=> weather.main.humidity);
        const pressure = cityData.list.map(weather=> weather.main.pressure);

        const {lon,lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <Map lat={lat} lon={lon}/>
                </td>
                <td>
                    <Chart data={temps} color="red" units="C"/>
                </td>
                <td>
                    <Chart data={pressure} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="blue" units="%"/>
                </td>
            </tr>
        );
    }

}


function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)