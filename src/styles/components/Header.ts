import styled from 'styled-components'

export const Header = styled.header<{ visible: boolean }>`
  background: ${props => props.theme.backgrounds.secondary};
  border-bottom: 1px solid ${props => props.theme.backgrounds.tertiary};
  color: ${props => props.theme.colors.primary};
  padding: 0 4rem;
  height: 5.5rem;

  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
`

export const SearchBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 30rem;
  height: 3.5rem;

  display: flex;
  align-items: center;

  input {
    display: block;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    padding: 1rem;
    padding-left: 4rem;
    border-radius: 2rem;
    border: none;
    background: ${props => props.theme.backgrounds.tertiary};
    color: ${props => props.theme.colors.primary};
    font-size: 1.8rem;
    outline: none;
  }

  svg {
    position: relative;
    z-index: 10;
    top: 0.2rem;
    left: 1rem;
  }
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;

  font-size: 2rem;
  font-family: sans-serif;

  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 1rem;
  }
`
