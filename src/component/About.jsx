import React, { useEffect } from 'react'
import { useTopLoader } from '../contexts/topLoaderContext'
import tarapadaCV from '../assets/cvs/Tarapada(CV).pdf'
import rijwanCV from '../assets/cvs/my_Resume_final.pdf'
import tarapadaIMG from '../assets/img/tarapada.jpeg'
import rijwanIMG from '../assets/img/rijwan.jpeg'

const About = () => {
  const [[progress, setProgress]] = useTopLoader()

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 10)
  }, [setProgress])
  return (
    <div className='hero mainbox'>
      <div className="boxAbout ">
        <div className="col1About">

          <img className='' src={tarapadaIMG} alt="" />
        </div>
        <div className="writeAbout">
          <p className='peraabout'>
            I am tarapada garai a dedicated front-end developer with six months of professional experience in creating dynamic, responsive, and user-friendly web applications. My journey into web development began with a passion for blending creativity with technology, and I have since developed a keen eye for detail and a commitment to deliver high-quality digital solutions.
          </p>
          <a className='button-6 aboutBtn' href="https://tarapadagarai.tech/" target='_blank'>More About me</a>
          <a href={tarapadaCV} className='button-6 aboutBtn' download={tarapadaCV}>Downlod my cv</a>
        </div>
      </div>
      <div className="boxAbout">
        <div className="col1About">

          <img className='' src={rijwanIMG} alt="" />
          
        </div>
        <div className="writeAbout">
          <p className='peraabout'>
            I am Sk Rijwan a dedicated front-end and backend developer with six months of professional experience in creating dynamic, responsive, and user-friendly web applications. My journey into web development began with a passion for blending creativity with technology, and I have since developed a keen eye for detail and a commitment to deliver high-quality digital solutions.
          </p>
          <a className='button-6 aboutBtn' href="https://skrijwan.vercel.app/" target='_blank'>More About me</a>
          <a href={rijwanCV} className='button-6 aboutBtn' download={rijwanCV}>Downlod my cv</a>
        </div>
      </div>

    </div>
  )
}

export default About