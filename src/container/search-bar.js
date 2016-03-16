import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input className="form-control" value={this.state.term} onChange={this.onInputChange.bind(this)}
                       placeholder="Search Latvia city" type="text"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        SEARCH
                    </button>
                </span>
            </form>
        );
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        });
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);