import PropTypes from 'prop-types'

const Button = ({ color, text, onclick }) => {
    return <button
        style={{ backgroundColor: color }}
        className='btn' onClick={onclick}>
        {text}
        </button>
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onclick: PropTypes.func,
}
export default Button
