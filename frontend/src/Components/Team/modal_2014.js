import React, { Component } from 'react'
import Modal from '../Form/modal'

export default class modal_2014 extends Component {
    render() {
        return (
            <div>
                <Modal id="TeamModal2014">
                    <div className="text-center font-weight-bold mt-3">
                        We are looking for <span className="text-primary">Team of 2014</span>. Do you have their address? <br></br><br></br>
                        If yes, please connect with us at <a className="" href="tel:8094966697">+918094966697</a><br></br>
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
