import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './actions'

import style from './App.styl'

class App extends Component {

  constructor (props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick () {
    const { changeTitle } = this.props.actions
    changeTitle()
  }

  render () {
    console.log('props', this.props)
    const { title } = this.props
    return <div>
      <h1 className={style.hello}>{`Title: ${title}`}</h1>
      <button onClick={this.handleButtonClick}>Change Title</button>
    </div>
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
