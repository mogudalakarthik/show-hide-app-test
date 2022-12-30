// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  firstButtonClick = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  lastButtonClick = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    const firstNameShow = isFirstName ? 'Joe' : ''
    const lastNameShow = isLastName ? 'Jonas' : ''

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="first-container">
            <button
              className="button"
              type="button"
              onClick={this.firstButtonClick}
            >
              Show/Hide Firstname
            </button>
            <p className="first-name">{firstNameShow}</p>
          </div>
          <div className="last-container">
            <button
              className="button"
              type="button"
              onClick={this.lastButtonClick}
            >
              Show/Hide Lastname
            </button>
            <p className="last-name"> {lastNameShow}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
