import {Fade, Zoom, Flip} from 'react-reveal';

const ReactReveal = () => {
    return (
        <div>
            <Zoom right cascade>
                <div>
                    <h2>React Reveal</h2>
                    <h2>React Reveal</h2>
                    <h2>React Reveal</h2>
                </div>
            </Zoom>
            <Flip left cascade>
                React Reveal
            </Flip>

            <Fade left>
                <h1>React Reveal</h1>
            </Fade>
        </div>
    )
}

export default ReactReveal;
