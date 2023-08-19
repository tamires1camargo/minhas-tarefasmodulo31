import styled from 'styled-components'
import { Button } from '../../styles'

export const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  -webkit-box-shadow: 1px 9px 33px -11px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 9px 33px -11px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 9px 33px -11px rgba(0, 0, 0, 0.5);
  margin-top: 40px;

  div {
    margin: 16px 22;
  }
`
export const TitleCard = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Email = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px 0;
  border: none;
  border-radius: 8px;

  color: #000;
  background-color: #dff9fb;
`

export const RemoveButton = styled(Button)`
  background-color: #eb2f06;
`
export const SaveButton = styled(Button)`
  background-color: #05c46b;
`

export const Phone = styled(Email)``
