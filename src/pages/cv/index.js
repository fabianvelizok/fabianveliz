import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import AnimationFadeInDown from 'Components/atoms/AnimationFadeInDown/AnimationFadeInDown';
import AnimationFadeInLeft from 'Components/atoms/AnimationFadeInLeft/AnimationFadeInLeft';
import AnimationFadeInRight from 'Components/atoms/AnimationFadeInRight/AnimationFadeInRight';
import Avatar from 'Components/atoms/Avatar/Avatar';
import Container from 'Components/atoms/Container/Container';
import MetaTags from 'Components/atoms/MetaTags/MetaTags';
import Particles from 'Components/atoms/Particles/Particles';
import RichText from 'Components/atoms/RichText/RichText';
import SocialLinks from 'Components/atoms/SocialLinks/SocialLinks';

import cv from 'Api/cv';
import './index.scss';

const CV = props => {
  const { className, ...rest } = props;

  const classes = classNames(['cv', className]);

  return (
    <Container fullInMobile>
      <MetaTags title="CV" />

      <div className={classes} {...pickHTMLProps(rest)}>
        <div className="cv__left-column">
          <Particles />

          <div className="cv__left-column-content">
            <Avatar className="cv__avatar" alt={cv.name} src={cv.avatar} />

            <AnimationFadeInDown animateInViewport>
              <h1 className="cv__name">{cv.name}</h1>
            </AnimationFadeInDown>

            <AnimationFadeInDown animateInViewport>
              <h2 className="cv__title">{cv.title}</h2>
            </AnimationFadeInDown>

            <h3 className="cv__section-title">Contact</h3>
            
            <AnimationFadeInLeft animateInViewport>
              <SocialLinks layout="column" links={cv.socialLinks} />
            </AnimationFadeInLeft>

            <h3 className="cv__section-title">Main Skills</h3>
            <AnimationFadeInLeft animateInViewport>
              <ul className="cv__skills">
                {cv.skills.map(skill => (
                  <li className="cv__skills-item" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </AnimationFadeInLeft>

            <h3 className="cv__section-title">Languages</h3>
            <AnimationFadeInLeft animateInViewport>
              <ul className="cv__default-list">
                {cv.languages.map(language => {
                  return (
                    <li className="cv__language-item" key={language.name}>
                      <strong>{language.name}</strong>
                      <span className="cv__separator">-</span>
                      <span>{language.level}</span>
                    </li>
                  );
                })}
              </ul>
            </AnimationFadeInLeft>
          </div>
        </div>
        <div className="cv__right-column">
          <h3 className="cv__section-title cv__section-title--inverted">Profile</h3>
          <AnimationFadeInRight animateInViewport>
            <RichText content={cv.profile} />
          </AnimationFadeInRight>

          <h3 className="cv__section-title cv__section-title--inverted">Work Experience</h3>
          <AnimationFadeInRight animateInViewport>
            <ul className="cv__default-list">
              {cv.workExperience.map(experience => {
                return (
                  <li className="cv__workExperience-item" key={`${experience.from}${experience.to}`}>
                    <div className="cv__workExperience-header">
                      <strong>{experience.title}</strong>
                      <div>
                        <span>{experience.from}</span>
                        <span className="cv__separator">-</span>
                        <span>{experience.to}</span>
                      </div>
                    </div>
                    <RichText content={experience.description} />
                  </li>
                );
              })}
            </ul>
          </AnimationFadeInRight>

          <h3 className="cv__section-title cv__section-title--inverted">Education</h3>
          <AnimationFadeInRight animateInViewport>
            <ul className="cv__default-list">
              {cv.education.map(education => {
                return (
                  <li key={`${education.from}${education.to}`}>
                    <div className="cv__education-item">
                      <strong>{education.title}</strong>
                      <span>
                        {education.from}
                        <span className="cv__separator">-</span>
                        {education.to}
                      </span>
                    </div>
                    <RichText content={education.description} />
                  </li>
                );
              })}
            </ul>
          </AnimationFadeInRight>

          <h3 className="cv__section-title cv__section-title--inverted">Courses</h3>
          <AnimationFadeInRight animateInViewport>
            <ul className="cv__courses">
              {cv.courses.map(course => {
                return (
                  <li className="cv__courses-item" key={course.name}>
                    {course.link ? (
                      <a className="cv__courses-link" href={course.link} rel="noopener noreferrer" target="_blank">
                        {course.name}
                      </a>
                    ) : (
                      <span className="cv__courses-link">{course.name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </AnimationFadeInRight>
        </div>
      </div>
    </Container>
  );
};

CV.propTypes = {
  className: PropTypes.string,
};

CV.defaultProps = {
  className: undefined,
};

export default CV;
