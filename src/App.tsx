import { Container, Row, Col } from 'react-grid-system'
import Slider from 'react-slick';
import { globalStyles } from './styles/stitches.config'

import { Header, Nav, HeaderContent, SectionValueOffer, LineImage, SectionFunctionalities, SectionFeedback, ItemSlide, SectionNote, SectionEmail } from './styles'
// Importação css do slide
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style-slide.css'

import logoUiboost from './assets/logo-uiboost.svg'
import phoneIllustration from './assets/phone-illustration.svg'
import arrowDown from './assets/arrow-down.svg'
import illustrationValueOffer1 from './assets/value-offer-1.svg'
import illustrationValueOffer2 from './assets/value-offer-2.svg'
import illustrationValueOffer3 from './assets/value-offer-3.svg'
import uiboostLine from './assets/uiboost-line.svg'
import progressIllustration from './assets/progress-illustration.svg'
import arrowDownload from './assets/arrow-download.svg'
import iconStack from './assets/icon-stack.svg'
import iconStar from './assets/icon-star.svg'
import iconChat from './assets/icon-chat.svg'
import imageAvatars from './assets/avatares.svg'
import iconArrowRight from './assets/icon-arrow-right.svg'
import imageAvatar from './assets/image-avatar.svg'
import imageNote from './assets/note-illustration.svg'
import iconEmail from './assets/icon-email.svg'
import iconArrowTop from './assets/icon-arrow-top.svg'



import ButtonStore from './components/ButtonStore'


