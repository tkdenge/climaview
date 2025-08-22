import React from 'react'
import './Footer.css'
import { DiGithubBadge } from 'react-icons/di'
import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-social-links">
              <a 
                href="https://github.com/tkdenge/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <DiGithubBadge className='github' size={30} color="black" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tkdenge/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} color="black" />
              </a>
              <a 
                href="mailto:tkdenge3@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Mail"
              >
                <FiMail size={30} color="black" />
              </a>
        </div>

        <p>© 2025 Thanyani Katleho Denge.</p>
      </div>
    </>
  )
}

export default Footer