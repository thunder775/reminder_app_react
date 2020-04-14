import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            difference: Math.floor((this.props.date.getTime() - new Date(Date.now())) / 1000),

        };
        this.intervalId = null;
    }


    componentDidMount() {
        this.handleTimer();
    }

    _isMounted = false;

    componentWillUnmount() {
        clearInterval(this.intervalId);
        this._isMounted = false;
    }


    async handleTimer() {
        this._isMounted = true;

        this.intervalId = setInterval(() => {

            if (this.state.difference < 1) {

                alert("Timer timed out");
                this.props.removeTimer();

                return;
            }
            this.setState({
                difference: this.state.difference - 1
            })


        }, 1000);


    }

    // second = this.state.difference % 60;
    // minute = (Math.floor(this.state.difference / 60)) % 60;
    // hour = Math.floor(this.state.difference / 3600);

    render() {
        return (
            <div>
                <p> {Math.floor(this.state.difference / 3600)}:hours {(Math.floor(this.state.difference / 60)) % 60}:minutes {this.state.difference % 60}:seconds</p>
            </div>
        );
    }

}

export default Timer;