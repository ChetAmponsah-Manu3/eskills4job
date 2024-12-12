import React from 'react';
import './OverviewPage.css' ;

const Overview = () => {
    return (
        <div className="overview-container">
            <header className="overview-header">
                <h1>About Our School</h1>
            </header>
            <section className="overview-content">
                <p>
                    Welcome to our prestigious educational institution, where we strive to nurture
                    academic excellence and holistic development. Established in 1990, our school
                    has a proud tradition of fostering a love for learning, creativity, and innovation
                    among our students.
                </p>
                <p>
                    Our dedicated team of over 120 teachers works tirelessly to provide quality
                    education to a vibrant student body of over 1,200 learners. We offer a diverse
                    curriculum that includes 15 subjects, ensuring that every student finds their
                    passion and excels in it.
                </p>
                <p>
                    With state-of-the-art facilities, including modern classrooms, science and
                    computer labs our school is equipped to meet the
                    evolving needs of education in the 21st century.
                </p>
                
                <p>
                The school operates on a three trimesters where the third trimester is the promotion term.
              The school has a policy of a fostering holistic education hence students are given the opportunity
                to engage in other extra-curricular activities made available.
              </p>
              <p>
                    We invite you to explore our school and discover the unique opportunities we offer.
                </p>
            </section>
        </div>
    );
};

export default Overview;
