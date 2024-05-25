import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function SocialSidebar() {
    return (
        <div className="social-sidebar">
            <div className="social-icons">
                <FontAwesomeIcon className="icon" icon={faGithub} />
            </div>
            <div className="social-text">
                <p>Lorem ipsum</p>
            </div>
        </div>
    )
}

export default SocialSidebar;
