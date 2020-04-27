import React, {useState} from 'react';
export default function AddMessage ({sender, addMessage}) {
  	const [text, setText] = useState('');
    const handleSubmit = (e) => {
    	e.preventDefault();
  		addMessage(sender.username, text);
      setText('')
    }
	return <div>
              <form className="input-group" onSubmit={(e)=> handleSubmit(e)}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={text} 
  				onChange={ e =>  setText(e.target.value)  } 
 			/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={text.length === 0}>
                    SEND
                  </button>
                </div>
              </form>
            </div>

}