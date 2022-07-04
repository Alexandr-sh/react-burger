import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';



function ModalOverlay(props){

    return (
        <div className={styles.modalOverlay} onClick={props.close}>
        </div>
    )
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func
}; 

export default ModalOverlay;