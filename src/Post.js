import { Avatar } from '@material-ui/core'
import React from 'react'
import './post.css'
function Post({ name, description, message, photourl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>Suman Sasmal</h2>
                    <p>Description</p>
                </div>
            </div>   
            <div className="post__body">
                <p>Message goes here</p>
            </div>
        </div>
    )
}

export default Post