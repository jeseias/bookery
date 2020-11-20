import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  transition: All ease-in-out 0.3s;
  border-radius: 2rem;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      display: block;
      margin-right: 1rem;
    }

    span {
      color: ${props => props.theme.colors.primary};
      font-size: 1.8rem;
    }
  }

  &:hover {
    background: ${props => props.theme.backgrounds.secondary};
    cursor: pointer;
  }
`
