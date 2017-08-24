import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { cardOperations } from '../../app/state/modules/cards'
import { idsOperations } from '../../app/state/modules/ids'
import cardDataTemplate from '../../app/utils/card-data-template'
import assignNewId from '../../app/utils/create-new-id'


const Create = ({cards, createTopLevelCard, ids, createId}) => {
  if (!cards)
    cards = []
  
  const createNewCard = () => {
    const cardData = Object.assign({}, cardDataTemplate, {id: assignNewId(ids)})
    createTopLevelCard(cardData)
    createId(cardData.id)
  }

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
          onClick={createNewCard}>
            Add Input
        </button>
        
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    ids: state.ids
  }
}

const mapDispatchToProps = {
  createTopLevelCard: cardOperations.createTopLevelCard,
  createId: idsOperations.createId
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)