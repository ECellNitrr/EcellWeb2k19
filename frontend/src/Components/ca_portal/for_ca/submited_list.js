import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import faxios from '../../../axios'


import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class submitted_list extends Component {
    state = {
        reviews: [],
        status: 'total'
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        console.log(this.state.status)

        faxios().get(`/portal/submit_task/?proof_by=${this.props.auth.id}`).then(d => {
            console.log(d.data)
            let reviews = d.data.sort((a, b) => b.id - a.id)
            reviews = reviews.map(review => {
                let created_date = new Date(review.created_at)
                review.created_at = created_date.toDateString()
                return review
            })

            this.setState({ reviews })
        })
    }


    _createTask = () => {
        this.props.history.push('/caportal/admin/create_task/')
    }


    render() {
        const total_reviews = this.state.reviews.length
        const pending_reviews = this.state.reviews.filter(review=>review.status==='pending').length
        const accepted_reviews = this.state.reviews.filter(review=>review.status==='accepted').length
        const rejected_reviews = this.state.reviews.filter(review=>review.status==='rejected').length


        let reviews = this.state.reviews

        if(this.state.status !== 'total'){
            reviews = reviews.filter(review=>review.status===this.state.status)
            console.log(reviews)
        }

        const review_html = reviews.map((review, i) =>
            <tr key={i}>
                <td>{i + 1}</td>
                <td><Link className='detail_link' to={`/caportal/ca/submited_tasks/${review.id}/`}>{review.task_obj.name}</Link></td>
                <td>{review.task_obj.platform}</td>
                <td>{review.created_at}</td>
            </tr>
        )

        return (
            <div className='tasks_list container'>
                <div className="d-flex my-4">
                    <h2 className=" flex-grow-1 text-center">{this.state.status[0].toUpperCase()}{this.state.status.slice(1)} Posts</h2>
                </div>
                <div className="text-center">
                    <button onClick={() => this.setState({status: 'total'})} className="mx-2 btn btn-dark">Total: {total_reviews}</button>
                    <button onClick={() => this.setState({status: 'pending'})} className="mx-2 btn btn-primary">Pending: {pending_reviews}</button>
                    <button onClick={() => this.setState({status: 'accepted'})} className="mx-2 btn btn-success">Accepted: {accepted_reviews}</button>
                    <button onClick={() => this.setState({status: 'rejected'})} className="mx-2 btn btn-danger">Rejected: {rejected_reviews}</button>
                </div>
                <table className='table table-striped mt-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task name</th>
                            <th>Platform</th>
                            <th>Created on</th>
                        </tr>
                    </thead>
                    <tbody>
                        {review_html}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(submitted_list)