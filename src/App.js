import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent,
    }))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({
      showLeftNavbar: !prevState.showLeftNavbar,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({
      showRightNavbar: !prevState.showRightNavbar,
    }))
  }

  render() {
    const {showLeftNavbar, showContent, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showLeftNavbar,
          showContent,
          showRightNavbar,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="app-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
