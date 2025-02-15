import React from "react";
import Analytics from "../components/Analytics";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the world best it company</p>
              <h1>Welcome to roshan company</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui a
                consectetur impedit natus dolore enim rerum eligendi voluptas
                rem, earum perferendis facere dolorum unde. Eos, reprehenderit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                eveniet corrupti ipsam, amet veniam ab consectetur? Eaque fugiat
                velit exercitationem hic reprehenderit?
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
     <Analytics/>

      {/* 3rd section */}
      <section className="section-hero">
          <div className="container grid grid-two-cols">
              {/* hero images */}
              <div className="hero-image">
              <img
                src="/images/design.png"
                alt="coding together"
                width={400}
                height={500}
              />
            </div>
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get started today</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui a
                consectetur impedit natus dolore enim rerum eligendi voluptas
                rem, earum perferendis facere dolorum unde. Eos, reprehenderit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                eveniet corrupti ipsam, amet veniam ab consectetur? Eaque fugiat
                velit exercitationem hic reprehenderit?
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Home;
