import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { cardOperations } from '../../app/state/modules/cards'

const Create = ({cards, createTopLevelCard}) => {
  if (!cards)
    cards = []
  
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Create</h3>
      </div>
      <div className="panel-body"> 
        {cards.map((item, i) => {
          return (
            <Card key={i} content={item} />
          )
        })}
        <button type="button" 
          className="btn btn-primary" 
          onClick={createTopLevelCard.bind(this, 'title')}>
            Add Input
        </button>
        
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = {
  createTopLevelCard: cardOperations.createTopLevelCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)