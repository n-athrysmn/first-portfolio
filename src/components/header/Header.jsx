import './header.css'
import { React, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../../assets/header-img.svg'
import cv from '../../assets/NoraAthiraYasmin-Kassim-CV.pdf'
import resume from '../../assets/NORAATHIRAYASMINBINTIKASSIM-(2023RESUME).pdf'
import { BsArrowRightCircle } from 'react-icons/bs'
import TrackVisibility from 'react-on-screen'

const Header = () => {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [text, setText] = useState('')
	const [delta, setDelta] = useState(300 - Math.random() * 100)
	const [index, setIndex] = useState(1)
	const toRotate = ['Software Engineer', 'Web Developer', 'Web Designer']
	const period = 2000

	useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)

		return () => {
			clearInterval(ticker)
		}
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length
		let fullText = toRotate[i]
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1)

		setText(updatedText)

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setIndex((prevIndex) => prevIndex - 1)
			setDelta(period)
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setIndex(1)
			setDelta(500)
		} else {
			setIndex((prevIndex) => prevIndex + 1)
		}
	}

	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='align-items-center'>
					<Col md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}
								>
									<span className='tagline'>Welcome to my Portfolio</span>
									<h1>
										{`Hi! I'm Nora, `}{' '}
										<span className='txt-rotate'>
											<span className='wrap'>{text}</span>
										</span>
									</h1>
									<p>
										A young devoted Software Engineer. Always strive for a self
										improvement in Software Engineering. Seeking for job in web
										development team, but is open for any other opportunities
										related to software development.
									</p>
									<Row>
										<Col xl={6} md={12} sm={12}>
											<a
												href={resume}
												target='_blank'
												rel='noreferrer'
												className='button'
											>
												View Resume <BsArrowRightCircle size={25} />
											</a>
										</Col>
										<Col xl={6} md={12} sm={12}>
											<a
												href={cv}
												className='button-sqr'
												target='_blank'
												rel='noreferrer'
											>
												View CV <BsArrowRightCircle size={25} />
											</a>
										</Col>
									</Row>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__zoomIn' : ''
									}
								>
									<img src={headerImg} alt='Header Img' />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Header
