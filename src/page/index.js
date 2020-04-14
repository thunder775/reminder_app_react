import React from "react";
import Timer from "../timer";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: []
        }
    }

    AddReminder() {
        let timer = document.getElementById("timer").value.toString();
        if (timer.length === 0) {
            return;
        }
        let date = new Date(timer);
        console.log(this.state);
        let temp = this.state.dates.slice();
        temp.push(date);
        this.setState({
            dates: temp,

        });
        this.getTimers();
        // console.log(this.state.timeDifferences)
    }

    getTimers() {

        let timers = [];
        for (let i = 0; i < this.state.dates.length; i++) {
            timers.push(
                <Timer date={this.state.dates[i]} removeTimer={() => {
                    console.log("before------------" + this.state.dates);
                    this.state.dates.splice(i, 1);
                    this.setState({
                        dates: this.state.dates
                    });
                    console.log("after-----------" + this.state.dates);
                }}/>
            )
        }
        return timers;
    }

    render() {
        return (
            <div>
                <input type="datetime-local" id={"timer"}/>
                <button onClick={() => this.AddReminder()}>Add Reminder</button>
                {this.getTimers()}
            </div>
        );
    }
}

export default Page;