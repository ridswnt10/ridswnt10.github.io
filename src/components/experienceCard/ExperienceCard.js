import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({ workExperiences, isDark }) {

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
            dangerouslySetInnerHTML={{ __html: item }}
          >
          </li>
        ))
      : null;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.array.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('in-view');
          entry.target.classList.remove('not-in-view');
        } else {
          entry.target.classList.remove('in-view');
          entry.target.classList.add('not-in-view');
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: [0, 0.1, 1],
    }
  );

  const tags = document.querySelectorAll('timeline-item');
  tags.forEach(tag => {
    observer.observe(tag);
  });

  return (
    <div className="timeline">
      {workExperiences.map((cardInfo, index) => (
        <div key={index} className="timeline-item">
          <span className="timeline-bullet"></span>
          <div className={isDark ? "experience-card-dark" : "experience-card"}>
            <div className="experience-banner">
              <div className="experience-blurred_div"></div>
              <a href={cardInfo.company_url} target="_blank" rel="noreferrer">
                <div
                  className="experience-div-company"
                  style={{
                    backgroundImage: `url(${cardInfo.logo_path})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '75%'}}
                >
                </div>
              </a>
            </div>
            <div className="experience-text-details">
                <div className="experience-text-title">
                  <h4
                    className={
                      isDark
                        ? "experience-text-role dark-mode-text"
                        : "experience-text-role"
                    }
                  >
                    {cardInfo.title}
                  </h4>
                  <div className="experience-right-meta">
                    {(cardInfo.company || cardInfo.location) && (
                      <span
                        className={
                          isDark
                            ? "experience-text-location subTitle dark-mode-text"
                            : "experience-text-location subTitle"
                        }
                      >
                        {/* {cardInfo.company} */}
                        {/* {cardInfo.company && cardInfo.location ? " • " : ""} */}
                        {cardInfo.location}
                      </span>
                    )}
                    <h5
                      className={
                        isDark
                          ? "experience-text-date dark-mode-text"
                          : "experience-text-date"
                      }
                    >
                      {cardInfo.duration}
                    </h5>
                  </div>
              </div>
              <p
                className={
                  isDark
                    ? "subTitle experience-text-desc dark-mode-text"
                    : "subTitle experience-text-desc"
                }
              >
                {cardInfo.desc}
              </p>
              {cardInfo.positions ? (
                <div className="positions-container">
                  {cardInfo.positions.map((position, posIndex) => (
                    <div key={posIndex} className="position-section">
                      <div className="position-header">
                        <h5 className={isDark ? "position-title dark-mode-text" : "position-title"}>
                          {position.title}
                        </h5>
                        <span className={isDark ? "position-duration dark-mode-text" : "position-duration"}>
                          {position.duration}
                        </span>
                      </div>
                      <ul>
                        <GetDescBullets
                          descBullets={position.descPoints}
                          isDark={isDark}
                        />
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul>
                  <GetDescBullets
                    descBullets={cardInfo.descPoints}
                    isDark={isDark}
                  />
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}