import React, { useContext } from 'react'
import DataContext from '../ContextAPI/DataContext'

import ImgPlaceHolder from '../images/no-image.jpg'

const TrackList = () => {

  const data = useContext(DataContext)

  const list = (data || []).map(track =>

    (
      <li className="track" key={track.id}>
        <div className="track-content__wrapper"  >
          <img className="track__artwork" src={track.artwork_url === null ? ImgPlaceHolder : track.artwork_url} alt="artwork" />
          <div className="track__rhs">
            <p className="track__title">{data[0].title}</p>
            <p className="track__username">{track.user.username}</p>
            <a className="track__link button__link button" href={track.user.permalink_url}>View more</a>
          </div>
        </div>
      </li>
    )
  )


  return (
    <div className="track__wrapper">
      <ul>{list}</ul>


    </div>
  )
}

export default TrackList