function App() {
  globalStyles()

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

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


      <SectionValueOffer>
        <Container>
          <Row>
            <Col>
              <h2>O <span>Boost</span> para a sua carreira</h2>
              <p>Ajudamos designers a se especializarem em UI design</p>

              <div className='illustrtions-value-offer'>
                <figure>
                  <img src={illustrationValueOffer1} alt="" />
                  <figcaption>Alunos com certificações</figcaption>
                </figure>

                <figure>
                  <img src={illustrationValueOffer2} alt="" />
                  <figcaption>Horas de conteúdo gravado</figcaption>
                </figure>

                <figure>
                  <img src={illustrationValueOffer3} alt="" />
                  <figcaption>Horas de mentoria por turma</figcaption>
                </figure>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionValueOffer>

      <LineImage>
        <img src={uiboostLine} style={{ width: '100%' }} alt="" />
      </LineImage>

      <SectionFunctionalities>
        <Container>
          <Row>
            <Col>
              <h2>A Netflix tá diferente...</h2>
              <p className='subtitle'>Reunimos diversas funcionalidades em um app super prático para você estudar em qualquer lugar do planeta.</p>

              <div className='grid'>
                <div>
                  <img src={arrowDownload} alt="" />
                  <h3>Qualquer momento</h3>
                  <p>Estude offline e aprenda o conteúdo a qualquer hora</p>
                </div>

                <div>
                  <img src={iconStack} alt="" />
                  <h3>Módulos</h3>
                  <p>Uma lista de aulas sobre vários temas</p>
                </div>

                <div>
                  <img src={iconStar} alt="" />
                  <h3>Seu progresso</h3>
                  <p>Acompanhe seu progresso de estudos</p>
                </div>

                <div>
                  <img src={iconChat} alt="" />
                  <h3>Mural</h3>
                  <p>Um mural de recados pra você ficar por dentro do que tá rolando</p>
                </div>
              </div>
            </Col>

            <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={progressIllustration} alt="" />
            </Col>
          </Row>
        </Container>
      </SectionFunctionalities>

      <SectionFeedback>
        <Container>
          <Row>
            <Col>
              <h2>O que alguns dos nossos alunos estão falando</h2>
              <p className='subtitle'>Alguns feedbacks de alunos que já passaram pelo curso</p>

              <div className='align'>
                <img src={imageAvatars} alt="" />
                <p>+2.000 alunos</p>
              </div>

              <a href="/#">
                <p>Quero ser ui Boost</p>
                <img src={iconArrowRight} alt="" />
              </a>

              <section>
              <Slider {...settings}>
                <ItemSlide>
                  <p>“Excelente curso, reconhecido no mercado com seu devido valor. O Gilberto é sempre atencioso todoas as vezes que necessito de um feedback”</p>
                  <div>
                    <img src={imageAvatar} alt="" />
                    <hgroup>
                      <h4>Maria Fernandes</h4>
                      <h5>Product Designer Jr na McAfee</h5>
                    </hgroup>
                  </div>
                </ItemSlide>

                <ItemSlide>
                  <p>“Excelente curso, reconhecido no mercado com seu devido valor. O Gilberto é sempre atencioso todoas as vezes que necessito de um feedback”</p>
                  <div>
                    <img src={imageAvatar} alt="" />
                    <hgroup>
                      <h4>Maria Fernandes</h4>
                      <h5>Product Designer Jr na McAfee</h5>
                    </hgroup>
                  </div>
                </ItemSlide>

                <ItemSlide>
                  <p>“Excelente curso, reconhecido no mercado com seu devido valor. O Gilberto é sempre atencioso todoas as vezes que necessito de um feedback”</p>
                  <div>
                    <img src={imageAvatar} alt="" />
                    <hgroup>
                      <h4>Maria Fernandes</h4>
                      <h5>Product Designer Jr na McAfee</h5>
                    </hgroup>
                  </div>
                </ItemSlide>

                <ItemSlide>
                  <p>“Excelente curso, reconhecido no mercado com seu devido valor. O Gilberto é sempre atencioso todoas as vezes que necessito de um feedback”</p>
                  <div>
                    <img src={imageAvatar} alt="" />
                    <hgroup>
                      <h4>Maria Fernandes</h4>
                      <h5>Product Designer Jr na McAfee</h5>
                    </hgroup>
                  </div>
                </ItemSlide>

                <ItemSlide>
                  <p>“Excelente curso, reconhecido no mercado com seu devido valor. O Gilberto é sempre atencioso todoas as vezes que necessito de um feedback”</p>
                  <div>
                    <img src={imageAvatar} alt="" />
                    <hgroup>
                      <h4>Maria Fernandes</h4>
                      <h5>Product Designer Jr na McAfee</h5>
                    </hgroup>
                  </div>
                </ItemSlide>

                <ItemSlide>
                  <p>“Excelente curso, reconhecido no mercado com seu devido valor. O Gilberto é sempre atencioso todoas as vezes que necessito de um feedback”</p>
                  <div>
                    <img src={imageAvatar} alt="" />
                    <hgroup>
                      <h4>Maria Fernandes</h4>
                      <h5>Product Designer Jr na McAfee</h5>
                    </hgroup>
                  </div>
                </ItemSlide>
              </Slider>
              </section>
            </Col>
          </Row>
        </Container>
      </SectionFeedback>

      <SectionNote>
        <Container>
          <Row>
            <Col md={8}>
              <h2>Facilitamos para que você aprenda design de interfaces a qualquer hora e lugar.</h2>
              <p className='subtitle'>Nós queremos te dar a praticidade de ter acesso a todas as aulas e mensagens na palma da mão para deixar você cada vez mais perto do seu sonho de ser um excelente ui designer.</p>

              <div className="buttons">
                <ButtonStore variant='apple' />
                <ButtonStore variant='google' />
              </div>
            </Col>

            <Col md={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <img src={imageNote} alt="" />
            </Col>
          </Row>
        </Container>
      </SectionNote>

      <SectionEmail>
        <Container>
          <Row style={{ backgroundColor: '#3A3847', borderRadius: '8px', padding: '60px 110px' }}>
            <Col>
              <h2>
                <img src={iconEmail} alt="" />
                Receba as novidades
              </h2>
              <p>Inscreva-se e receba as novidades no seu E-mail.</p>
            </Col>
            <Col>
              <div className='input-button'>
                <input type="email" placeholder='Insira seu E-mail' />
                <button type='submit' className='button-input'>Assinar agora</button>
              </div>

              <div className='checkbox-label'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">concordo em receber notificações</label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>            
              <button className='scroll-top' onClick={() => window.scrollTo(0, 0)}>
                Voltar ao topo
                <img src={iconArrowTop} alt="" />
              </button>
            </Col>
          </Row>
        </Container>
      </SectionEmail>
    </>
  )
}

export default App
