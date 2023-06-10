import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const contentDisplay = e => {
        onToggleShowContent(e.target.checked)
      }

      const leftNavBarDisplay = e => {
        onToggleShowLeftNavbar(e.target.checked)
      }

      const rightNavBarDisplay = e => {
        onToggleShowRightNavbar(e.target.checked)
      }

      return (
        <div className="main-container">
          <div className="top-container">
            <h1 className="top-heading">Layout</h1>
            <div className="checkbox-element-container">
              <input
                type="checkbox"
                className="checkbox"
                id="content"
                onChange={contentDisplay}
                value="Content"
                defaultChecked
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>
            <div className="checkbox-element-container">
              <input
                type="checkbox"
                className="checkbox"
                id="leftnav"
                onChange={leftNavBarDisplay}
                value="Left NavBar"
                defaultChecked
              />
              <label className="label" htmlFor="leftnav">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-element-container">
              <input
                type="checkbox"
                className="checkbox"
                id="rightnav"
                onChange={rightNavBarDisplay}
                value="Righ tNav"
                defaultChecked
              />
              <label className="label" htmlFor="rightnav">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
