import React from "react";
import Modal from "./modal";

const styles = {
    img: {
        width: '100%'
    }
}

export default function adforca() {
    return (
        <Modal id="adforcaModal">
            <div className="p-3">
                <h1 className="text-center font-weight-bold">
                    E-Cell NIT RAIPUR
                </h1>
                <h2 className="text-center mt-3">
                    Introducing Campus Ambassador Progamme
                </h2>

                <div className="mt-5 text-center font-weight-bold">
                    How to become a CA?
                </div>
                <ol className='mt-3'>
                    <li>
                        <div>Signup using the signup button on the top right corner
                        of the site.</div>
                        <img style={styles.img} src={require('../../assets/caportal_ad/ca2signup.png')} alt="signup_img"/>
                    </li>
                    <li>
                        <div>Proceed to login.</div>
                        <img style={styles.img} src={require('../../assets/caportal_ad/ca3login.png')} alt="login_img"/>
                    </li>
                    <li>
                        <div>After login click on you name on the top right corner
                        of the site.</div>
                        <img style={styles.img} src={require('../../assets/caportal_ad/ca4applyforca.png')} alt="signup_img"/>
                    </li>
                    <li>
                        <div>
                            Press on the 'Request for CA' button.
                        </div>
                        <img  style={styles.img} src={require('../../assets/caportal_ad/ca5applied.png')} alt="signup_img"/>
                    </li>
                    <li>
                        <div className='font-weight-bold'>
                            We will process the your request within 12hrs.
                        </div>
                    </li>
                    <li>
                        Once you have been approved as a CA, you will be able to
                        see it while you click on your name on the <span className="font-weight-bold">top
                        right(Member Type)</span>.
                    </li>
                </ol>

                <div className="mt-5 text-center font-weight-bold">
                    FAQs:
                </div>
                <ol className='mt-3'>
                    <li>
                        <div className="font-weight-bold">What if I have already registered in the previous E-Cell site?</div>
                        <div>Please register in this new site also. We have updated the site for your better experience.</div>
                    </li>
                    <li>
                        <div className="font-weight-bold">When can I have access to the ca portal?</div>
                        <div>You will have access to the CA Portal by Monday(22/07/2019).</div>
                    </li>
                </ol>

                <div className="mt-5 text-center font-weight-bold">
                    For Queries Contact:
                </div>
                <div className="my-3 text-center">
                    <div>
                        <div className="font-weight-bold">Nishu Chandravanshi (Manager):</div>
                        <div>84 3524 9197</div>
                        <div>nishu181099@gmail.com</div>
                    </div>
                    <div>
                        <div className="font-weight-bold">Kuldeep Narayan Minj (Manager):</div>
                        <div>79 7444 3722</div>
                        <div>knarayanmj@gmail.com</div>
                    </div>
                </div>

                <div className="text-center">
                    <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                </div>
            </div>
        </Modal>
    );
}
