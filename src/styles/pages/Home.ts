import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 30rem 1fr 30rem;
  grid-gap: 2rem;

  margin: 2rem auto;
  width: 100%;
  max-width: 1440px;
  padding: 2rem;
`

export const HomeAsideLeft = styled.aside``

export const Separetor = styled.div<{ thin?: boolean; bgColor?: string }>`
  display: block;
  width: 100%;
  height: 0.1rem;
  background: ${props =>
    props.color ? props.color : props.theme.colors.secondary};

  ${props => (props.thin ? 'margin: 1rem 0' : 'margin: 2rem 0;')}
`

export const RecommendBooksContainer = styled.div<{ itemLength: number }>`
  width: 100%;
  height: 22rem;
  padding: 1rem;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  display: grid;
  grid-template-columns: ${props => `repeat(${props.itemLength}, 16%)`};
  grid-template-rows: 1fr;
  grid-gap: 1rem;

  /* width */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.backgrounds.primary};
  }

  /* Handle */

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.backgrounds.secondary};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.backgrounds.tertiary};
  }
`

export const TopBookBox = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.backgrounds.tertiary};
  border-radius: 2rem;
`

export const AddPostContainer = styled.form`
  position: relative;
  width: 100%;
  background: ${props => props.theme.backgrounds.secondary};
  padding: 1rem;
  border-radius: 1rem;

  display: grid;
  grid-template-columns: 5rem 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    grid-column: 1/2;
    grid-row: 1/2;
  }

  textarea {
    max-width: 68rem;
    min-width: 68rem;
    border-radius: 1rem;
    border: none;
    padding: 1rem;
    outline: none;
    height: 5rem;
    min-height: 5rem;
    max-height: 15rem;
    grid-column: 2/-1;

    background: ${props => props.theme.backgrounds.tertiary};
  }

  .separator {
    grid-area: 2/1/3/5;
  }

  button {
    background: ${props => props.theme.contemplary.primary};
    border: none;
    color: ${props => props.theme.backgrounds.primary};
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
  }

  .cta {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const MainContent = styled.main`
  width: 100%;

  & > * {
    width: 100%;
    margin: 2rem 0;
  }
`
export const HomeAsideRight = styled.aside``
