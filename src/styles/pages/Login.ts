import styled from 'styled-components'

export const Container = styled.div`
  margin: 8% auto;
  width: 100%;
  max-width: 45rem;
  padding: 4rem 4rem 1rem 4rem;
  border-radius: 2rem;
  background: ${props => props.theme.backgrounds.secondary};
  box-shadow: 0 0 0.5rem 0.3rem rgba(255, 255, 255, 0.09);
  text-align: center;
`

export const LogoText = styled.div`
  div {
    margin: 0 auto;
    font-size: 4rem;
    font-weight: bold;
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    border: 2px solid #fff;

    display: grid;
    align-items: center;
    justify-content: center;
  }

  p {
    font-weight: bold;
    margin-top: 1rem;
  }
`

export const Input = styled.input`
  margin: 3rem auto;
  background: #fff;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  color: ${props => props.theme.backgrounds.primary};
  width: 100%;
  display: block;
  border-radius: 1rem;
  text-align: center;
`

export const InfoText = styled.p`
  text-align: center;
  margin: 2rem 0;
`

export const Button = styled.button`
  background: ${props => props.theme.contemplary.secondary};
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: none;
  width: 12rem;
  display: block;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  transition: all ease-in-out 0.3s;

  &:hover {
    background: ${props => props.theme.contemplary.primary};
    cursor: pointer;
  }
`

export const BottomText = styled.p`
  text-align: center;
  margin: 4rem auto 0 auto;
  max-width: 80%;
  color: ${props => props.theme.backgrounds.tertiary};

  a {
    color: ${props => props.theme.colors.secondary};
    text-align: center;
    display: inline-block;
    margin-right: 0.5rem;
  }
`
