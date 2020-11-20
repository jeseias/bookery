import { Container } from '../styles/components/PostActionButton.style'
import { IconType } from 'react-icons/lib'

interface IPostActionButtonProps {
  icon: {
    Icon: IconType
    color: string
  }
  text?: string
}

const PostActionButton: React.FC<IPostActionButtonProps> = ({
  icon: { Icon, color },
  text
}) => {
  return (
    <Container>
      <Icon color={color} size={25} />
      {text && <span>{text}</span>}
    </Container>
  )
}

export default PostActionButton
