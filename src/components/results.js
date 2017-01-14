//not used

import React from 'react';

const Results = (props) => {
  console.log('RESULTS PROPS: ', props);
  const overlay = {
    color: 'black',
    zIndex: 2,
    underlayColor: 'transparent'
  }
  return (
    <h3 className="results" style={overlay}>
        {Math.floor(props.average) + '% Win Rate'}
    </h3>
  );
};

export default Results;
