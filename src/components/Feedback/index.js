// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {initial: true}

  onclicksad = () => {
    this.setState({initial: false})
  }

  onclicknone = () => {
    this.setState({initial: false})
  }

  onclickhappy = () => {
    this.setState({initial: false})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    console.log(emojis)
    console.log(loveEmojiUrl)
    const {initial} = this.state

    return (
      <>
        <div className="main_container">
          <div className="card_container">
            {initial ? (
              <>
                <h1 className="main_heading">
                  How satisfied are you with our customer support performance
                </h1>
                <div className="feedback_container">
                  <li className="feedback">
                    <button
                      className="button"
                      type="button"
                      onClick={this.onclicksad}
                    >
                      <img
                        src={emojis[0].imageUrl}
                        alt={emojis[0].name}
                        key={emojis[0].id}
                        className="image_feedback"
                      />
                    </button>
                    <p className="description">{emojis[0].name}</p>
                  </li>
                  <li className="feedback">
                    <button
                      className="button"
                      type="button"
                      onClick={this.onclicknone}
                    >
                      <img
                        src={emojis[1].imageUrl}
                        alt={emojis[1].name}
                        key={emojis[1].id}
                        className="image_feedback"
                      />
                    </button>
                    <p className="description">{emojis[1].name}</p>
                  </li>
                  <li className="feedback">
                    <button
                      className="button"
                      type="button"
                      onClick={this.onclickhappy}
                    >
                      <img
                        src={emojis[2].imageUrl}
                        alt={emojis[2].name}
                        key={emojis[2].id}
                        className="image_feedback"
                      />
                    </button>
                    <p className="description">{emojis[2].name}</p>
                  </li>
                </div>
              </>
            ) : (
              <>
                <img
                  src={loveEmojiUrl}
                  alt="love emoji"
                  className="image_feedback"
                />
                <h1 className="main_heading">Thank You!</h1>
                <p className="description">
                  We will use your feedback to improve our customer support
                  performance
                </p>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Feedback
