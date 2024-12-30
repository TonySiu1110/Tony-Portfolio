import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram, faDribbble, faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Testing = () => {
  return (
    <div className="s-hero__content-social">
      <a href="#0"><FontAwesomeIcon icon={faFacebookSquare} /></a>
      <a href="#0"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#0"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#0"><FontAwesomeIcon icon={faDribbble} /></a>
      <a href="#0"><FontAwesomeIcon icon={faBehance} /></a>
      <a href="#0"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
  )
}

export default Testing