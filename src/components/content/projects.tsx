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
      github: string,
      github2: string
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
      title: 'clone Megagscinemas ',
      shortDescription: 'Đây là dự án Fullstacks em tự code từ 21/6/2023 - 30/6/2023, sao chép lại trang web https://megagscinemas.vn/',
      detail: {
        description: 'Thiết kế các trang theo format trang nguồn (95%). Viết restful api tạo, quản lý dữ liệu liệu phim, loại vé, ưu đãi, người dùng, Phân quyền người dùng(( Quyền admin email:truong@gmail.com,password:123456), Tích hợp api Vnpay cho trang mua vé, messenger Facebook.',
        frontend: ': ReactJS, Redux?.Persist, Typescript,Sass,...',
        backend: 'Nodejs( ExpressJS ), Javascript, Mongoose, Mongo Cloud,Postman',
        members: 1,
        demo: 'https://clone-megagscinemas.truongnguyen.click/',
        github: "https://github.com/tTrustEnd/fe-cloneMega",
        github2: "https://github.com/tTrustEnd/be-cloneMega",

      }
    }
    ,
    {
      image: <IoLogoReact
        size={50}
        color='#9ff1e3'
      />,
      title: 'Website clone Tiki',
      shortDescription: 'Đây là dự án em làm frontend với Antd là chủ yếu ,Web design thương mại điện tử hỗ trợ và quản lý mua bán sách',
      detail: {
        description: 'Một số chức năng chính CRUD, phân quyền, lịch sử mua bán',//mieu ta du an se lam gi
        frontend: 'React (Javascripts), Redux Toolkit, Ant Design,',
        backend: 'Node js (Express), MongoDB',
        members: 1,
        demo: 'https://fe.truongnguyen.click/',
        github: "https://github.com/tTrustEnd/Test-Fresher",
        github2: "",
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
          <ul> <li>Một số chức năng chính: {dataView?.detail.description}</li></ul>
          <ul> <li>Frontend: {dataView?.detail.frontend}</li></ul>
          <ul> <li>Backend: {dataView?.detail.backend}</li></ul>
          <ul><li>Số thành viên dự án: {dataView?.detail.members}</li></ul>
          <ul><li>Demo: <a href={dataView?.detail.demo}> {dataView?.detail.demo} </a></li></ul>
          <ul><li>Github FE <a href={dataView?.detail.github} target='blank'>{dataView?.detail.github} </a></li></ul>
          {dataView?.detail.github2 && <ul><li>Github BE <a href={dataView?.detail.github} target='blank'>{dataView?.detail.github2} </a></li></ul>}
        </Modal>
      </>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Các dự án đã hoàn thiện</h3>
            </div>
            <div className="list_wrap" style={{paddingTop:100, paddingBottom:100}}>
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