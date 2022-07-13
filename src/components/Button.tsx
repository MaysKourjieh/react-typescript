import PropTypes from 'prop-types'

interface Props {
    color: string,
    text:string;
    onClick:(a?: any) => any,
  };

const Button = ({color , text, onClick}:Props) => {
  return (
      <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
  )
}

Button.defaultProps={
    color:'steelBlue',
    text:''
}

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button