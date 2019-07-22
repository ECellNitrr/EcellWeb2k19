import React from 'react';
import './caportal.css';

const about=()=> (<div className="about">
    <div className="container-fluid ctn-2">
        <div className="row">
            <div className="col-12">
                <div className="anim"><h2 className="heading-1">ABOUT US</h2></div>
                <h3 className="heading-2">We Promote Startups</h3>
                <p className="text-5"><strong style={{fontWeight:800}}>The Entrepreneurship cell, NIT Raipur</strong> is a non-profit organization that manifests the essence of entrepreneurship in the passionate youngsters who have the zeal to pursue entrepreneurship and advocate this vehement enthusiasm in the generations to come.Keeping this ideology in mind we not only provide the foundation to the entrepreneurial capabilities of the promising young minds but also help in nurturing their skills by providing resources such as new ideas, funding mentoring, other mentorship programs, workshops to help them organize their strategy and frequent, highly interactive speaker sessions and lecture series.<br></br><br></br>At <strong style={{fontWeight:800}}>E-Summit</strong> we aspire to create a mélange of eminent speakers who have proved themselves in diverse fields and are at the zenith of glory.E-Summit’18 will not just be a conclave of innovative minds and epistemic elocutionists, but it will be the place where ideas not only thrive but become the greatest revelations of the century.</p><br></br><br></br>
                <div><h3 className="heading-1 head2"><strong>WHY TO JOIN CA PROGRAM</strong> &nbsp;<i style={{color:"red"}} className="fas fa-question"></i></h3></div>
                <p className="text-5 textc">If you are a passionate individual with ambitious dreams and would like to work with Entrepreneurial minds ,then this could be the right break for you.</p>
            </div>
            
            <div className="col-12 flex-box">
                <div className="ben-cards">
                    <p className="p1"><i  className="fas fa-award"></i></p>
                    <div><p className="p2">Obtain leadership roles on your campus.</p></div>
                </div>

                <div className="ben-cards">
                    <p className="p1"><i className="fas fa-trophy"></i></p>
                    <div><p className="p2">Reflect your position of responsibility & experience in your resume.</p></div>
                </div>

                <div className="ben-cards">
                    <p className="p1"><i className="fas fa-briefcase"></i></p>
                    <div><p className="p2">Work close with the E-cell Team to gain entrepreneurial exposure.</p></div>
                </div>

                <div className="ben-cards">
                    <p className="p1"><i className="fas fa-user-tie"></i></p>
                    <div><p className="p2">Improve your communication and management skills by being part of E-Summit'19.</p></div>
                </div>
            </div>

            {/* <div className="steps container-fluid" style={{marginTop:"50px",textAlign:"center",maxWidth:"1000px"}}>
                <h2 className="heading-1">STEPS TO USE CA PORTAL-</h2>
                <p className="text-5 txt5">
                    <div className="steps"><strong className="num" style={{fontWeight:"800"}}>1</strong>&nbsp; Goto <a href="https://ecell.nitrr.ac.in/">https://ecell.nitrr.ac.in/</a> and login.</div>
                    <div className="steps"><strong className="num" style={{fontWeight:"800"}}>2</strong> Open Menu -> <strong style={{fontWeight:800}}>CAPORTAL</strong></div>
                    <div className="steps"><strong className="num" style={{fontWeight:"800"}}>3</strong> Here you have two options-<br></br>
                    <div style={{marginTop:"20px"}}><strong style={{fontWeight:"800"}}>a.</strong>Submit a request,by selecting the social network given in the form and selecting an image from PC.</div>
                    <div style={{marginTop:"20px"}}><strong style={{fontWeight:"800"}}>b.</strong>Can check status of previous request, whether it is accepted,rejected or pending. The count is available on the dashboard.</div>                                     
                    </div>
                    
                </p>
            </div> */}
            
        </div>
    </div>
</div>)

export default about;