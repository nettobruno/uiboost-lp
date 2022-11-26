import { styled } from '../../styles/stitches.config'

export const ButtonContainer = styled('button', {
  backgroundColor: '$gray800',
  borderRadius: '8px',
  cursor: 'pointer',
  color: 'white',
  fontFamily: '$inter',

  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  padding: '0px 20px',
  height: '60px',

  'img': {
    width: '30px'
  },

  'p': {
    fontSize: '11px',
    lineHeight: '11px',
    marginBottom: '5px',
  },

  'strong': {
    fontSize: '17px',
    lineHeight: '15px',
  }
})
