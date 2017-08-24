import React from 'react'
import { connect } from 'react-redux'

const Export = ({state}) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Export</h3>
      </div>
      <div className="panel-body">
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Export)