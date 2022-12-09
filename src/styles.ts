import { styled } from './styles/stitches.config'

export const Header = styled('header', {
  width: '100%',
  height: '100vh',
  background: '$gray900',
})

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '40px 0',

  'a': {
    color: '$gray200',
    fontFamily: '$inter',
    fontSize: '16px',
    lineHeight: '24px',
    textDecoration: 'none'
  },

  'a:hover': {
    textDecoration: 'underline'
  },

  'div': {
    display: 'flex',
    gap: '50px'
  }
})

export const HeaderContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'center',

  '.content h3': {
    color: 'white',
    fontFamily: '$inter',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',

    marginBottom: '16px'
  },

  '.content h2': {
    color: 'white',
    fontFamily: '$poppins',
    fontSize: '56px',
    lineHeight: '67px',

    marginBottom: '24px'
  },

  '.content h2 span': {
    background: 'linear-gradient(255.21deg, #BB44F0 -27.38%, #F974CC 30.45%, #FFC9BB 100.92%), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },

  '.content > p': {
    color: '$gray200',
    fontFamily: '$inter',
    fontSize: '18px',
    lineHeight: '27px',

    marginBottom: '48px'
  },

  '.image': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    'img': {
      width: '100%'
    }
  },

  '.content, .image': {
    padding: '30px'
  },

  '.buttons': {
    display: 'flex',
    gap: '20px'
  }
})


export const SectionValueOffer= styled('section', {
  background: '$gray900',

  width: '100%',
  padding: '150px 0',

  'h2': {
    color: 'white',
    fontFamily: '$poppins',
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '43px',
    textAlign: 'center',

    marginBottom: '10px'
  },

  'h2 span': {
    color: '$pink900',
  },

  'p': {
    color: 'white',
    fontFamily: '$inter',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'center',

    marginBottom: '24px'
  },

  'div.illustrtions-value-offer': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    marginTop: '50px'
  },

  'figcaption': {
    color: 'white',
    fontFamily: '$inter',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'center',
  }
})
