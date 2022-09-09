import React from 'react'
import { reviews } from '../data'
import CardUser from './Card'

const CardList = ({reviews,setIndex}) => {
  return (
    <div style={{marginTop:35}}>
{reviews.map((review,i)=><CardUser indx={i} review={review} setIndex={setIndex}/>)}
    </div>
  )
}

export default CardList