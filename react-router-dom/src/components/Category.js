import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div>
      
        <ul className='category-dropdow'>
            <li>
                <Link to="">Fashion</Link>
            </li>
            <li>
                <Link to="">Mobiles</Link>
            </li>
            <li>
                <Link to="">Electronics</Link>
            </li>
            <li>
                <Link to="">Grocery</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default Category
