// Write your code here
import {CustomButton} from './styledComponents'

const DirectionItem = props => {
  const {active, id, displayText, changeDirection} = props
  const changeDirectionOnClick = () => {
    changeDirection(id)
  }
  console.log(active)
  return (
    <li>
      <CustomButton onClick={changeDirectionOnClick} active={active}>
        {displayText}
      </CustomButton>
    </li>
  )
}

export default DirectionItem
