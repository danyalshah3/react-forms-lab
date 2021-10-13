import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value: ""}
    // console.log(value);
  }


  handleChange = (event) => {
    this.setState ({
      value: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.value} onChange={(event) => this.handleChange(event)} id="message" />
        <p>You have got {this.props.maxChars - this.state.value.length} characters remaining.</p>
        
      </div>
    );
  }
}

export default TwitterMessage;
