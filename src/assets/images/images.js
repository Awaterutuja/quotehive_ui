import React from 'react';

// Static imports
import quotesHiveLogo from './red-logo-removebg.png';


export const QuotesHiveLogo = ({ width = 100, height = 100, ...props }) => (
  <img src={quotesHiveLogo} alt="QuotesHive Logo" width={width} height={height} {...props} />
);

