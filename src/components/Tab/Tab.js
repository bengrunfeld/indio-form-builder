import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { tabOperations } from '../../app/state/modules/tabs'

const Tab = ({title, active=false, url, selectedTab, changeTab}) => {
  const isSelected = (selectedTab === title) ? 'active' : ''

  return (
    <li role='presentation' className={isSelected} onClick={changeTab.bind(this, url)}>
      <Link to={url}>{title}</Link>
    </li>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedTab: state.selectedTab
  }
}

const mapDispatchToProps = {
  changeTab: tabOperations.navigateToTab
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab)