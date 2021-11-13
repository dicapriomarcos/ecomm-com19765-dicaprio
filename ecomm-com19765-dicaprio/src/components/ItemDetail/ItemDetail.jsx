import React from 'react'
import './itemdetail.css'

export default function ItemDetail({item}) {
    return (
        <article className="single-product">
            <div className="image">
                <img src={item.image} alt="" />
            </div>
            <div className="data">
            <h1>{item.title}</h1>
            <h3>{item.price}</h3>
            <p>{item.description}</p>
            </div>

        </article>
    )
}
