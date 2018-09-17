import * as React from 'react'
import styled from 'styled-components';
import Search from '../Search/Search.view';
import ContainerResults from '../ContainerResults/ContainerResults.view';

const ButtonOpenModal = styled.button<{show: boolean}>`
    text-decoration: none;
    font-size: .875rem;
    font-weight: 150;
    text-transform: uppercase;
    display: inline-block;
    border: none;
    background-color: red;//rgba(0, 0, 0, 0.0);
    color: white;
    padding: 1rem 2rem;
    display: ${p => p.show === true ? 'none' : 'true'};
`
const ButtonCloseModal = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 3rem;
    height: 3rem;
    font-size: .875rem;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.5);;
    color: #fff;
    border: none;
    line-height: 3rem;
    text-align: center;
    cursor: pointer;
    text-decoration: none;

`

const Modal = styled.div<{show: boolean}>`
    display: ${p => p.show === false ? 'none' : 'true'};
    overflow: hidden;
    

`


class ButtonModal extends React.Component{
    state = {
        showModal: false
    }

    handleModalShow = () =>{
        this.setState({showModal: true})
    }
    handleModalClose = () => {
        this.setState({showModal: false})
    }
    render(){
        return(
            <div>
                <ButtonOpenModal onClick={() => this.handleModalShow()} show={this.state.showModal}>
                    Buscador ... >
                </ButtonOpenModal>
                <Modal show={this.state.showModal}>
                    <ContainerResults>
                        <Search/>
                        <ButtonCloseModal onClick={() => this.handleModalClose()}>X</ButtonCloseModal>
                    </ContainerResults>
                </Modal>
            </div>
        )
    }
}

  export default ButtonModal