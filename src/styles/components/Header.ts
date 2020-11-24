import styled from 'styled-components'

export const Header = styled.header<{ visible: boolean }>`
  background: ${props => props.theme.backgrounds.secondary};
  border-bottom: 1px solid ${props => props.theme.backgrounds.tertiary};
  color: ${props => props.theme.colors.primary};
  padding: 0 4rem;
  height: 5.5rem;

  display: ${props => (props.visible ? 'grid' : 'none')};
  grid-template-columns: 1fr 760px 1fr;
  justify-content: space-between;
  align-items: center;
`

export const SearchBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 30rem;
  height: 3.5rem;
  margin-left: 1rem;

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

export const Center = styled.div`
  height: 80%;
  margin: auto 0;

  display: grid;
  grid-gap: 1rem;
  justify-content: space-between;
  grid-template-columns: repeat(5, 1fr);
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

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

// NavItem
export const NavItemContainer = styled.div<{ active: boolean }>`
  width: 100%;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: none;
    position: absolute;
    top: 5.5rem;
    text-align: center;

    background: rgba(255, 255, 255, 0.8);
    padding: 0.4rem 1rem;
    border-radius: 0.6rem;
    font-size: 1.3rem;
    color: ${props => props.theme.backgrounds.primary};
  }

  &:hover {
    span {
      display: block;
    }
  }

  border-bottom: 2px solid
    ${props =>
      props.active ? props.theme.contemplary.tertiary : 'transparent'};

  ${props =>
    props.active
      ? `
      border-bottom: 2px solid ${props.theme.cool.top};

      svg {
        fill: ${props.theme.cool.top};
      }
    `
      : `
      border-radius: 1rem;

      &:hover {
        background: rgba(255,255,255, .03);
      }
  `}
`
