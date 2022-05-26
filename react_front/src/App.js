import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const URL = 'http://localhost:9999';
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (message.trim() !== "") {
      axios.post(`${URL}/long-messages`, { message }).catch(console.log()).then(() => setMessage(''))
    }
  }

  useEffect(() => {
    axios.get(`${URL}/long-messages`).then(({ data }) => {
      setMessages(messages.concat(data))
    });
  }, [messages]);


  return (
    <div class="container">
      <div class="row clearfix">
        <div class="col-lg-12">
          <div class="card chat-app">
            <div id="plist" class="people-list">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search..." />
              </div>
              <ul class="list-unstyled chat-list mt-2 mb-0">
                <li class="clearfix">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                  <div class="about">
                    <div class="name">Vincent Porter</div>
                    <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                  </div>
                </li>
                <li class="clearfix active">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                  <div class="about">
                    <div class="name">Mohamed Alabasy</div>
                    <div class="status"> <i class="fa fa-circle online"></i> online </div>
                  </div>
                </li>
                <li class="clearfix">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                  <div class="about">
                    <div class="name">Mike Thomas</div>
                    <div class="status"> <i class="fa fa-circle online"></i> online </div>
                  </div>
                </li>
                <li class="clearfix">
                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                  <div class="about">
                    <div class="name">Christian Kelly</div>
                    <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                  </div>
                </li>
                <li class="clearfix">
                  <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                  <div class="about">
                    <div class="name">Monica Ward</div>
                    <div class="status"> <i class="fa fa-circle online"></i> online </div>
                  </div>
                </li>
                <li class="clearfix">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                  <div class="about">
                    <div class="name">Dean Henry</div>
                    <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="chat">
              <form id='form' onSubmit={handelSubmit}>
                <div class="chat-header clearfix">
                  <div class="row">
                    <div class="col-lg-6">
                      <div data-toggle="modal" data-target="#view_info">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                      </div>
                      <div class="chat-about">
                        <h6 class="m-b-0">Mohamed Alabasy</h6>
                        <small>Last seen: 2 hours ago</small>
                      </div>
                    </div>
                    <div class="col-lg-6 hidden-sm text-right">
                      <div class="btn btn-outline-secondary m-1"><i class="fa fa-camera"></i></div>
                      <div class="btn btn-outline-primary m-1"><i class="fa fa-image"></i></div>
                      <div class="btn btn-outline-info m-1"><i class="fa fa-cogs"></i></div>
                      <div class="btn btn-outline-warning m-1"><i class="fa fa-question"></i></div>
                    </div>
                  </div>
                </div>

                <div id='myChat' class="chat-history scroll-chat" >
                  {messages.map((m, i) =>
                    <ul class="m-b-0">
                      <li key={i} class="clearfix">
                        <div class="message-data text-end">
                          <span class="message-data-time p-2">10:10 AM, Today</span>
                          <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="avatar" />
                        </div>
                        <div class="message other-message float-right">  {m.message} </div>
                      </li>
                      <li class="clearfix">
                        <div class="message-data">
                          <span class="message-data-time">10:15 AM, Today</span>
                        </div>
                        <div class="message my-message">This is the server response</div>
                      </li>
                    </ul>
                  )}
                </div>

                <div class="chat-message clearfix">
                  <div class="input-group mb-0">
                    <input type="text" class="form-control" placeholder="Enter text here..."
                      value={message}
                      id="message" name="message"
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
