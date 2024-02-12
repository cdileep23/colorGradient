// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background: linear-gradient(
    to ${props => props.ActiveDirectionId},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  height: 100vh;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: white;
  font-size: 30px;
`

export const Para = styled.p`
  color: #ededed;
  font-size: 20px;
`

export const ColorSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Label = styled.p`
  color: white;
`
export const EachColorSelectionCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 60px;
  border-width: 0px;
  padding: 0px;
  background-color: transparent;
`
export const DirectContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export const GenerateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-weight: bold;
  border-radius: 10px;
  border-width: 0px;
  padding: 12px;
`
