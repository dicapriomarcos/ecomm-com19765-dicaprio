import React from 'react'
import { Link } from "react-router-dom"

export default function LinkComponent( { slug , title } ) {
    return (
        <li>
            <Link to={`/categoria/${slug}`}>{title}</Link>
        </li>
    )
}
