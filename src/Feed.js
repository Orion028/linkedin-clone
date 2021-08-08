import React from 'react'
import './feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Inputoption from './Inputoption.js';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { CalendarViewDay } from '@material-ui/icons';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputctn">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputoptions">
                    <Inputoption Icon ={ImageIcon} title="Photo" color="#70B5F9" />
                    <Inputoption Icon = {SubscriptionsIcon} title="video" color="#E7A33E" />
                    <Inputoption Icon = {EventNoteIcon} title="Event" color = "#C0CBCD" />
                    <Inputoption Icon = {CalendarViewDay} title="Write article" color="#7FC15E" />
                </div>   
            </div>
            <Post name="Suman Sasmal" description="This is a test" message="this the message" />
        </div>
    )
}

export default Feed
