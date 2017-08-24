import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cardOperations } from '../../app/state/modules/cards'
import { idsOperations } from '../../app/state/modules/ids'

import './card.css'

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.addSubInput = this.addSubInput.bind(this);
  }

  addSubInput(id) {
    const { addSubInput } = this.props
    addSubInput(id)
  }

  handleTextChange(event) {
    const { updateQuestion, content } = this.props
    updateQuestion({id: content.id, question: event.target.value})
    this.setState({value: event.target.value})
  }

  deleteCardAndId(id) {
    const { deleteCard, deleteId } = this.props
    deleteCard(id)
    deleteId(id)
  }

  render() {
    const { changeCardType, content } = this.props
    const { question, type, id } = content

    const textClass = (type === 'text') ? 'btn-primary' : 'btn-default'
    const numberClass = (type === 'number') ? 'btn-primary' : 'btn-default'
    const yesnoClass = (type === 'yesno') ? 'btn-primary' : 'btn-default'

    return (
      <div className='row'>
        <div className='col-xs-6'>
          <div className='panel panel-default'>
            <div className='panel-body'>
              <div className='input-group'>
                <span className='input-group-addon' id='basic-addon1'>Question</span>
                <input type='text' 
                  className='form-control' 
                  placeholder='e.g. What make is your car?' 
                  aria-describedby='card-question' 
                  value={(question ==='') ? this.state.value: question}
                  onChange={this.handleTextChange}
                />
              </div>
              <div className='btn-group btn-group-justified' role='group' aria-label='...'>
                <div className='btn-group' role='group'>
                  <button type='button' className={'btn ' + textClass} onClick={changeCardType.bind(this, {id: id, type: 'text'})}>Text</button>
                </div>
                <div className='btn-group' role='group'>
                  <button type='button' className={'btn ' + numberClass} onClick={changeCardType.bind(this, {id: id, type: 'number'})}>Number</button>
                </div>
                <div className='btn-group' role='group'>
                  <button type='button' className={'btn ' + yesnoClass} onClick={changeCardType.bind(this, {id: id, type: 'yesno'})}>Yes/No</button>
                </div>
              </div>
              <div className='actions pull-right'>
                <button type='button' className='btn btn-default subInput' onClick={this.addSubInput.bind(this, id)}>Add Sub-Input</button>
                <button type='button' className='btn btn-danger' onClick={this.deleteCardAndId.bind(this, id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = {
  changeCardType: cardOperations.changeCardType,
  deleteCard: cardOperations.deleteCard,
  updateQuestion: cardOperations.updateQuestion,
  addSubInput: cardOperations.addSubInput,
  deleteId: idsOperations.deleteId
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)