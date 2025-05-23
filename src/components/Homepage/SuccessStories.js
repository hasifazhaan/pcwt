import React from 'react';

const stories = [
  {
    title: 'Career Guidance Program',
    description:
      'PCWT Trust, in collaboration with the Masjid-e-Al-Quba leadership, launched a career guidance program aimed at helping students understand the importance of making informed career choices. The program provided insights into various career paths, guiding students on how to identify their passions, strengths, and potential opportunities',
    source: 'JAAGO Foundation',
    link: 'https://en.wikipedia.org/wiki/JAAGO_Foundation',
  },

  {
    title: 'Handwriting and Memory Skills Workshop',
    description:
      'In a powerful workshop held at Eidgah-e-Jadeed, Tannery Road, PCWT Trust, under the guidance of Asif Hazrath and his dedicated team, conducted an educational session on handwriting and memory-building skills. Initially, there were concerns that the turnout might not be high, but the reality exceeded all expectations. Over 2,000+ people',
    source: '',
    link: '#',
  },
  {
    title: 'Voter ID Card and Aadhar Card Updation',
    description:
      'n a bid to engage students and spark creativity, PCWT Trust organized an essay writing competition on the topic of Seerah-e-Nabi (Life of the Prophet), '
      ,source: 'Foundation For Excellence',
    link: 'https://en.wikipedia.org/wiki/Foundation_For_Excellence',
  },
  {
    title: 'Essay Writing Competition – Seerah-e-Nabi (Life of the Prophet)',
    description:
      'Mommel Raju’s initiative in Kadapa district has provided free coaching to over 3,000 underprivileged students, helping them secure admissions into prestigious educational institutions through entrance exams.',
    source: 'The New Indian Express',
    link: 'https://www.newindianexpress.com/good-news/2024/Apr/28/kadapa-mans-free-coaching-centre-helps-underprivileged-realise-goals',
  },
  {
    title: 'Crash Course for 8th, 9th, and 10th Grade Students',
    description:
      'PCWT Trust initiated a crash course for students in grades 8th, 9th, and 10th, with a strong focus on building a solid foundation in Mathematics and Kannada. ',
      source: 'India Literacy Project',
    link: 'https://www.ilpnet.org/success-stories-that-inspire/',
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
                  Read more  
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
