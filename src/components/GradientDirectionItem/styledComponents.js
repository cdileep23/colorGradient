// Style your elements here
import styled from 'styled-components'

export const CustomListItem = styled.button`
  color: #1e293b;
  background-color: white;
  border-radius: 8px;
  padding: 4px;
  height: 50px;
  width: 120px;
  margin-left: 60px;
  margin-bottom: 30px;
  cursor: pointer;
  opacity: ${props => (props.active ? 1 : 0.5)};
  border-width: 0px;
  font-weight: bold;
`
export const CustomButton = styled.button`
  color: #1e293b;
  background-color: white;
  border-radius: 8px;
  padding: 4px;
  height: 50px;
  width: 120px;
  margin-left: 60px;
  margin-bottom: 30px;
  cursor: pointer;
  opacity: ${props => (props.active ? 1 : 0.5)};
  border-width: 0px;
  font-weight: bold;
`
