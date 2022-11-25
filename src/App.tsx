import { Container, Row, Col } from 'react-grid-system'
import { globalStyles } from './styles/stitches.config'
import { Header, Title } from './styles'

function App() {
  globalStyles()

  return (
    <>
      <Header>
        <Container>
          <Row debug>
            <Col debug>
              <Title>Home Page</Title>
            </Col>
          </Row>
        </Container>
      </Header>
    </>
  )
}

export default App
