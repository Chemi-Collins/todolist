import React from 'react'
import Navbar from '../Components/Navbar'

function MainLayout({children}) {
    return(
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    )
}

export default MainLayout;