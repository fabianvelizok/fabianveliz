/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TagManager from 'react-gtm-module';

class GoogleTagManager extends Component {
  static propTypes = {
    auth: PropTypes.string,
    dataLayer: PropTypes.object,
    dataLayerName: PropTypes.string,
    events: PropTypes.object,
    gtmId: PropTypes.string,
    hostname: PropTypes.string,
    isClient: PropTypes.bool,
    preview: PropTypes.string,
  };

  static defaultProps = {
    auth: undefined,
    dataLayer: undefined,
    dataLayerName: 'dataLayer',
    events: undefined,
    gtmId: process.env.ID_GOOGLE_TAG_MANAGER,
    hostname: 'localhost',
    isClient: typeof window !== 'undefined',
    preview: undefined,
  };

  constructor(props) {
    super(props);

    this.initializeTagManager(props);
  }

  shouldComponentUpdate() {
    return false;
  }

  shouldTrack = () => {
    const { gtmId, isClient, hostname } = this.props;
    return gtmId && isClient && window.location.hostname !== hostname;
  };

  initializeTagManager = props => {
    const { auth, dataLayer, dataLayerName, events, gtmId, preview } = props;

    if (this.shouldTrack()) {
      TagManager.initialize({ auth, dataLayer, dataLayerName, events, gtmId, preview });
    }
  };

  render() {
    return null;
  }
}

export default GoogleTagManager;
