import {React, useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmitData = (e) => {
        e.preventDefault()

        if(text === ''){
            alert("Please input some text for the task")
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="user-form" onSubmit = {onSubmitData}>
            <div className="form-data">
                <label htmlFor="input-task-title">Title</label>
                <input type="text" id="input-task-title" placeholder="Input Task Title" 
                    value = {text}
                    onChange = {(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-data">
                <label htmlFor="input-task-datetime">Date and Time</label>
                <input type="text" id="input-task-datetime" placeholder="Input Task Date and Time" 
                    value = {day}
                    onChange = {(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-data form-data-checkbox">
                <label htmlFor="input-task-reminder">Reminder</label>
                <input type="checkbox" id="input-task-reminder"
                    checked = {reminder}
                    value = {reminder}
                    onChange = {(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <button type="submit" className="btn btn-submit">Save Task</button>
        </form>
    )
}

export default AddTask
