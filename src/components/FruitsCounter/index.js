import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mcount: 0, bcount: 0}

  onEatMango = () => {
    this.setState(prevState => ({mcount: prevState.mcount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bcount: prevState.bcount + 1}))
  }

  render() {
    const {mcount} = this.state
    const {bcount} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="count">{mcount}</span> mangoes{' '}
            <span className="count">{bcount}</span> bananas
          </h1>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit-img"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit-img"
            />
          </div>
          <div className="btn-container">
            <button
              type="button"
              onClick={this.onEatMango}
              className="eat-fruit"
            >
              Eat Mango
            </button>
            <button
              type="button"
              onClick={this.onEatBanana}
              className="eat-fruit"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
