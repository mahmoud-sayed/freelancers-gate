import React from "react";
import { BsSearch } from 'react-icons/bs';
import './style.scss';

const Chat = () => {
    return (
        <main className="main-chat-page">
            <div className="container">
                <div className="content-wrapper">

                    <section className="clients-chats">
                        <div className="clients-chat-wrapper">
                            <div className="search-input">
                                <BsSearch className="search-icon" />
                                <input className="search" type="search" name="chat-search" id="" placeholder="search" />
                            </div>
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

                    </section>
                </div>
            </div>
        </main>
    );
}

export default Chat;