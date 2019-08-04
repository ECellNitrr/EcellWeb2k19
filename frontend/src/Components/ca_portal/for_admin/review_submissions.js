import React, { Component } from 'react'
import faxios from '../../../axios'


import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Modal from 'react-modal';


class review_submissions extends Component {
    task_id = this.props.match.params.task_id


    state = {
        reviews: [],
        status: 'pending',
        modal_open: false,
        modal_review_id: 0
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        console.log(this.state.status)

        faxios().get(`/portal/reviews/?task=${this.task_id}`).then(d => {
            let reviews = d.data.sort((a, b) => b.id - a.id)

            console.log(reviews)
            reviews = reviews.map(review => {
                let created_date = new Date(review.created_at)
                review.created_at = created_date.toDateString()
                return review
            })

            this.setState({ reviews })
        })
    }

    _accept_review = (e, review_id, points_input_class) => {
        e.preventDefault()


        this.setState({ modal_open: false })
        let points = document.querySelector(points_input_class).value

        // if the in accepted view prompt for new point
        if (this.state.status === 'accepted') {
            points = prompt('plz enter new points for the post:')
            console.log(points)
        }


        if (points > 10 || points < 0 || points === '' || points === null) {
            alert('points can be only within 0 and 10')
            return
        }

        points = Number(points)


        faxios().patch(`/portal/reviews/${review_id}/`, {
            points
        }).then(d => {
            let reviews = this.state.reviews
            let rq_review_id = reviews.findIndex(review => review.id === review_id)
            reviews[rq_review_id].points = points
            this.setState({ reviews })
        })
    }

    _closeModal = () => {
        this.setState({ modal_open: false })
    }


    render() {
        const pending_reviews = this.state.reviews.filter(review => review.points === -1).length
        const accepted_reviews = this.state.reviews.filter(review => review.points !== -1).length


        const selected_review = this.state.reviews.find(review => review.id === this.state.modal_review_id)

        let reviews = this.state.reviews.filter(review => review.points === -1)

        if (this.state.status === 'accepted') {
            reviews = this.state.reviews.filter(review => review.points !== -1)
        }

        const reviews_html = reviews.map((review, i) =>
            <div className="review shadow" key={i}>
                <img src={review.proof_pic} onClick={() => this.setState({ modal_open: true, modal_review_id: review.id })} alt="" />
                <div className='d-flex user_details justify-content-center'>
                    <span>{review.proof_by_name}</span>
                    <span>{review.proof_by_email}</span>
                </div>
                <form className="text-center btns">
                    {this.state.status === 'accepted' ?
                        <input type="number" className={`text-center points-normal-${review.id}`} disabled value={review.points} placeholder='points' /> :
                        <input type="number" className={`text-center points-normal-${review.id}`} placeholder='points' />
                    }
                    {<button onClick={(e) => this._accept_review(e, review.id, `.points-normal-${review.id}`)} className="btn m-0 mx-2 btn-success">
                        {this.state.status === 'accepted' ? <i className="fa fa-edit"></i> : <i className="fa fa-check"></i>}
                    </button>}
                </form>
            </div>
        )

        return (
            <div className='tasks_list container'>
                <div className="d-flex my-4">
                    <button onClick={() => this.props.history.goBack()} className="btn btn-warning">go back</button>
                    <h2 className=" flex-grow-1 text-center">{this.state.status[0].toUpperCase()}{this.state.status.slice(1)} Posts</h2>
                </div>
                <div className="text-center">
                    <button onClick={() => this.setState({ status: 'pending' })} className="mx-2 btn btn-primary">Pending: {pending_reviews}</button>
                    <button onClick={() => this.setState({ status: 'accepted' })} className="mx-2 btn btn-success">Accepted: {accepted_reviews}</button>
                </div>
                <div className="reviews">
                    {reviews_html}
                </div>
                {this.state.modal_open ? <Modal
                    isOpen={this.state.modal_open}
                    onRequestClose={this._closeModal}
                    shouldCloseOnOverlayClick={true}
                    // style={customStyles}
                    contentLabel="review_modal"
                >
                    <div className="review modal_review">
                        <div className='d-flex user_details justify-content-center'>
                            <span>{selected_review.proof_by_name}</span>
                            <span>{selected_review.proof_by_email}</span>
                        </div>

                        <form className="text-center btns">
                            {this.state.status === 'accepted' ?
                                <input type="number" className={`text-center points-modal-${selected_review.id}`} disabled value={selected_review.points} placeholder='points' /> :
                                <input type="number" className={`text-center points-modal-${selected_review.id}`} placeholder='points' />
                            }
                            {<button onClick={(e) => this._accept_review(e, selected_review.id, `.points-modal-${selected_review.id}`)} className="btn m-0 mx-2 btn-success">
                                {this.state.status === 'accepted' ? <i className="fa fa-edit"></i> : <i className="fa fa-check"></i>}
                            </button>}
                        </form>


                        <img src={selected_review.proof_pic} onClick={() => this.setState({ modal_open: true, modal_review_id: selected_review.id })} alt="" />
                    </div>
                </Modal> : null}
            </div>

        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(review_submissions)