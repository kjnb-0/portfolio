import React from 'react'

import { SocialIcon } from 'react-social-icons'

export const Footer = () => {
    return (
        <div className="container" id="contact">
            <h2 id="contact-header">Get in touch!</h2>
            <SocialIcon className="social-icon" target="_blank" url="mailto:kbienia@uw.edu" />
            <SocialIcon className="social-icon" target="_blank" url="https://github.com/kjnb-0" />
            <SocialIcon className="social-icon" target="_blank" url="https://www.linkedin.com/in/kjnielsen/" />
        </div>
    )
}
