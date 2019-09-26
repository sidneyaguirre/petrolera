import React, { Component } from "react";

class MessageModal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Resultado:
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{this.props.message}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageModal;
