import "./App.css";
import bomLogo from "./assets/bom-logo.jpeg";

function Service({ icon, title }) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>
        Professional healthcare delivered with care and excellence.
      </p>
    </article>
  );
}

function App() {
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="container nav-container">

          <div className="brand">
            <img
  src={bomLogo}
  alt="B.O.M Specialist Hospital Logo"
  className="hospital-logo"
/>
            <div>
              <h1>B.O.M SPECIALIST HOSPITAL</h1>
              <span>CARE. COMPASSION. EXCELLENCE.</span>
            </div>
          </div>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#contact">Contact</a>

            <a href="#appointment" className="appointment-btn">
              Book Appointment
            </a>
          </nav>

        </div>
      </header>


      {/* HERO */}
      <main>

        <section className="hero" id="home">
          <div className="container hero-content">

            <div className="hero-text">

              <p className="eyebrow">
                24/7 EXPERT HEALTHCARE
              </p>

              <h2>
                Quality healthcare
                <span> you can trust.</span>
              </h2>

              <p className="hero-description">
                At B.O.M Specialist Hospital, we provide compassionate,
                professional and accessible healthcare services for individuals
                and families in Ibadan.
              </p>

              <div className="hero-buttons">

                <a href="#appointment" className="primary-btn">
                  Book an Appointment
                </a>

                <a href="#services" className="secondary-btn">
                  Explore Our Services
                </a>

              </div>

              <div className="hero-features">

                <div>
                  <strong>24/7</strong>
                  <span>Emergency Care</span>
                </div>

                <div>
                  <strong>Expert</strong>
                  <span>Medical Team</span>
                </div>

                <div>
                  <strong>Modern</strong>
                  <span>Facilities</span>
                </div>

              </div>

            </div>


            <div className="hero-card">

              <div className="medical-icon">
                ✚
              </div>

              <h3>Your health matters.</h3>

              <p>
                Professional medical care delivered with compassion,
                excellence and respect.
              </p>

              <a href="#appointment">
                Schedule a visit →
              </a>

            </div>

          </div>
        </section>


        {/* ABOUT */}
        <section className="about section" id="about">

          <div className="container about-grid">

            <div>

              <p className="section-label">
                ABOUT B.O.M
              </p>

              <h2>
                Healthcare built around you.
              </h2>

            </div>


            <div>

              <p>
                B.O.M Specialist Hospital is committed to providing quality
                healthcare in a safe, professional and compassionate
                environment.
              </p>

              <p>
                From emergency care and laboratory services to specialist
                medical services and surgery, our goal is to put patients and
                their wellbeing first.
              </p>

            </div>

          </div>

        </section>


        {/* SERVICES */}
        <section className="services section" id="services">

          <div className="container">

            <div className="section-heading">

              <p className="section-label">
                OUR SERVICES
              </p>

              <h2>
                Comprehensive healthcare services
              </h2>

              <p>
                Professional healthcare services designed to meet the needs of
                individuals and families.
              </p>

            </div>


            <div className="services-grid">

              <Service
                icon="🚑"
                title="Medical Emergency Services"
              />

              <Service
                icon="👩‍⚕️"
                title="Obstetrics & Gynaecology"
              />

              <Service
                icon="💉"
                title="Immunization"
              />

              <Service
                icon="👨‍👩‍👧"
                title="Family Planning"
              />

              <Service
                icon="🧒"
                title="Paediatric Services"
              />

              <Service
                icon="👂"
                title="Ear, Nose & Throat (ENT)"
              />

              <Service
                icon="🔬"
                title="Laboratory Services"
              />

              <Service
                icon="🏥"
                title="General Surgery"
              />

            </div>

          </div>

        </section>

        {/* DOCTORS */}
<section className="doctors section" id="doctors">

  <div className="container">

    <div className="section-heading">

      <p className="section-label">
        OUR MEDICAL TEAM
      </p>

      <h2>
        Experienced care, close to you.
      </h2>

      <p>
        Our dedicated medical professionals are committed to providing
        safe, compassionate and quality healthcare.
      </p>

    </div>

    <div className="doctors-grid">

      <article className="doctor-card">
        <div className="doctor-photo">
          DR
        </div>

        <h3>Medical Director</h3>

        <p>
          Medical Director
        </p>
      </article>

      <article className="doctor-card">
        <div className="doctor-photo">
          MD
        </div>

        <h3>Medical Officer</h3>

        <p>
          Medical Officer
        </p>
      </article>

      <article className="doctor-card">
        <div className="doctor-photo">
          NS
        </div>

        <h3>Nursing Team</h3>

        <p>
          Professional Nursing Care
        </p>
      </article>

    </div>

  </div>

</section>

        {/* WHY CHOOSE US */}
        <section className="why-us section">

          <div className="container">

            <div className="section-heading">

              <p className="section-label">
                WHY B.O.M?
              </p>

              <h2>
                Care you can count on.
              </h2>

            </div>


            <div className="why-grid">

              <div>

                <span>01</span>

                <h3>
                  Quality Care
                </h3>

                <p>
                  Patient-focused healthcare delivered with professionalism
                  and attention to detail.
                </p>

              </div>


              <div>

                <span>02</span>

                <h3>
                  Expert Medical Team
                </h3>

                <p>
                  A dedicated team committed to delivering safe and effective
                  healthcare.
                </p>

              </div>


              <div>

                <span>03</span>

                <h3>
                  Modern Facilities
                </h3>

                <p>
                  Healthcare supported by modern medical facilities and
                  equipment.
                </p>

              </div>


              <div>

                <span>04</span>

                <h3>
                  24/7 Availability
                </h3>

                <p>
                  Access to emergency healthcare services around the clock.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* APPOINTMENT */}
