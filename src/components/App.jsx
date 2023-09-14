import React, { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistic } from './Statistic';
import { SectionTitle } from './SectionTitle/SectionTitle';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const buttonClick = e => {
    const nameE = e.target.name;
    setState(prevState => ({ ...prevState, [nameE]: prevState[nameE] + 1 }));
  };

  const total = () => {
    return Object.values(state).reduce((a, b) => a + b, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return parseInt((state.good / total()) * 100);
  };

  return (
    <div style={{ height: '100vh', fontSize: 40, color: '#010101' }}>
      {' '}
      <SectionTitle
        title="Please leave your feedback"
        child={
          <Feedback options={Object.keys(state)} onButtonClick={buttonClick} />
        }
      />
      <SectionTitle
        title="Statistic"
        child={
          <Statistic
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            options={Object.values(state)}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        }
      />
    </div>
  );
};
