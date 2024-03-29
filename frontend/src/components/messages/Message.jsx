import { extractTime } from '../../../../backend/utils/extractTime';
import {useAuthContext} from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {
  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();
  const fromMe=message.senderId===authUser._id;
  const formattedTime=extractTime(message.createdAt);
  const chatClassName=fromMe?'chat-end':'chat-start';
  const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic;
  const bubbleBgColor=fromMe?"bg-custom-gray":"";
  const shakeClass=message.shouldShake?"shake":"";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="tailwind css chat bubble component" />
            </div>
        </div>
<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
<div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
  {formattedTime}
</div>
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
