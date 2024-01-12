// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showContent, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-nav-bar-container">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul className="items-list">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="heading">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiumsmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-nav-bar-continer">
              <h1 className="heading">Right Navbar</h1>
              <div className="card">
                <p className="text">Ad 1</p>
              </div>
              <div className="card">
                <p className="text">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
