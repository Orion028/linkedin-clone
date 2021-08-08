import { Avatar } from '@material-ui/core';
import React from 'react'
import "./sidebar.css";
function Sidebar() {
    
    const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>         
    );
    
    return (
        <div className="Sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Cover img" />
                <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GiuV2sONhrLHhWakNguWFooruFGeFhkf7EK8vUG7A=s288-p-rw-no" className="sidebar__avatar"/>
                <h2>Suman Sasmal</h2>
                <h4>sumansasmal028@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <div className="sidebar__statnumber">
                        2,456
                    </div>
                </div>
                <div className="sidebar__stat">
                <p>Who viewed you</p>
                    <div className="sidebar__statnumber">
                        2,386
                    </div>
                </div>
            </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem("reactjs")}
                    {recentItem("javascript")}
                    {recentItem("programming")}
                    {recentItem("design")}
                    {recentItem("developer")}
                </div>
        </div>
    )
}

export default Sidebar
