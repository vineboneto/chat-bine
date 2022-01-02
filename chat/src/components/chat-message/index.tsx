import dayjs from 'dayjs'
import { Container } from './styles'

type Props = {
  username: string
  createdAt: Date
  text: string
}

export default function ChatMessage({ createdAt, text, username }: Props) {
  return (
    <Container>
      <span className="message">{text}</span>
      <strong className="message-info">
        {username} - {dayjs(createdAt).format('DD/MM HH:mm')}
      </strong>
    </Container>
  )
}
