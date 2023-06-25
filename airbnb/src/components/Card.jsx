import React from 'react'
import zafe from '../assets/zaferes.png'
import star from '../assets/star.png'
import bike from '../assets/bike.png'
import wedding from '../assets/wedding.png'

const Card = (props) => {
  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }  else if (props.location === "Online") {
      badgeText = "ONLINE"
    }
  return (
    <div className='card'>
       
        
      {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={zafe} className='card-image'/>
        <div className='card-stats'>
            <img src={star} />
            <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
      

  )
}

export default Card
