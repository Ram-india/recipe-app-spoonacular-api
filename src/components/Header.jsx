import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-blue-500 p-4 text-white'>
        <div className='container mx-auto flex justify-between'>
            <h1 className='text-xl font-bold'>Recipe FInder</h1>
           <nav>
            <Link to='/' className='mr-2'>Search</Link>
            <Link to='/favorites'> Favorites</Link>
           </nav>

        </div>

    </header>
  )
}

export default Header