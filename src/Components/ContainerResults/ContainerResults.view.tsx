import * as React from 'react';
import styled from 'styled-components';


const Contenedor = styled.div`
    
    min-height: 100vh;
    min-width: 100vw;
    width: 100%;
    background-color:rgba(0, 0, 0, .7);
    z-index: 2;
    top: 0px;
    position: absolute;

`

const ContainerResults = (props: any) => {
    return(
        <Contenedor>
            {props.children}
        </Contenedor>
    )
}



export default ContainerResults