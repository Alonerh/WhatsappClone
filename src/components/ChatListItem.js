import React from "react";
import './ChatListItem.css';

const ChatListItem = ()=>{
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar"/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Rafael Alcantara</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo bem?Opa, tudo bem?Opa, tudo bem?Opa, tudo bem?Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ChatListItem;