import React, { Component } from 'react';
import Arrow from '../arrow/Arrow';
import './Panel.css';

export default class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            indicator: "indicator-red"
        }
    }

    static getDerivedStateFromProps(props, current_state) {
        if (current_state.pair !== props.pair
            || current_state.buy !== props.buy
            || current_state.sell !== props.sell) {
            return {
                indicator: props.buy > current_state.buy ? "indicator-green" : "indicator-red",
                buy: props.buy
            }
        }
        return null
    }

    render() {
        console.log(this.state.indicator)
        const currency = this.props.pair.split(" ")[0];
        return (
            <div className='panel'>
                <div className='header'>{this.props.pair}</div>
                <div className='arrows-wrapper'>
                    <Arrow title={'Sell ' + currency} amount={this.props.sell}></Arrow>
                    <div className={this.state.indicator}></div>
                    <Arrow title={'Buy ' + currency} amount={this.props.buy}></Arrow>
                </div>
            </div>
        );
    }
}