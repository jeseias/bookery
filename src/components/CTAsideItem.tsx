import Link from 'next/link'

import { IconType } from 'react-icons'
import { Container } from '../styles/components/CTAsideItem'

interface CTAsideItemProps {
  text: string
  Icon: IconType
}

const CTAsideItem: React.FC<CTAsideItemProps> = ({ text, Icon }) => {
  return (
    <Container>
      <Link href="/">
        <a>
          <Icon size={30} color="#FFF" />
          <span>{text}</span>
        </a>
      </Link>
    </Container>
  )
}

export default CTAsideItem
