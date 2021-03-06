import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer>
      WEEKLY HOT NEWS
      <a href='https://github.com/ryanslee91' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} id='git' />
      </a>
      <a href='https://www.linkedin.com/in/sang-hyun-ryan-lee-801394a5/' target='_blank' rel='noreferrer'> 
        <FontAwesomeIcon icon={faLinkedin} id='linkedin' />
      </a>
    </footer>
  )
}