
const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="user.png" alt="tailwind css chat bubble component" />
            </div>
        </div>
<div className={`chat-bubble text-white bg-blue-500`}>Hi What's up?</div>
<div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">21:44</div>
    </div>
  )
}

export default Message


//starter code snippet
/*const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="user.png" alt="tailwind css chat bubble component" />
            </div>
        </div>
<div className={`chat-bubble text-white bg-blue-500`}>Hi What's up?</div>
<div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">21:44</div>
    </div>
  )
}

export default Message*/
