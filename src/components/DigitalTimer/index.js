import {Component} from 'react'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: 0, isPauseImage: false, isPauseText: false}

  onDecrease = () => {
    const {minutes} = this.state
    this.setState(prevState => ({minutes: prevState.minutes - 1}))
  }

  onIncrease = () => {
    const {minutes} = this.state
    this.setState(prevState => ({minutes: prevState.minutes + 1}))
  }

  startTime = () => {
    const {isPauseImage, isPauseText, minutes, seconds} = this.state
    this.timerID = setInterval(this.tick, 1000)
  }

  endTime = () => {
    this.componentWillUnmount = () => {
      clearInterval(this.timerID)
    }
  }

  tick = () => {
    const {seconds, minutes} = this.state
    const newSeconds = 60 - seconds
    if (newSeconds <= 0) {
      this.setState(
        prevState => ({minutes: prevState.minutes - 1}),
        (seconds: 0),
      )
    } else {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }
  }

  render() {
    const {minutes, isPauseImage, isPauseText} = this.state
    const {seconds} = this.state
    const changeImage = isPauseImage
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const changeText = isPauseText ? 'Pause' : 'Start'
    const changeTimeText = isPauseText ? 'Running' : 'Paused'
    const icon = isPauseImage ? 'pause icon' : 'play icon'
    const updatedSeconds = 60 - seconds
    return (
      <div>
        <h1>Digital Timer</h1>

        <h1>
          {minutes}:{updatedSeconds}
        </h1>
        <p>{changeTimeText}</p>
        <div>
          <button onClick={this.startTime} type="button">
            <img src={changeImage} alt={icon} />
            {changeText}
          </button>
        </div>
        <div>
          <button onClick={this.endTime} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt="reset icon"
            />
            Reset
          </button>
        </div>
        <p>Set Timer Limit</p>
        <div>
          <button onClick={this.onDecrease} type="button">
            -
          </button>
          <p>{minutes}</p>
          <button onClick={this.onIncrease} type="button">
            +
          </button>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
