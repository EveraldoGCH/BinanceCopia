import React from 'react'
import "../components/styles.css"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <>
            <header>
                <div id="flexheader">
                    <Link to="/"><img key="100" className="logo" src="/images/logo2.png" alt='LOGO'/></Link>
                    <Link><button className="HeaderRegistrarse">Registrarse</button></Link>
                </div>
            </header>
        </>
    )
}
