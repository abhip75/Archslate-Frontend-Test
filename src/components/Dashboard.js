import React from "react";


const Dashboard = () => {

    return(
        <div className="my-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <a className="navbar-brand" href="#"><img src="/images/logo.png" alt="logo"/></a>
                <img src="/images/Archslate.png" alt="Archslate"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ml-auto">
                        <a href="#" className="nav-item nav-link active"><i className="fa-solid fa-star"></i>Candidates</a>
                        <a href="#" className="nav-item nav-link active"><i className="fa-solid fa-globe"></i>Companies</a>
                        <a href="#" className="nav-item nav-link active"><i className="fa-solid fa-briefcase"></i>Jobs</a>
                        <a href="#" className="nav-item nav-link active"><i className="fa-solid fa-envelope"></i>Notification</a>
                        <a href="#" className="nav-item nav-link active"><i className="fa-solid fa-user"></i>User</a>
                    </div>

                </div>

               
            </nav>
        </div>
    )
}

export default Dashboard;