import React from 'react'

const QueryContext = React.createContext()

export const QueryProvider = QueryContext.Provider
export const QueryConsumer = QueryContext.Consumer
export default QueryContext