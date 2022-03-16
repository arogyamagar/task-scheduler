import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'> 
      <h1>{title}</h1>
      <Button color={showAdd? 'red':'green'} text={showAdd? 'Close':'Add'} onClick = {onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Scheduler',
}

Button.defaultProps = {
    color:'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
// const headingStyle={
//     color:'red',
//     backgroundColor:'black',
// }
Header.propTypes = {
    title:PropTypes.string.isRequired,
}
export default Header
