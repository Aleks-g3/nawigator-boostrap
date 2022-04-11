import React from 'react'
import { Button } from 'react-bootstrap'
import { openLink } from '../functions/newTab'

export const SocialButtons = (props) =>{
  return(
    props.socials.map(social=>(
      <Button className="social-btn" onClick={() => openLink(social.link)}><img src={social.signature} alt={social.alt} className="social"/></Button>
  ))
)}
