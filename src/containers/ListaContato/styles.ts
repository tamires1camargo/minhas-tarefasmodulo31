import styled from 'styled-components'

export const Container = styled.div`
  max-height: calc(100vw - 116px);
  height: 100%;
  padding: 130px 20px;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));

  @media (max-width: 768px) {
    display: block;
    width: 90%;
    margin: 16px auto;
  }
`
