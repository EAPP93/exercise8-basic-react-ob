import React from 'react'
import propTypes from 'prop-types'
import { VisibilityFilters } from '../../redux/slice/visibility.slice'

const FilteredList = ({ VisibilityFilter }) => {
  return (
    <div className='filterOptions'>
      <button className='filterOptions__btn' onClick={() => VisibilityFilter(VisibilityFilters.SHOW_ALL)}>Show All</button>
      <button className='filterOptions__btn' onClick={() => VisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}>Show Active</button>
      <button className='filterOptions__btn' onClick={() => VisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}>Show Completed</button>
    </div>
  )
}

FilteredList.propTypes = {
  VisibilityFilter: propTypes.func.isRequired
}

export default FilteredList
