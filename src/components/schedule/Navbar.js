import React from 'react'

function Navbar() {
    return (
        <div className="navs">
           <div>
               <text>Odalar</text>
           </div>
           <div>
               <text>9 Boş Oda</text>
           </div>
           <div className="searchs">
           <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
           </div>
        </div>
    )
}

export default Navbar
