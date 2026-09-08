import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import ProjectCards from './ProjectCards'
import ProjectAR from './ProjectAR'
import ProjectLCP from './ProjectLCP'
import ProjectGR from './ProjectGR'
import ProjectTC from './ProjectTC'
import ProjectOther from './ProjectOther'
import ProjectSS from './ProjectSS'
import colorSharp2 from '../../assets/color-sharp2.png'
import './projects.css'
import TrackVisibility from 'react-on-screen'
import ProjectList from './ProjectList'

export const Projects = () => {
	return (
		<section className='project' id='projects'>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}
								>
									<h2>Projects</h2>
									<p>
										Discover the Power of my expertise: An in-depth look at my
										all of my past software related projects.
									</p>
									<Row>
									{ProjectList.map((project, index) => {
										return <ProjectCards key={index} {...project} />
									})}
									</Row>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className='background-image-right' src={colorSharp2} alt='bg'></img>
		</section>
	)
}

export default Projects
