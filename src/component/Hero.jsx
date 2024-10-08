import React, { useEffect } from 'react'
import { BsFiletypePdf, BsQrCode } from 'react-icons/bs'
import { FaClipboardUser } from 'react-icons/fa6'
import { RiScreenshotFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useTopLoader } from '../contexts/topLoaderContext'

const Hero = () => {
    const [[progress, setProgress]] = useTopLoader()

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 10)
  }, [setProgress])
    return (
        <div className='hero'>
            <Link to="/webScreenshot" className="clickCom">
                <span>
                    <RiScreenshotFill />
                </span>
                <button className="button-33" role="button">Web Screenshot</button>
            </Link>
            <Link to="/randomUserData" className="clickCom">
                <span>
                <FaClipboardUser />
                </span>
                <button className="button-33" role="button">Random user data</button>
            </Link>
            <Link to="/pdfToQr" className="clickCom">
                <span>
                <BsQrCode />
                </span>
                <button className="button-33" role="button">
                Generate QR</button>
            </Link>
        </div>
    )
}

export default Hero