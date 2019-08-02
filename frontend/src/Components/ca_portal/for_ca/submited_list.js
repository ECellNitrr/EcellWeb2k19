import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import faxios from '../../../axios'


import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class submitted_list extends Component {
    state = {
        reviews: [],
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this._fetch()
    }

    _fetch = () => {
        // faxios().get(`/portal/submit_task/?proof_by=${this.props.auth.id}`).then(d => {
        //     console.log(d.data)
        //     let reviews = d.data.sort((a, b) => b.id - a.id)
        //     reviews = reviews.map(review => {
        //         let created_date = new Date(review.created_at)
        //         review.created_at = created_date.toDateString()
        //         return review
        //     })

        //     this.setState({ reviews })
        // })
    }


    render() {
        let reviews = this.state.reviews

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
                    <h2 className=" flex-grow-1 text-center">Submitted Posts</h2>
                </div>
                <table className='table table-striped mt-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task name</th>
                            <th>Platform</th>
                            <th>Submited</th>
                            <th>Reviewed</th>
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