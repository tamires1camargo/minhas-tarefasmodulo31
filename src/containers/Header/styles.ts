import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  max-width: 100vw;
  width: 100%;
  background-color: #b71540;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      height: 62px;
    }
  }
`

export const Title = styled.h1`
  font-weight: bold;
  color: #fff;
`

export const SearchInput = styled.input`
  background-color: #ecf0f1;
  width: 300px;
  padding: 5px 8px;
  border-radius: 10px;
  border: none;
  color: #7f8c8d;
`
