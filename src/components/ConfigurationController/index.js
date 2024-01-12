// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = (event) => { 
      onToggleShowContent(event.target.value)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="configuration-context-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="inputs-list">
            <li className="input-item">
              <input
                type="checkbox"
                id="checkbox1"
                className="checkbox"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="checkbox1" className="label">
                Content
              </label>
            </li>

            <li className="input-item">
              <input
                type="checkbox"
                id="checkbox2"
                className="checkbox"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="checkbox2" className="label">
                Left Navbar
              </label>
            </li>

            <li className="input-item">
              <input
                type="checkbox"
                id="checkbox3"
                className="checkbox"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="checkbox3" className="label">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
