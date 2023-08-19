import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Circle = styled(Link)`
  height: 122px;
  width: 122px;
  background-color: #e67e22;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  border-radius: 50%;
  justify-content: center;
  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`
