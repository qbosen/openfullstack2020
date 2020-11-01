import React from 'react'

const Notification = ({message}) => {
    if (message.length === 0) return null
    const data = message[0]
    return (
        <div className={data.success ? "notification" : "error"}>
            {data.message}
        </div>
    )
}

export default Notification