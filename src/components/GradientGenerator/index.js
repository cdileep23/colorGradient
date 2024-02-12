import {Component} from 'react'
import DirectionItem from '../GradientDirectionItem/index'
import {
  MainContainer,
  Heading,
  Para,
  ColorSelectionContainer,
  Label,
  EachColorSelectionCont,
  CustomInput,
  DirectContainer,
  GenerateButton,
  GenerateContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    inputFirstColor: '#8ae323',
    inputsecondColor: '#014f7b',
    inputDirection: gradientDirectionsList[0].directionId,
    ActiveDirectionId: gradientDirectionsList[0].directionId,
    direction: 'bottom',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
  }

  changeFirstColor = event => {
    console.log(event.target.value)
    this.setState({inputFirstColor: event.target.value})
  }

  changeDirection = id => {
    this.setState({inputDirection: id})
  }

  changeSecondColor = event => {
    console.log(event.target.value)
    this.setState({inputsecondColor: event.target.value})
  }

  changeBackground = () => {
    const {inputDirection, inputFirstColor, inputsecondColor} = this.state

    this.setState({
      firstColor: inputFirstColor,
      secondColor: inputsecondColor,
      ActiveDirectionId: inputDirection,
    })
  }

  render() {
    const {
      inputFirstColor,
      firstColor,
      secondColor,
      inputsecondColor,
      ActiveDirectionId,
      inputDirection,
    } = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        ActiveDirectionId={ActiveDirectionId.toLowerCase()}
        firstColor={firstColor}
        secondColor={secondColor}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <DirectContainer>
          {gradientDirectionsList.map(e => (
            <DirectionItem
              changeDirection={this.changeDirection}
              key={e.directionId}
              id={e.directionId}
              active={inputDirection === e.directionId}
              displayText={e.displayText}
            />
          ))}
        </DirectContainer>
        <Para>Pick the Colors</Para>
        <ColorSelectionContainer>
          <EachColorSelectionCont>
            <Label htmlFor="FirstColor">{inputFirstColor}</Label>
            <br />
            <CustomInput
              type="color"
              id="FirstColor"
              onChange={this.changeFirstColor}
              value={inputFirstColor}
            />
          </EachColorSelectionCont>
          <EachColorSelectionCont>
            <Label htmlFor="SecondColor">{inputsecondColor}</Label>
            <br />
            <CustomInput
              onChange={this.changeSecondColor}
              type="color"
              id="SecondColor"
              value={inputsecondColor}
            />
          </EachColorSelectionCont>
        </ColorSelectionContainer>
        <GenerateContainer>
          <GenerateButton onClick={this.changeBackground}>
            Generate
          </GenerateButton>
        </GenerateContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
