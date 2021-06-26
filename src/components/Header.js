import PropTypes from 'prop-types'
import Button from './Button'

const 
header = ({title}) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add'></Button>
    </div>
  )
  }

header.defaultProps = {
  title:'Task Tracker'
}

export default header

