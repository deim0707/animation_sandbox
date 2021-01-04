import styled, {keyframes} from "styled-components";
import {bounce, tada, wobble} from "react-animations";

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`
const Tada = styled.div`animation: 2s ${keyframes`${tada}`} infinite`
const Wobble = styled.div`animation: 10s ${keyframes`${wobble}`} infinite`

const ReactAnimationsExample = () => {
    return (
        <div style={{margin: "80px"}}>
            <Bounce><h1>Hi worrrrlddddd</h1></Bounce>
            <Tada><h1>Hi worrrrlddddd</h1></Tada>
            <Wobble><h1>Hi worrrrlddddd</h1></Wobble>
        </div>
    )
}

export default ReactAnimationsExample;
