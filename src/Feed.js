import React from 'react'
import './feed.css';
import CreateIcon from '@material-ui/icons/Create';

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
                        
                </div>   
            </div>
        </div>
    )
}

export default Feed
