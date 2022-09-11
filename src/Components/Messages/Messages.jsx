import React from 'react';
import Message from './Message/Message';

const Messages = () => {
    return (
        <div className="messages">
            <div className="messages_list">
                <Message
                    userName="Shan Chin"
                    imgURL="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                    to="/messages/1"
                />
            </div>
            <div className="message_content">
                <div className="message_content__header">
                    <div className="message_content__header_info">
                        <div
                            className="message_content__header_img bg_rules"
                            style={{
                                background:
                                    'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80")',
                            }}
                        ></div>
                        <div className="message_content__header_user">
                            <h5>Linn Yu</h5>
                            <p>Active 6m</p>
                        </div>
                    </div>
                    <div className="message_content__header_btn">
                        <button>Call</button>
                        <button>Video Call</button>
                    </div>
                </div>
                <div className="message_content__content"></div>
                <div className="message_content__footer">
                    <form action="">
                        <div className="message_content__footer_textarea">
                            <textarea name="" id="" rows={1}></textarea>
                        </div>
                        <div className="message_content__footer_btn">
                            <button>SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Messages;
