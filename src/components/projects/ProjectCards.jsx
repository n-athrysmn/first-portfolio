import { Col } from "react-bootstrap"
import { BsArrowUpRightCircle } from 'react-icons/bs'

const ProjectCards = ({ title, description, url, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={6} xl={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br/>
          <span><a className="projUrl" href={url} target="_blank">Open Project <BsArrowUpRightCircle /></a></span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCards