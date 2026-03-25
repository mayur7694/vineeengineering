import React from "react";

const ServicesPage = () => {
  const services = ["Fabrication","EPC Projects","Machining","Maintenance"];

  return (
    <div className="container py-5">
      <h1>Services</h1>
      <div className="row mt-4">
        {services.map((s,i)=>(
          <div key={i} className="col-md-3 mb-3">
            <div className="card p-3 shadow text-center">{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;