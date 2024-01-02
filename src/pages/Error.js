import React from 'react'
import { Link } from "react-router-dom"


export default function Error() {
    return(
        <div>
        
        
      <h1 >Page not found</h1>
      <p >
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        
        <br />
        <Link to="/">Go home</Link>.
      </p>
    
        </div>
    )
}