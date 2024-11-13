import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this);
      
    this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    this.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    this.state = {
      date: new Date().toLocaleTimeString(),
      day: this.days[new Date().getDay()],
      month: this.months[new Date().getMonth()]
    }
    this.interval = setInterval(this.updateDate, 1000);
  }
    
  componentWillUnmount() {
    clearInterval(this.interval);
  }
    
  updateDate() {
    this.setState({
      date: new Date().toLocaleTimeString(),
      day: this.days[new Date().getDay()],
      month: this.months[new Date().getMonth()]
    });
  }
    
  render() {
    return(
      <>
        <div class="text-center pt-12 text-lg font-black text-off-white1">{this.state.date}</div>
        <div class="text-center text-lg font-black text-off-white1">{this.state.day}</div>
      </>
    );
  }
}

export default Clock