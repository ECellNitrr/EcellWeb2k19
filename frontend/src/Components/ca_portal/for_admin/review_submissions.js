import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import faxios from '../../../axios'


import PropTypes from 'prop-types'
import { connect } from 'react-redux'


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

        faxios().get(`/portal/submit_task/?task=${this.task_id}`).then(d => {
            console.log(d.data)
            let reviews = d.data.sort((a, b) => b.id - a.id)
            console.log({ reviews })
            reviews = reviews.map(review => {
                let created_date = new Date(review.created_at)
                review.created_at = created_date.toDateString()
                return review
            })

            this.setState({ reviews })
        })
    }

    _accept_review = e => {
        let input_grp = e.target.parentElement
        if (!input_grp.classList.contains('btns')) {
            input_grp = input_grp.parentElement
        }

        const review_id = Number(input_grp.dataset['reviewId'])

        faxios().patch(`/portal/submit_task/${review_id}/`, {
            status: 'accepted',
        }).then(d => {
            let reviews = this.state.reviews
            let rq_review_id = reviews.findIndex(review => review.id === review_id)
            reviews[rq_review_id].status = 'accepted'
            this.setState({ reviews })
        })
    }

    _reject_review = e => {
        let input_grp = e.target.parentElement
        if (!input_grp.classList.contains('btns')) {
            input_grp = input_grp.parentElement
        }

        const review_id = Number(input_grp.dataset['reviewId'])

        faxios().patch(`/portal/submit_task/${review_id}/`, {
            status: 'rejected',
        }).then(d => {
            let reviews = this.state.reviews
            let rq_review_id = reviews.findIndex(review => review.id === review_id)
            reviews[rq_review_id].status = 'rejected'
            this.setState({ reviews })
        })
    }


    _createTask = () => {
        this.props.history.push('/caportal/admin/create_task/')
    }


    render() {
        const total_reviews = this.state.reviews.length
        const pending_reviews = this.state.reviews.filter(review => review.status === 'pending').length
        const accepted_reviews = this.state.reviews.filter(review => review.status === 'accepted').length
        const rejected_reviews = this.state.reviews.filter(review => review.status === 'rejected').length


        let reviews = this.state.reviews.filter(review => review.status === this.state.status)


        const reviews_html = reviews.map((review, i) =>
            <div className="review shadow" key={i}>
                <img src={review.proof_pic} onClick={() => this.setState({ modal_open: true })} alt="" />
                <div className='d-flex user_details justify-content-center'>
                    <span>{review.proof_by_name}</span>
                    <span>{review.proof_by_email}</span>
                </div>
                <div className="text-center btns" data-review-id={review.id}>
                    <button onClick={this._accept_review} className="btn m-0 mx-2 btn-success"><i className="fa fa-check"></i></button>
                    <button onClick={this._reject_review} className="btn m-0 mx-2 btn-danger"><i className="fa fa-times"></i></button>
                </div>
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
                    <button onClick={() => this.setState({ status: 'rejected' })} className="mx-2 btn btn-danger">Rejected: {rejected_reviews}</button>
                </div>
                <div className="reviews">
                    {reviews_html}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(review_submissions)