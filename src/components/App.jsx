import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import {  useState  } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const options = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const handleLeaveFeedback = btnType => {
  switch (btnType) {
    case 'good':
      setGood(state => state + 1);
      break;
    case 'neutral':
      setNeutral(state => state + 1);
      break;
    case 'bad':
      setBad(state => state + 1);
      break;
    default:
      return;
  }
};

const total = good + neutral + bad;
const positive = Math.round((good / total) * 100) || 0;

  return (
          <>
            <Section title="Please leave you feedback">
              <FeedbackOptions
                options={options}
                onLeaveFeedback={handleLeaveFeedback}
              />
            </Section>
    
              <Section title="Statistics">
              {total > 0 ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positive={positive}
                />
             
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
             </Section>
          </>
        );
}



