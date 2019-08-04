import React, { Component } from 'react'
import Modal from '../Form/modal'

export default class modal_2014 extends Component {
    render() {
        return (
            <div>
                <Modal id="TeamModal2014">
                    <div className="text-center font-weight-bold mt-3">
                        Looking for <span className="text-primary">Team of 2014</span>? Help us find them too! <br></br><br></br>
                        Connect with us at <a className="" href="tel:8094966697">+918094966697</a><br></br>
                        <span className="">Email:&nbsp;</span> <a href="mailto:ecell@nitrr.ac.in">ecell@nitrr.ac.in</a>
                    </div>

                    <div className="text-center mt-2">
                        <button type="button" className="btn btn-outline-info font-weight-bold waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}
