import React from "react";

const Content = () => {

    return(
        <div className="container mt-3">

            <div className="back">
                <a href="#"><p><i className="fa-solid fa-arrow-left-long"></i> Back to jobs</p></a>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body arch-image shadow-sm">
                            <img src="/images/image 1.png" alt="image 1"/>
                            <div className="text-side">
                                <h1 className="side-heading"><strong>Architectural Designer</strong></h1>
                                <p className="side-sub-heading"><strong>Black Mountain Architecture</strong></p>
                                <p className="thicker">Posted 07/27/2022</p>
                            </div>

                            <div className="text-right float-right">
                                <i className="fa fa-share-nodes"></i>
                                <i className="fa-regular fa-bookmark m-2"></i>
                                <h2 className="text-status"><strong>Status: Accepting Applications</strong></h2>
                                <button className="button-apply"><strong>Apply on Archslate</strong></button>
                            </div>

                            <div className="buttons">
                                <button className="black"><strong>Architecture</strong></button>
                                <button className="teal-green m-1"><strong>Freelance</strong></button>
                                <button className="sky-blue m-1"><strong>Long-Term</strong></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body shadow-sm">
                            <div className="float-left title-text">
                                <i className="fa-solid fa-bolt"></i>
                                <h4><strong>Software Skills</strong></h4>
                            </div>
                            <div className="mt-4">
                                <button className="rhino"><i className="fa-solid fa-bolt"></i> <strong>Rhino</strong></button>
                                <button className="rhino"><strong>Sketchup</strong></button>
                                <button className="vector"><strong>Vectorworks</strong></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-experience">
                        <div className="card-body shadow-sm">
                            <div className="float-left title-experience">
                                <i className="fa-solid fa-star"></i>
                                <h4><strong>Experience</strong></h4>
                            </div>

                            <div className="mt-4">
                                <p className="text-experience">Associate <br/>3+ Years</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-currency">
                        <div className="card-body shadow-sm">
                             <div className="float-left title-currency">
                                <i className="fa-solid fa-star"></i>
                                <h4><strong>Rate</strong></h4>
                            </div>

                            <div className="mt-4">
                                <p className="text-currency">$55-$65/hour</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-location">
                        <div className="card-body shadow-sm">
                            <div className="float-left title-location">
                                <i className="fa-solid fa-location-dot"></i>
                                <h4><strong>Location</strong></h4>
                            </div>

                            <div className="mt-4">
                                <p className="text-location">Bozeman, MT<br/>USA</p>
                            </div>
                            <button className="pink"><strong>On-Site</strong></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body shadow-sm">
                            <h5 className="text-heading"><strong>About this role :-</strong></h5>

                            <p className="description-text">Short overview about job and the way that the candidate would fit into the company.<br/>
                            Can also include  extra instructions for the application process if exist.
                            </p>

                            <h5 className="text-heading"><strong>Responsibilities :-</strong></h5>
                            <div className="list">
                                <ul className="responsibilities-list">
                                    <li> Specific day to day tasks.</li>
                                    <li> Deliverables.</li>
                                    <li> Work environment requirements.</li>
                                    <li> Role within the current team.</li>
                                    <li> etc.</li>
                                </ul>
                            </div>

                            <h5 className="text-heading"><strong>Skills :-</strong></h5>
                            <div className="list">
                                <ul className="responsibilities-list">
                                    <li> Software skills.</li>
                                    <li> Technical skills.</li>
                                    <li> Soft skills.</li>
                                    <li> Other.</li>
                                </ul>
                            </div>

                            <h5 className="text-heading"><strong>Qualifications :-</strong></h5>
                            <p className="sub-heading"> Required</p>
                            <div className="list">
                                <ul className="responsibilities-list">
                                    <li> Education.</li>
                                    <li> Licenses and certifications.</li>
                                    <li> Experience needed.</li>
                                </ul>
                            </div>

                            <p className="sub-heading"> Bonus</p>
                            <div className="list">
                                <ul className="responsibilities-list">
                                    <li> Education.</li>
                                    <li> Licenses and certifications.</li>
                                    <li> Experience needed.</li>
                                </ul>
                            </div>

                            <h5 className="text-heading"><strong>Rate :-</strong></h5>
                            <div className="list">
                                <ul className="responsibilities-list">
                                    <li> If available.</li>
                                </ul>
                            </div>

                            <h5 className="text-heading"><strong>Time Estimate :-</strong></h5>
                            <div className="list">
                                <ul className="responsibilities-list">
                                    <li> If applicable.</li>
                                </ul>
                            </div>

                            <h5 className="text-heading"><strong>Work Authorization :-</strong></h5>
                            <div className="list">
                                <ul className="responsibilities-list">
                                    <li> Tbd.</li>
                                </ul>
                            </div>


                            <h5 className="text-heading"><strong>About Company  :-</strong></h5>

                            <p className="description-text">Description of company  with any uniform info or disclaimers - equal hiring<br/>
                            opportunity, etc.
                            </p>

                            <div className="option-buttons">
                                <button className="apply"><strong>Apply on Archslate</strong></button>
                                <button className="save"><strong><i className="fa-regular fa-star"></i> Save</strong></button>
                                <button className="share"><strong><i className="fa-solid fa-share-nodes"></i> Share & Refer</strong></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card card-poster">
                        <h5 className="posted"><strong>Job Poster</strong></h5>
                        <div className="card-body shadow-sm">
                        <img src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" className="avatar" alt="Avatar"/>
                            <div className="avatar-name">
                                <p>John Carlos</p>
                                <h6><strong>Project Manager</strong></h6>
                                <button className="message"> <i className="fa-regular fa-envelope"></i> Message</button>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;