import React from 'react'
import "./headeroptions.css"
function HeaderOption({Icon, title}) {
    return (
        <div className="HeaderOption">
            {Icon && <Icon className="headerOption_icon" />}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption




