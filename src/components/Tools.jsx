import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import canvasButton from '../assets/canvas-button.webp';
import back from '../assets/back.mp3';

function Tools() {
    const [isFading, setIsFading] = useState(false);
    const navigate = useNavigate();

    const handleGoBack = () => {
        setIsFading(true);
        const audio = new Audio(back);
        audio.play();
        setTimeout(() => {
            navigate("/");
        }, 300);
    };

    return (
        <div className={`container ${isFading && "slide-out"}`}>
            <ul >
                <li>JavaScript</li>
                <li>C#</li>
                <li>React</li>
                <li>Redux</li>
                <li>Vue</li>
                <li>Pinia</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>BitBucket</li>
                <li>Jira</li>
                <li>Confluence</li>
            </ul>
            <img src={canvasButton} alt="canvas" className="canvas-button" onClick={handleGoBack} />
        </div>
    );
}

export default Tools;