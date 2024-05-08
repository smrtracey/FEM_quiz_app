
import './button.scss';

const Button = ({onClick, buttonText}) => {
  return (
    <button className="button" onClick = {onClick}>{buttonText}</button>
  )
}

export default Button