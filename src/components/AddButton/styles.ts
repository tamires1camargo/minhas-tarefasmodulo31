import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Circle = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: #079992;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  border-radius: 50%;
  justify-content: center;
  display: flex;
  align-items: center;

  font-size: 40px;
  text-decoration: none;
`
