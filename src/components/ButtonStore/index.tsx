import { ButtonContainer } from './styles'

import iconApple from '../../assets/icon-apple.svg'
import iconGooglePlay from '../../assets/icon-google-play.svg'

interface ButtonProps {
  variant: string;
}

function ButtonStore({ variant }: ButtonProps) {
  return (
    <ButtonContainer>
      <img src={variant === 'apple' ? iconApple : iconGooglePlay} alt="Icon Store" />
      
      <div>
        <p>Download via</p>
        <strong>{variant === 'apple' ? 'App Store' : 'Google Play'}</strong>
      </div>
    </ButtonContainer>
  )
}

export default ButtonStore
