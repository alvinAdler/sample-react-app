import React from 'react'

const EmptyBanner = () => {
    return (
        <div style={EmptyBanner_master} className="holder">
            <h1>Nothing to show here</h1>
        </div>
    )
}

const EmptyBanner_master = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    textAlign: "center",
    marginTop: "15px",
    color: "#f2f2f2",
    borderRadius: "8px",
    border: "1px solid #2b2b2b"
}

export default EmptyBanner
