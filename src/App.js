import React, { useState } from 'react';
import { DataProvider } from './ContextAPI/DataContext'
import { QueryProvider } from './ContextAPI/QueryContext'

import SC from 'soundcloud'

import TrackList from './components/TrackList'
import './scss/app.scss';
import NoList from './components/NoList';


const App = () => {
  const [query, setQuery] = useState('')
  const [queryHistory, setQueryHistory] = useState('')
  const [data, setData] = useState([])
  const [fetched, setFetched] = useState(false)



  const searchTrack = () => {
    SC.initialize({
      client_id: 'PGBAyVqBYXvDBjeaz3kSsHAMnr1fndq1'
    });

    SC.get('/tracks', {
      q: query, license: 'cc-by-sa'
    }).then((tracks) => {
      setData(tracks)
    });
    return data
  }

  const submitHandler = e => {
    searchTrack()
    setQuery('')
    setFetched(true)
    e.preventDefault()
  }

  const changeHandler = e => {
    setQuery(e.target.value)
    setQueryHistory(e.target.value)
  }

  const form = () => {
    return (
      <div className="form__wrapper">
        <h1>LET'S SEARCH A TRACK.</h1>
        <form className="form" onSubmit={submitHandler}>
          <input autoFocus="autofocus" className="input" onChange={changeHandler} value={query} type="text" placeholder="Search a track" />
          <button className="button button__submit">GO</button>
        </form>
      </div>
    )
  }

  return (
    <DataProvider className="app" value={data} >
      <QueryProvider value={queryHistory}>
        {form()}

        {fetched ? <TrackList /> : null}
        {fetched ? <NoList /> : null}

      </QueryProvider>
    </DataProvider>
  )

}

export default App;
