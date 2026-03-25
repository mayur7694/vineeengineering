import React from "react";

const ProjectsPage = () => {
  return (
    <div className="container py-5">
      <h1>Projects</h1>
      <div className="row mt-4">
        {[1,2,3].map(i=>(
          <div key={i} className="col-md-4 mb-3">
            <div className="card shadow">
              <img src={`https://picsum.photos/400/300?${i}`} alt="" />
              <div className="card-body">
                <h5>Project {i}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;