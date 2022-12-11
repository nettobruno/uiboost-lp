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
    fontFamily: 'Inter',
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
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',

    marginBottom: '16px'
  },

  '.content h2': {
    color: 'white',
    fontFamily: 'Poppins',
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
    fontFamily: 'Inter',
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
    fontFamily: 'Poppins',
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
    fontFamily: 'Inter',
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
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'center',
  }
})

export const LineImage= styled('section', {
  background: '$gray900'
})

export const SectionFunctionalities= styled('section', {
  background: '$gray900',

  width: '100%',
  padding: '150px 0',

  'h2': {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '43px',

    marginBottom: '24px'
  },

  'p.subtitle': {
    color: 'white',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',

    marginBottom: '48px'
  },


  'div.grid': {
    display: 'grid',
    gap: '100px',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr'
  },

  'div.grid div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  'div.grid img': {
    width: '40px',

    marginBottom: '20px'
  },

  'div.grid h3': {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '28px',

    marginBottom: '10px'
  },

  'div.grid p': {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',

    textAlign: 'center'
  },
})

export const SectionFeedback= styled('section', {
  background: '$gray900',
  padding: '50px 0',

  display: 'flex',

  'h2': {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '43px',
    textAlign: 'center',

    marginBottom: '10px'
  },

  'p.subtitle': {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '27px',
    textAlign: 'center',

    marginBottom: '20px'
  },

  'div.align': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',

    marginBottom: '20px'
  },

  'div.align p': {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    textAlign: 'center',
  },

  'a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',

    textDecoration: 'none',

    marginBottom: '100px'
  },

  'a p': {
    color: '$pink900',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '27px',
    textAlign: 'center',
  }
})

export const ItemSlide= styled('div', {
  background: '$gray800',
  opacity: 0.2,

  borderRadius: '8px',

  padding: '20px 30px',
  margin: '20px',

  'p': {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '27px',
  },

  'div': {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',

    marginTop: '20px'
  },

  'h4': {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '27px',
  },

  'h5': {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
})

export const SectionNote= styled('section', {
  background: '$gray900',
  padding: '150px 0',

  'h2': {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '36px',

    marginBottom: '24px'
  },

  'p.subtitle': {
    color: '$gray200',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '27px',

    marginBottom: '32px'
  },

  '.buttons': {
    display: 'flex',
    gap: '20px'
  }
})
