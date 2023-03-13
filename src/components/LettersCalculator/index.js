// Write your code here.
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0, inputString: ''}

  lettersCount = event => {
    this.setState({
      count: event.target.value.length,
      inputString: event.target.value,
    })
  }

  render() {
    const {count, inputString} = this.state
    return (
      <div>
        <div>
          <h1>Calculate the Letters you Enter</h1>
          <label htmlFor="calci">Enter the phrase</label>
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.lettersCount}
            id="calci"
            value={inputString}
          />
          <p>No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
