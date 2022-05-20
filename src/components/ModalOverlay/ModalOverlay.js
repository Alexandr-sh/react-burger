import React from 'react';
import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

class ModalOverlay extends React.Component {
    handleClick = () => {
        this.props.closeModal();
    }
    render() {
        return <div className={styles.modalOverlay} onClick={this.handleClick}>
        </div>;
    }
}

export default ModalOverlay;

ModalOverlay.propTypes = {
    closeModal: PropTypes.func
}; 