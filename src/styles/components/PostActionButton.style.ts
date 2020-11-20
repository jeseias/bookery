import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  border: none;
  background-color: ${props => props.theme.backgrounds.secondary};
  padding: 1.8rem;
  border-radius: 1rem;

  transition: All ease-in-out 0.3;

  span {
    margin-left: 1rem;
  }

  &:hover {
    background: ${props => props.theme.backgrounds.tertiary};
    cursor: pointer;
  }
`
