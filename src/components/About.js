import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div style={aboutPageStyle}>
            <h4>About Page</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio harum ab perferendis dolorum alias. Ipsam deserunt ratione officia accusantium fugiat necessitatibus error aspernatur illum rerum dolores distinctio, ut minima perspiciatis.</p>
            <Link to="/">Back to Previous Page</Link>
        </div>
    )
}

const aboutPageStyle = {
    textAlign: "center",
}

export default About
