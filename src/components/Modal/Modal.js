import React from 'react';

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

export default Modal;