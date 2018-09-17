import * as React from 'react';
import styled from 'styled-components';


const Contenedor = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background-color:rgba(51, 170, 51, .1);
    display: flex;
    flex-wrap: wrap;

`

const ContainerResults = (props: any) => {
    return(
        <Contenedor>
            {props.children}
        </Contenedor>
    )
}



export default ContainerResults