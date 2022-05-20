import React from 'react';
import PropTypes from 'prop-types';

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
            if (this.props.isOpened != prevState.isOpened) this.setState({isOpened:this.props.isOpened})
          }

        render() {
            return (
                <WrappedComponent
                    data={this.props.data}
                    closeModal={this.close}
                    openModal={this.open}
                    isOpened = {this.state.isOpened}
                />
            )
        }
    }
};

Modal.propTypes = {
    isOpened: PropTypes.bool,
    data: PropTypes.object
  }; 

export default Modal;