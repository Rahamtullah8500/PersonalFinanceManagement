import React from 'react'
import './Card.css'
import { BsCurrencyRupee } from 'react-icons/bs';


const Card = ({ title, icon,children,color }) => {
  return (
    <div className='common-card-container' style={{borderColor:color}}>
        <div className='common-card-body'>
            <div className='common-card-title'>{title}</div>
            <div className='common-card-icon'>{icon}</div>
        </div>
        <div className='common-card-amount'>{children}<BsCurrencyRupee size={'16px'}/></div>
    </div>
  )
}

export default Card