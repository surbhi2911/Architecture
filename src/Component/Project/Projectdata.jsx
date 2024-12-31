import React from 'react'
import HOC from '../../HOC/HOC'
import { ProjectList } from './ProjectListItem'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '../../Assets/Css/Project.css'
import ClientLogo from '../Homepage/ClientLogo'
import { TbCircleArrowUpRightFilled } from 'react-icons/tb'
import MainSection from '../../HOC/MainSection'

function Projectdata() {
  return (
    <>
      <MainSection text="Projects" classs='projectsbgimg' />

      <div className="container my-5 py-3">
        <div className="row g-5 ">
          {ProjectList.map((item, i) => (
            <>
              <div className="col-12 col-md-6 col-lg-4 " key={i}>
                <Link to={`/project/${item.id}  `}>
                  <Card className="shadow border-0 project-item">
                    <Card.Img variant="top" src={item.image} alt="Project Image" />
                    <Card.Body className='cardname_hover'>
                      <p className='mb-0'>{item.name} <span className='fs-2 fw-bold ps-2'><TbCircleArrowUpRightFilled /></span></p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
      <ClientLogo />
    </>
  )
}

export default HOC(Projectdata)
