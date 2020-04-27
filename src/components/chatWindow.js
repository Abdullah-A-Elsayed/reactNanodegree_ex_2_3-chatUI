import React from 'react';
import AddMessage from "./addMessage"
export default function ChatWindow ({sender , messages, addMessage}) {
	return <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{sender.username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === sender.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
		
			<AddMessage  sender={sender} addMessage={addMessage} />
            
          </div>

}