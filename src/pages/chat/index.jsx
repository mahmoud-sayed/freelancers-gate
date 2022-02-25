import React from "react";
import { BsSearch, BsPaperclip } from 'react-icons/bs';
import { IoSendSharp } from 'react-icons/io5';
import './style.scss';

const Chat = () => {
    return (
        <main className="main-chat-page">
            <div className="container">
                <div className="content-wrapper">

                    <section className="clients-chats">
                        <div className="clients-chat-wrapper">
                            <form className="search-form" action="">

                                <div className="search-input">
                                    <BsSearch className="search-icon" />
                                    <input className="search" type="search" name="chat-search" id="" placeholder="search" />
                                </div>

                            </form>
                            <div className="chat-sidebar">
                                <div className="client-chat-sidebar">
                                    <div className="client-img"><img src="https://via.placeholder.com/50x50" alt="client imag" /></div>
                                    <div className="client-name-and-lastSentMessage">
                                        <div className="name-and-last-time-send">
                                            <p className="client-name">Mahmoud S.</p>
                                            <p className="last-time-send">10:34 AM</p>
                                        </div>
                                        <div className="lastSentMessage-and-notification-num">
                                            <p className="last-sent-message">Hello world</p>
                                            <p className="notification-num">1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-chat-sidebar">
                                    <div className="client-img"><img src="https://via.placeholder.com/50x50" alt="client imag" /></div>
                                    <div className="client-name-and-lastSentMessage">
                                        <div className="name-and-last-time-send">
                                            <p className="client-name">Mahmoud S.</p>
                                            <p className="last-time-send">10:34 AM</p>
                                        </div>
                                        <div className="lastSentMessage-and-notification-num">
                                            <p className="last-sent-message">Hello world</p>
                                            <p className="notification-num">12</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-chat-sidebar active">
                                    <div className="client-img"><img src="https://via.placeholder.com/50x50" alt="client imag" /></div>
                                    <div className="client-name-and-lastSentMessage">
                                        <div className="name-and-last-time-send">
                                            <p className="client-name">Mahmoud S.</p>
                                            <p className="last-time-send">10:34 AM</p>
                                        </div>
                                        <div className="lastSentMessage-and-notification-num">
                                            <p className="last-sent-message">Hello world</p>
                                            <p className="notification-num">3</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-chat-sidebar">
                                    <div className="client-img"><img src="https://via.placeholder.com/50x50" alt="client imag" /></div>
                                    <div className="client-name-and-lastSentMessage">
                                        <div className="name-and-last-time-send">
                                            <p className="client-name">Mahmoud S.</p>
                                            <p className="last-time-send">10:34 AM</p>
                                        </div>
                                        <div className="lastSentMessage-and-notification-num">
                                            <p className="last-sent-message">Hello world</p>
                                            <p className="notification-num">5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className="chat-wrapper">
                        <div className="chat-header">
                            <div className="chat-client-img">
                                <img src="https://via.placeholder.com/45x45" alt="client imag" />
                            </div>
                            <p className="chat-client-name">Mahmoud S.</p>
                        </div>
                        <div className="chat-body"></div>
                        <div className="chat-footer-send-message">
                            <form className="message-form" action="">
                                <div class="file-upload">
                                    <label htmlFor="file-input">
                                        <BsPaperclip className='file-icon' />
                                    </label>
                                    <input id="file-input" type="file" />
                                </div>
                                <input type="text" placeholder="Type a message..." />


                                <div className="send-message">
                                    <label htmlFor="send-message-button">
                                        <IoSendSharp className="send-message-icon" />
                                    </label>
                                    <button id="send-message-button"></button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Chat;