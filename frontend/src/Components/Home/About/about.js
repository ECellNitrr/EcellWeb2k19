import React from 'react';
import './about.css';

const about=()=> (<div className="about">
    <div className="container-fluid ctn-2">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="anim"><h2 className="heading-1">ABOUT US</h2></div>
                <h3 className="heading-2">We Promote Startups</h3>
                <p className="text-5">The Entrepreneurship cell, NIT Raipur is a non-profit organization that manifests the essence of entrepreneurship in the passionate youngsters who have the zeal to pursue entrepreneurship and advocate this vehement enthusiasm in the generations to come.Keeping this ideology in mind we not only provide the foundation to the entrepreneurial capabilities of the promising young minds but also help in nurturing their skills by providing resources such as new ideas, funding mentoring, other mentorship programs, workshops to help them organize their strategy and frequent, highly interactive speaker sessions and lecture series.<br></br><br></br>At E-Summit we aspire to create a mélange of eminent speakers who have proved themselves in diverse fields and are at the zenith of glory.E-Summit’18 will not just be a conclave of innovative minds and epistemic elocutionists, but it will be the place where ideas not only thrive but become the greatest revelations of the century.</p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
                <img src={require('../../../assets/deliver.svg')} alt="tshirts" className='fb-img' />
            </div>
        </div>
    </div>
</div>)

export default about;