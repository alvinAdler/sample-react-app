import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {
    //The props in here receives the color of the text and the text itself.

    return (
        <button style={{
            backgroundColor:props.color
        }} onClick={props.onClick} type="button" className="btn btn-add-task">{props.text}</button>
    )
}

Button.defaultProps = {
    color: "#919191",
    text: "Button"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button
