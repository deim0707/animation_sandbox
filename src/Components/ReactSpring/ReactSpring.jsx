import {useSpring, animated} from 'react-spring'

const ReactSpring = () => {
    const props1 = useSpring({opacity: 1, from: {opacity: 0}})
    const props2 = useSpring({ number: 100, from: { number: 0 } })
    return (
        <div>
            <animated.div style={props1}>I will fade in</animated.div>
            <animated.span>{props2.number}</animated.span>
        </div>
    )
}


export default ReactSpring;


