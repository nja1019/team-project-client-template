import React from 'react';
import InboxHeader from './inbox-header';
import MessageThread from './inbox-messagethread';
import MessageReceive from './inbox-messagereceive';
import MessageSent from './inbox-messagesent';
import MessageEntry from './inbox-messageentry';
import {getChatData} from '../../server.js';
import {getMessageData} from '../../server.js';
import {sendNewMessages} from '../../server.js';


export default class MessageItems extends React.Component {

constructor(props){
  super(props);
  this.state = {
    chats:[],
    messages:[]
  }
}

refresh(){
  getChatData(1, (ch) => {
    this.setState({chats:ch});
  });
  getMessageData(1, (mes) =>{
    this.setState({messages: mes})
  });
}

componentWillMount(){
  this.refresh();
}

generateMessages(m){
  if(m.length !=0){
    return this.createMessages(m);
  }
}

createMessages(m){
    if(m.side == "left"){
      return <MessageReceive key={m.id} messageId={m.id}></MessageReceive>
    }else {
      return <MessageSent key={m.id} messageId={m.id}></MessageSent>
    }
}

onPost(mContents) {
  // Send to server.
  // We could use geolocation to get a location, but let's fix it to Amherst
  // for now.
  sendNewMessages(1, mContents,  () => {
    // Database is now updated. Refresh the feed.
    this.refresh();
  });
}




  render() {
    return (
      <div className= "col-md-7">

        <InboxHeader team="Okra Team">
        </InboxHeader>

        <div className= "message-zone">

          <MessageThread>

            {this.generateMessages(this.state.messages)}
          </MessageThread>

        </div>

        <MessageEntry onPost={(postContents) => this.onPost(postContents)} />
      </div>
    )
  }
}
