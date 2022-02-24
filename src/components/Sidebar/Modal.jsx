import React from 'react'
import styled from 'styled-components'
import {
  AccountContainer,
  Acts,
  Backfon,
  Closebutton,
  Container,
  Docs,
  Footer,
  Footertwo,
  Heading,
  Heading3,
  Heading4,
  Headingbar,
  ImageAvatar,
  Imagedocs,
  ImageLogo,
  Imageuser,
  Navcontent,
  Urls,
  Urls1,
  Wrapper,
} from './Modal.styles'
import logo from '../../assets/avatar.jpg'
import ava from '../../assets/avatar2.png'
import user from '../../assets/users.png'
import doc from '../../assets/docs1.png'
import svg from '../../assets/log-out.svg'

const Modal = () => {
  return <SideBarContent />
}

const SideBarContent = () => {
  return (
    <Container>
      <Heading>
        <ImageAvatar src={logo} />
      </Heading>
      <AccountContainer>
        <Backfon></Backfon>
        <ImageLogo src={ava} />
        <Heading3>Бибіжамал Амангелді</Heading3>
        <Heading4>
          Системный <br /> администратор
        </Heading4>
      </AccountContainer>
      <Navcontent>
        <Acts>
          <Imageuser src={user} alt="" />
          <Urls href="_ancor">Акты</Urls>
        </Acts>
        <Docs>
          <Imagedocs src={doc} />
          <Urls1 href="_ancor">Документы</Urls1>
        </Docs>
      </Navcontent>

      <Footer>
        <Wrapper>
          <Closebutton>
            <img src={svg} alt="Closebutton" />
          </Closebutton>
          <span>Выход</span>
        </Wrapper>
      </Footer>

      <Footertwo></Footertwo>
    </Container>
  )
}

export default Modal
