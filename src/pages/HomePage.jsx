import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>

      {/* Hero */}
      <section className="bg-dark text-white text-center p-5">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="display-4 fw-bold">Engineering Excellence</h1>
          <p className="lead mt-3">Industrial Solutions with Precision</p>
          <button className="btn btn-warning mt-3">Get Quote</button>
        </motion.div>
      </section>

      {/* Services */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {["Fabrication","EPC","Machining","Maintenance"].map((item,i)=>(
            <motion.div key={i} className="col-md-3 mb-3" whileHover={{scale:1.05}}>
              <div className="card p-4 text-center shadow">
                <h5>{item}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-light text-center p-5">
        <h2>About Us</h2>
        <p>Leading engineering company delivering high-quality industrial services.</p>
      </section>

    </div>
  );
};

export default HomePage;