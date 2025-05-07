import React from 'react';

const stories = [
  {
    title: 'Empowering First-Time Voters',
    description:
      'We organinsed Electoral campaign for voter registration drives and awareness campaigns, enabling over 150 students and villagers to register and understand the importance of voting.',
    source: '',
    link: '#',
  },
  {
    title: 'Guiding Students to Scholarships',
    description:
      'The Foundation for Excellence has awarded over 81,590 scholarships to academically gifted students from low-income families across India, helping them pursue higher education in engineering, medicine, and law.',
    source: 'Foundation For Excellence',
    link: 'https://en.wikipedia.org/wiki/Foundation_For_Excellence',
  },
  {
    title: 'Free Coaching for Underprivileged Students',
    description:
      'Mommel Raju’s initiative in Kadapa district has provided free coaching to over 3,000 underprivileged students, helping them secure admissions into prestigious educational institutions through entrance exams.',
    source: 'The New Indian Express',
    link: 'https://www.newindianexpress.com/good-news/2024/Apr/28/kadapa-mans-free-coaching-centre-helps-underprivileged-realise-goals',
  },
  {
    title: 'Career Counseling for Rural Students',
    description:
      'India Literacy Project’s career counseling sessions and scholarships have enabled students like Chandana to pursue engineering, with Chandana securing a seat in IIT Madras.',
    source: 'India Literacy Project',
    link: 'https://www.ilpnet.org/success-stories-that-inspire/',
  },
  {
    title: 'Digital Education in Remote Areas',
    description:
      'JAAGO Foundation’s Digital School project uses video conferencing to provide quality education to students in remote parts of Bangladesh, ensuring continuity in learning even during the COVID-19 pandemic.',
    source: 'JAAGO Foundation',
    link: 'https://en.wikipedia.org/wiki/JAAGO_Foundation',
  },
  {
    title: 'Free Coaching for Tribal Students',
    description:
      'The Government of Jharkhand offers free coaching for competitive exams to tribal students, aiming to create equal opportunities for success in public service roles.',
    source: 'EdexLive',
    link: 'https://www.edexlive.com/news/2024/Sep/27/free-education-is-a-true-blessing-student-benefitting-from-jharkhands-free-coaching-initiative',
  },
];

const SuccessStories = () => {
  return (
    <div className="container py-5 text-center" >
      <h2 className="text-success fw-bold mb-2">Success Stories</h2>
      <div className="section-underline" style={{ width: '200px'}}></div>
      <div className="row g-4">
        {stories.map((story, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-success">{story.title}</h5>
                <p className="card-text flex-grow-1">{story.description}</p>
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success mt-auto"
                >
                  Read more  {story.source}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
