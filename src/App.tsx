import { Container, Row, Col } from 'react-grid-system'
import { globalStyles } from './styles/stitches.config'
import { Header, Nav, HeaderContent } from './styles'

import logoUiboost from './assets/logo-uiboost.svg'
import phoneIllustration from './assets/phone-illustration.svg'
import arrowDown from './assets/arrow-down.svg'

import ButtonStore from './components/ButtonStore'


function App() {
  globalStyles()

  return (
    <>
      <Header>
        <Container style={{ height: '100%' }}>
          <Row style={{ height: '100%' }}>
            <Col style={{ height: '100%' , display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Nav>
                <img src={logoUiboost} alt="Logo uiboost" />

                <div>
                  <a href="/#">Sobre o curso</a>
                  <a href="/#">Depoimentos</a>
                </div>

                <a href="/#">Dúvidas? Fale conosco ✌</a>
              </Nav>

              <HeaderContent>
                <div className="content">
                  <h3>Exclusivo para alunos uiBoost</h3>
                  <h2>Estude design até em outra <span>galáxia</span></h2>
                  <p>Baixe o app do uiBoost e tenha acesso a todo o conteúdo do curso uiBoost na palma da sua mão, mesmo estando offline. Aprenda de qualquer lugar e a qualquer hora.</p>

                  <div className="buttons">
                    <ButtonStore variant='apple' />
                    <ButtonStore variant='google' />
                  </div>
                </div>

                <div className="image">
                  <img src={phoneIllustration} alt="Phone illustration" />
                </div>
              </HeaderContent>

              <div style={{ textAlign: 'center' }}>
                <img src={arrowDown} alt="Arrow Bottom" style={{ marginBottom: '10px' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </Header>
    </>
  )
}

export default App
