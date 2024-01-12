import React from 'react'

const Footer = () => {
    let today=new Date().getFullYear();
    return (
        <footer>
            <p>&copy;{today} Mubarak Bakery </p>
            
        </footer>
    )
}

export default Footer
