import gtmParts from 'react-google-tag-manager';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

class GoogleTagManager extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    additionalEvents: PropTypes.object,
    dataLayerName: PropTypes.string,
    id: PropTypes.string,
    isClient: PropTypes.bool,
    localhost: PropTypes.string,
    previewVariables: PropTypes.bool,
    scheme: PropTypes.string,
  };

  static defaultProps = {
    additionalEvents: {},
    dataLayerName: 'dataLayer',
    id: process.env.ID_GOOGLE_TAG_MANAGER,
    isClient: typeof window !== 'undefined',
    localhost: 'localhost',
    previewVariables: false,
    scheme: 'https:',
  };

  constructor(props) {
    super(props);

    const { additionalEvents, dataLayerName, id, previewVariables, scheme } = this.props;

    if (this.shouldTrack()) {
      const { noScriptAsReact, scriptAsReact } = gtmParts({
        additionalEvents,
        dataLayerName,
        id,
        previewVariables,
        scheme,
      });

      this.state = {
        noScriptAsReact,
        scriptAsReact,
      };
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  shouldTrack = () => {
    const { id, isClient, localhost } = this.props;

    return id && isClient && window.location.hostname !== localhost;
  };

  render() {
    if (!this.shouldTrack()) {
      return null;
    }

    const { noScriptAsReact, scriptAsReact } = this.state;

    return (
      <Fragment>
        <div>{noScriptAsReact()}</div>
        <div>{scriptAsReact()}</div>
      </Fragment>
    );
  }
}

export default GoogleTagManager;
