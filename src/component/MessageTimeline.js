import React from 'react'
import MessageList from '../containers/MessageList';




 const MessageTimeline =( props ) =>{
  return (

    <div className='home-hero ' style={{"height":"auto", "min-height":"100vh"}} >
        <MessageList/>      
    </div>
  )
}
export default MessageTimeline;