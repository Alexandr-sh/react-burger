import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { BURGER_INGRIDIENT_PROPTYPES } from '../../utils/constants';

const Modal = WrappedComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isOpened: false
            }
        }

        open = () => {
            this.setState({
                isOpened: true
            })
        };


        close = () => {
            this.setState({
                isOpened: false
            })
        };

        componentDidUpdate(prevProps, prevState) {
            if (this.props.isOpened != prevState.isOpened) this.setState({ isOpened: this.props.isOpened })
        }

        render() {
            return (
                <WrappedComponent
                    data={this.props.data}
                    closeModal={this.close}
                    openModal={this.open}
                    isOpened={this.state.isOpened}
                />
            )
        }
    }
};

Modal.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    data: PropTypes.shape(BURGER_INGRIDIENT_PROPTYPES).isRequired
};

export default Modal;