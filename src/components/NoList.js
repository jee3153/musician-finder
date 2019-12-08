import React, { useContext } from 'react'
import QueryContext from '../ContextAPI/QueryContext'

const NoList = () => {
  const queryHistory = useContext(QueryContext)

  return (
    <div className="NoList">
      <p>
        No result found with the keyword "
        <span className="NoList__query">{queryHistory}</span>
        "</p>
    </div>
  )
}

export default NoList