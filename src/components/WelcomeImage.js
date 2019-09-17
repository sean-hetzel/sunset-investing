import React from "react";
import TempImg from "../images/placeholder_welcome_image.jpg";

class WelcomeImage extends React.Component {
    render() {
        return (
            <>
                <img src={TempImg} alt="suburbs" width="100%" />
            </>
        );
    }
}

export default WelcomeImage;
