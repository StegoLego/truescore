import React from 'react';

const Results = (props) => {
  console.log('RESULTS PROPS: ', props);
  const overlay = {
    color: 'black',
    zIndex: 2,
    underlayColor: 'transparent'
  }
  return (
    <h3 id="results" style={overlay}>
        {Math.floor(props.average) + '% Win Rate'}
    </h3>
  );
};

export default Results;