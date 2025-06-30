import React from 'react';

const stories =
[
  {
    "title": "Career Guidance Program",
    "description": "PCWT Trust, in collaboration with the Masjid-e-Al-Quba leadership, launched a career guidance program to help students from SSLC and 9th grade make informed career choices. Over 20 students attended, with 20+ receiving one-on-one mentorship. 85% reported improved clarity on their post-SSLC goals.",
    "link": "https://pcwt.org/career-guidance-program"
  },
  {
    "title": "Handwriting & Memory Skills Workshop",
    "description": "Held at Eidgah-e-Jadeed, this workshop drew over 1,000 attendees, including students, teachers, and parents. It focused on improving handwriting, memory retention, and concentration. More than 200 students showed measurable improvement, and educators began replicating the techniques in classrooms.",
    "link": "https://pcwt.org/handwriting-memory-workshop"
  },
  {
    "title": "Voter ID & Aadhaar Registration Camp",
    "description": "On March 16–17, PCWT hosted a registration camp helping 50–70 residents register or update their Aadhaar and Voter ID cards. The drive enabled 40+ first-time voters and provided much-needed assistance to senior citizens and daily-wage earners.",
    "link": "https://pcwt.org/voter-aadhaar-camp"
  },
  {
    "title": "Essay Writing Competition – Seerah-e-Nabi",
    "description": "Held at Loretta English School, this tri-lingual essay competition engaged 50+ students in exploring the life of Prophet Muhammad ﷺ. The top 10 students were awarded, and participants showed growth in writing, thinking, and expression skills.",
    "link": "https://pcwt.org/seerah-nabi-essay-competition"
  },
  {
    "title": "Crash Course for 8th, 9th & 10th Students",
    "description": "PCWT's academic crash course supported 50+ students in Math, Science, and Kannada. 80% passed their exams successfully. Through mock tests, structured notes, and expert doubt-clearing sessions, students gained confidence and exam readiness.",
    "link": "https://pcwt.org/crash-course-board-prep"
  }
]

const SuccessStories = () => {
  return (
    <div className="container py-5 text-center" >
      <h2 className="text-success fw-bold mb-2">Success Stories</h2>
      <div className="section-underline" style={{ width: '200px'}}></div>
      <div className="row g-4">
        {stories.map((story, index) => (
          <div className="col-md-6 col-lg-4" key={index} data-aos= {`${index % 2?'fade-zoom-in':'fade-zoom-out'}`} data-aos-duration="3000">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-success">{story.title}</h5>
                <p className="card-text flex-grow-1">{story.description}</p>
                {/* <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success mt-auto"
                >
                  Read more  
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
