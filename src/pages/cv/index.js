import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import cv from 'Api/cv';
import './index.scss';

const CV = props => {
  const { className, ...rest } = props;

  const classes = classNames(['cv', className]);

  return (
    <div className={classes} {...pickHTMLProps(rest)}>
      <div>
        <img src={cv.image} alt={cv.name} />
        <h1>{cv.name}</h1>
        <h2>{cv.title}</h2>

        <h3 className="section-title">Contact</h3>
        <ul>
          {cv.socialLinks.map(socialLink => {
            return (
              <li key={socialLink.key}>
                <a href={socialLink.link}>{socialLink.name}</a>
              </li>
            );
          })}
        </ul>

        <h3 className="section-title">Skills</h3>
        <ul>
          {cv.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <h3 className="section-title">Languages</h3>
        <ul>
          {cv.languages.map(language => {
            return (
              <li key={language.name}>
                <strong>{language.name}</strong>-<span>{language.level}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3 className="section-title">Profile</h3>
        <p>{cv.profile}</p>

        <h3 className="section-title">Work Experience</h3>
        <ul>
          {cv.workExperience.map(experience => {
            return (
              <li key={`${experience.from}${experience.to}`}>
                <p>
                  <span>
                    {experience.from}-{experience.to}
                  </span>
                  <strong>{experience.title}</strong>
                </p>
                <p>{experience.description}</p>
              </li>
            );
          })}
        </ul>

        <h3 className="section-title">Education</h3>
        <ul>
          {cv.education.map(education => {
            return (
              <li key={`${education.from}${education.to}`}>
                <p>
                  <span>
                    {education.from}-{education.to}
                  </span>
                  <strong>{education.title}</strong>
                </p>
              </li>
            );
          })}
        </ul>

        <h3 className="section-title">Courses</h3>
        <ul>
          {cv.courses.map(course => {
            return (
              <li key={course.name}>
                {course.link ? <a href={course.link}>{course.name}</a> : <span>{course.name}</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

CV.propTypes = {
  className: PropTypes.string,
};

CV.defaultProps = {
  className: undefined,
};

export default CV;
