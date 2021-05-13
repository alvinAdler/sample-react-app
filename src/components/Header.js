import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

const Header = (props) => {
    // const buttonOnClick = (e) => {
    //     console.log(e)
    // }

    return (
        <header className="compHeader">
            <h1 id="headerTitle">{props.title}</h1>
            <Button color={props.showAddTask ? "#e63222" : "#2284e6"} text={props.showAddTask ? "Close" : "Add"} 
            onClick={props.onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string,
}

// const Heading1Style = {
//     backgroundColor: "#2b2b2b",
//     color: "#f2f2f2",
//     padding: "10px",
//     borderRadius: "5px",
// }

export default Header
