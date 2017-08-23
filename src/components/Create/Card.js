import React, { Component } from 'react'
import { connect } from 'react-redux'

import './card.css'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBtn: 'text'
    }
    this.changeButton = this.changeButton.bind(this)
  }

  changeButton(button) {
    this.setState({selectedBtn: button})
  }

  render() {
    const { selectedBtn } = this.state

    const textClass = (selectedBtn === 'text') ? 'btn-primary' : 'btn-default'
    const numberClass = (selectedBtn === 'number') ? 'btn-primary' : 'btn-default'
    const yesnoClass = (selectedBtn === 'yesno') ? 'btn-primary' : 'btn-default'

    return (
      <div className='row'>
        <div className='col-xs-6'>
          <div className='panel panel-default'>
            <div className='panel-body'>
              <div className='input-group'>
                <span className='input-group-addon' id='basic-addon1'>Question</span>
                <input type='text' className='form-control' placeholder='e.g. What make is your car?' aria-describedby='card-question' />
              </div>
              <div className='btn-group btn-group-justified' role='group' aria-label='...'>
                <div className='btn-group' role='group'>
                  <button type='button' className={'btn ' + textClass} onClick={this.changeButton.bind(this, 'text')}>Text</button>
                </div>
                <div className='btn-group' role='group'>
                  <button type='button' className={'btn ' + numberClass} onClick={this.changeButton.bind(this, 'number')}>Number</button>
                </div>
                <div className='btn-group' role='group'>
                  <button type='button' className={'btn ' + yesnoClass} onClick={this.changeButton.bind(this, 'yesno')}>Yes/No</button>
                </div>
              </div>
              <div className='actions pull-right'>
                <button type='button' className='btn btn-default subInput'>Add Sub-Input</button>
                <button type='button' className='btn btn-danger'>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Card)