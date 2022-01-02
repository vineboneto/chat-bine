import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  margin: 40px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;

  .chat {
    width: 600px;
    border: 1px solid #181a1b;
    padding: 20px;
    border-radius: 8px;
  }

  #message_input {
    width: 100%;
    height: 3.5rem;
  }

  #messages {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
