import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;

  border-bottom: 1px solid #e8e6e3;

  .message {
    color: #e8e6e3;
    font-size: 15px;
    max-width: 350px;
  }

  .message-info {
    color: #e8e6e3;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
  }

  p {
    color: #e8e6e3;
    font-weight: 600;
    font-size: 35px;
  }
`