<section
  className="appointment section"
  id="appointment"
>
  <div className="container">

    <div className="section-heading">
      <p className="section-label">
        NEED MEDICAL CARE?
      </p>

      <h2>
        Book an appointment with us.
      </h2>

      <p>
        Fill in your details and our team will contact you to confirm
        your appointment.
      </p>
    </div>

    <form 
    className="appointment-form"
     onSubmit={async (e) => {
  e.preventDefault();

  const form = e.target;

  const appointmentData = {
    name: form.name.value,
    phone: form.phone.value,
    service: form.service.value,
    preferred_date: form.date.value,
    message: form.message.value,
  };

  try {
    const response = await fetch("https://bom-specialist-hospital.onrender.com/api/appointments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    if (response.ok) {
      alert("Your appointment request has been received. Our team will contact you shortly.");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Connection error: " + error.message);
  }
}}
    >

      <div className="form-row">

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name" required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number" required pattern="[+]?[0-9\s()-]{7,20}"
          />
        </div>

      </div>

      <div className="form-row">

        <div className="form-group">
          <label htmlFor="service">Select Service</label>

          <select id="service" required>
            <option value="">Choose a service</option>
            <option>Medical Emergency Services</option>
            <option>Obstetrics & Gynaecology</option>
            <option>Immunization</option>
            <option>Family Planning</option>
            <option>Paediatric Services</option>
            <option>Ear, Nose & Throat (ENT)</option>
            <option>Laboratory Services</option>
            <option>General Surgery</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>

          <input
            type="date"
            id="date" required min={new Date().toISOString().split("T")[0]}
          />
        </div>

      </div>

      <div className="form-group">
        <label htmlFor="message">Additional Message</label>

        <textarea
          id="message"
          rows="5"
          placeholder="Tell us anything we should know..." required
        ></textarea>
      </div>

      <button
        type="submit"
        className="primary-btn"
      >
        Request Appointment
      </button>

    </form>

  </div>
</section>
        
        {/* CONTACT */}
<section className="contact section" id="contact">
  <div className="container contact-grid">

    <div>
      <p className="section-label">
        CONTACT US
      </p>

      <h2>
        We're here for you.
      </h2>

      <p>
        Visit B.O.M Specialist Hospital or contact our team for more
        information about our services.
      </p>
    </div>

    <div className="contact-details">

      <div>
        <strong>
          📍 Address
        </strong>

        <p>
          No. 2 Akinlolu Street,
          <br />
          Behind Damini Plaza,
          <br />
          Abiola Way, off Ring Road,
          <br />
          Ibadan, Oyo State.
        </p>
      </div>

      <div>
        <strong>
          📞 Medical Director
        </strong>

        <p>
          <a href="tel:+2347037377343">
            0703 737 7343
          </a>
        </p>
      </div>

      <div>
        <strong>
          🏢 Admin Office
        </strong>

        <p>
          <a href="tel:+2348039273661">
            0803 927 3661
          </a>
        </p>
      </div>

      <div>
        <strong>
          💬 WhatsApp
        </strong>

        <p>
          <a
            href="https://wa.me/2349155697556"
            target="_blank"
            rel="noreferrer"
          >
            +234 915 569 7556
          </a>
        </p>
      </div>

      <div>
        <strong>
          ✉️ Email
        </strong>

        <p>
          <a href="mailto:riyadsolihn@gmail.com">
            riyadsolihn@gmail.com
          </a>
        </p>
      </div>

      <div>
        <strong>
          🕐 Availability
        </strong>

        <p>
          24 Hours — Expert Healthcare
        </p>
      </div>

    </div>

  </div>
</section>

      </main>

<a
  href="https://wa.me/2349155697556"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
  aria-label="Chat with B.O.M Specialist Hospital on WhatsApp"
>
  <svg
  viewBox="0 0 32 32"
  width="28"
  height="28"
  fill="white"
>
  <path d="M19.11 17.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
</svg>
</a>

{/* FOOTER */}
<footer className="footer">

  <div className="container footer-content">

    <div>
      <strong>
        B.O.M SPECIALIST HOSPITAL
      </strong>

      <p>
        Care. Compassion. Excellence.
      </p>
    </div>

    <a
      href="https://x.com/BOMspecialist1"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label="B.O.M Specialist Hospital on X"
    >
      𝕏
    </a>

    <p>
      © {new Date().getFullYear()} B.O.M Specialist Hospital.
    </p>

  </div>

</footer>

    </div>
  );
}

export default App;