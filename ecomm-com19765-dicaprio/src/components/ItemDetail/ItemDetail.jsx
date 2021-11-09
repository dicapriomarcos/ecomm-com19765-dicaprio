import React from 'react'

export default function ItemDetail({item}) {
    return (
        <article>
            <h1>{item.title}</h1>
            <img src={item.image} alt="" />
            <p>{item.description}</p>
        </article>
    )
}
