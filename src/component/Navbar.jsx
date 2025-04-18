import React from 'react'
import { FaLaptopCode, FaSun } from 'react-icons/fa'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import { useTopLoader } from '../contexts/topLoaderContext'
import TopLoadingBar from './TopLoadingBar'
import { useMode } from '../contexts/modeContext'

const Navbar = () => {
    const [[progress, setProgress]] = useTopLoader()  
    const [modeCheck, setModeCheck] = useMode()
    return (
        <>
        <TopLoadingBar progress={progress} setProgress={setProgress} />
        <nav className='navbar navbarshadow'>
            <div className="logo">
                <span>
                <FaLaptopCode />
                </span>
                <div className="nameGroup">
                    undefined
                </div>
            </div>
            <div className="navigasons">
                <div className="navs">
                    <NavLink to="/" className='navClick hideMobile'>HOME</NavLink>
                    <NavLink to="/webScreenshot" className='navClick hideMobile'>web screenshot</NavLink>
                    <NavLink to="/randomUserData" className='navClick hideMobile'>random user data</NavLink>
                    <NavLink to="/pdfToQr" className='navClick hideMobile'>generate qr</NavLink>
                    <NavLink to="/about" className='navClick hideMobile'>ABOUT</NavLink>
                    <div className="navClick modefor" onClick={()=>setModeCheck((e)=>!e)}>
                        {modeCheck? <MdDarkMode /> : <MdLightMode />}
                    </div>
                </div>
            </div>


        </nav>
        </>
    )
}

export default Navbar