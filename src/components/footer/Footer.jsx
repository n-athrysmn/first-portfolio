import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { BrowserRouter as Router } from 'react-router-dom'

const Footer = () => {
	return (
		<Router>
			<footer className='FooterMenu'>
				<ul className='FooterList'>
					<li>
						<a href='/'>
							<img src={logo} alt='Logo' style={{ width: '200px' }} />
						</a>
					</li>
					<li>
						<a
							className='foot-items'
							href='https://api.whatsapp.com/send?phone=60192549717&text=Hi%20Athira!'
							target={'_blank'}
							rel='noreferrer'
						>
							<FaWhatsapp /> Contact on WhatsApp
						</a>
					</li>
					<li>
						<a
							className='foot-items'
							href='https://www.linkedin.com/in/noraathira/'
							target={'_blank'}
							rel='noreferrer'
						>
							<FaLinkedinIn /> Connect on LinkedIn
						</a>
					</li>
					<li>
						<hr />
					</li>
					<li>&copy; {new Date().getFullYear()} Nora Athira Yasmin</li>
				</ul>
			</footer>
		</Router>
	)
}

export default Footer
