import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { IoLogoReact } from 'react-icons/io5'


const Projects = () => {

  interface IProjects {
    image: JSX.Element,
    title: string,
    shortDescription: string,
    detail: {
      description: string,
      frontend: string,
      backend: string,
      members: number,
      demo: string,
      github: string
    }
  }
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataView, setDataView] = useState<IProjects | null>(null)

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dataProjects: IProjects[] = [
    {
      image: <IoLogoReact
        size={50}
        color='#9ff1e3'
      />,
      title: 'Website clone Tiki',
      shortDescription: 'Web design thương mại điện tử hỗ trợ và quản lý mua bán sách',
      detail: {
        description: '',//mieu ta du an se lam gi
        frontend: 'React (Javascripts), Redux Toolkit, Ant Design,',
        backend: 'Node js (Express), MongoDB',
        members: 1,
        demo: '',
        github: "https://github.com/tTrustEnd/Test-Fresher",
      }
    },
    {
      image: <IoLogoReact
        size={50}
        color='#9ff1e3'
      />,
      title: 'Website',
      shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
      detail: {
        description: '',//mieu ta du an se lam gi
        frontend: 'React (Javascripts), Redux Toolkit, Ant Design,',
        backend: 'Node js (Express), MongoDB',
        members: 1,
        demo: '',
        github: "https://github.com/tTrustEnd/Test-Fresher",
      }
    },
    {
      image: <IoLogoReact
        size={50}
        color='#9ff1e3'
      />,
      title: 'Website ',
      shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
      detail: {
        description: '',//mieu ta du an se lam gi
        frontend: 'React (Javascripts), Redux Toolkit, Ant Design,',
        backend: 'Node js (Express), MongoDB',
        members: 1,
        demo: '',
        github: "https://github.com/tTrustEnd/Test-Fresher",
      }
    }
  ]
  return (
    <>
      <>
        <Modal
          width={700}
          footer={null}
          title={dataView && dataView.title ? `Dự án ${dataView.title}` : ''}
          open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

          <ul> <li>Miêu tả: {dataView?.shortDescription}</li></ul>
          <ul> <li>Frontend: {dataView?.detail.frontend}</li></ul>
          <ul> <li>Backend: {dataView?.detail.backend}</li></ul>
          <ul><li>Số thành viên dự án: {dataView?.detail.members}</li></ul>
          <ul><li>Demo:</li></ul>
          <ul><li>Github <a href={dataView?.detail.github} target='blank'>{dataView?.detail.github} </a></li></ul>

        </Modal>
      </>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Các dự án đã hoàn thiện</h3>
              <span>Meet our amazing services</span>
            </div>
            <div className="list_wrap">
              {dataProjects && dataProjects.map((item, index) => {
                console.log(item)
                return (
                  <ul onClick={() => {
                    setDataView(item)
                    showModal()
                  }}>
                    <li>
                      <div className="inner">

                        <div className="icon">
                          {item.image}
                        </div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Projects;