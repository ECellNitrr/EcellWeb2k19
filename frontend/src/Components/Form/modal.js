import React, { Component } from "react";
import './form.scss'


export default class modal extends Component {
    render() {
        return (
            <div>
                <div
                    className="modal fade"
                    id={this.props.id}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div
                        className="modal-dialog cascading-modal"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-c-tabs">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
