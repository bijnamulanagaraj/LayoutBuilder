import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = item => {
    if (!item) {
      this.setState({showContent: false})
    } else {
      this.setState({showContent: true})
    }
  }

  onToggleShowLeftNavbar = item => {
    if (!item) {
      this.setState({showLeftNavbar: false})
    } else {
      this.setState({showLeftNavbar: true})
    }
  }

  onToggleShowRightNavbar = item => {
    if (!item) {
      this.setState({showRightNavbar: false})
    } else {
      this.setState({showRightNavbar: true})
    }
  }

  render() {
    const {showContent, showRightNavbar, showLeftNavbar} = this.state

    return (
      <div>
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
