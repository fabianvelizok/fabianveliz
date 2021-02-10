import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import AnimationFadeInDown from 'Components/atoms/AnimationFadeInDown/AnimationFadeInDown';
import AnimationFadeInLeft from 'Components/atoms/AnimationFadeInLeft/AnimationFadeInLeft';
import AnimationFadeInRight from 'Components/atoms/AnimationFadeInRight/AnimationFadeInRight';
import Avatar from 'Components/atoms/Avatar/Avatar';
import Container from 'Components/atoms/Container/Container';
import Header from 'Components/organisms/Header/Header';
import MetaTags from 'Components/atoms/MetaTags/MetaTags';
import Particles from 'Components/atoms/Particles/Particles';
import RichText from 'Components/atoms/RichText/RichText';
import SocialLinks from 'Components/atoms/SocialLinks/SocialLinks';

import './Resume.scss';

const Resume = props => {
  const { className, data, shouldRenderPDF, ...rest } = props;

  const { 
    bio,
    courses,
    education,
    languages,
    skills,
    workExperience
  } = data;

  return (
    <Container className={className} fullInMobile>
      <MetaTags title="Resume" />

      {!shouldRenderPDF && <Header className="resume__header" />}

      <div
        className={classNames("resume", {
          "resume--pdf": shouldRenderPDF
        })}
        {...pickHTMLProps(rest)}
      >
        <div className="resume__left-column">
          <Particles />

          <div className="resume__left-column-content">
            <Avatar className="resume__avatar" alt={bio.name} src={bio.avatar} />

            <AnimationFadeInDown animateInViewport={!shouldRenderPDF}>
              <h1 className="resume__name">{bio.name}</h1>
            </AnimationFadeInDown>

            <AnimationFadeInDown animateInViewport={!shouldRenderPDF}>
              <h2 className="resume__title">{bio.tagline}</h2>
            </AnimationFadeInDown>

            <h3 className="resume__section-title">Contact</h3>

            <AnimationFadeInLeft animateInViewport={!shouldRenderPDF}>
              <SocialLinks layout="column" links={bio.socialLinks} />
            </AnimationFadeInLeft>

            <h3 className="resume__section-title">Main Skills</h3>
            <AnimationFadeInLeft animateInViewport={!shouldRenderPDF}>
              <ul className="resume__skills">
                {skills.map(skill => (
                  <li className="resume__skills-item" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </AnimationFadeInLeft>

            <h3 className="resume__section-title">Languages</h3>
            <AnimationFadeInLeft animateInViewport={!shouldRenderPDF}>
              <ul className="resume__default-list">
                {languages.map(language => {
                  return (
                    <li className="resume__language-item" key={language.name}>
                      <strong>{language.name}</strong>
                      <span className="resume__separator">-</span>
                      <span>{language.level}</span>
                    </li>
                  );
                })}
              </ul>
            </AnimationFadeInLeft>
          </div>
        </div>
        <div className="resume__right-column">
          <h3 className="resume__section-title resume__section-title--inverted">Profile</h3>
          <AnimationFadeInRight animateInViewport={!shouldRenderPDF}>
            <RichText content={bio.short_profile} />
          </AnimationFadeInRight>

          <h3 className="resume__section-title resume__section-title--inverted">Work Experience</h3>
          <AnimationFadeInRight animateInViewport={!shouldRenderPDF}>
            <ul className="resume__default-list">
              {workExperience.map(experience => {
                return (
                  <li className="resume__workExperience-item" key={`${experience.from}${experience.to}`}>
                    <div className="resume__workExperience-header">
                      <strong className="resume__workExperience-left">{experience.title}</strong>
                      <div className="resume__workExperience-right">
                        <span>{experience.from}</span>
                        <span className="resume__separator">-</span>
                        <span>{experience.to}</span>
                      </div>
                    </div>
                    <RichText content={experience.description} />
                  </li>
                );
              })}
            </ul>
          </AnimationFadeInRight>

          <h3 className="resume__section-title resume__section-title--inverted">Education</h3>
          <AnimationFadeInRight animateInViewport={!shouldRenderPDF}>
            <ul className="resume__default-list">
              {education.map(education => {
                return (
                  <li key={`${education.from}${education.to}`}>
                    <div className="resume__education-item">
                      <strong className="resume__education-left">{education.title}</strong>
                      <span className="resume__education-right">
                        {education.from}
                        <span className="resume__separator">-</span>
                        {education.to}
                      </span>
                    </div>
                    <RichText content={education.description} />
                  </li>
                );
              })}
            </ul>
          </AnimationFadeInRight>

          <h3 className="resume__section-title resume__section-title--inverted">Courses</h3>
          <AnimationFadeInRight animateInViewport={!shouldRenderPDF}>
            <ul className="resume__courses">
              {courses.map(course => {
                return (
                  <li className="resume__courses-item" key={course.name}>
                    {course.link ? (
                      <a className="resume__courses-link" href={course.link} rel="noopener noreferrer" target="_blank">
                        {course.name}
                      </a>
                    ) : (
                        <span className="resume__courses-link">{course.name}</span>
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

Resume.propTypes = {
  className: PropTypes.string,
  shouldRenderPDF: PropTypes.bool
};

Resume.defaultProps = {
  className: undefined,
  shouldRenderPDF: false
};

export default Resume;
