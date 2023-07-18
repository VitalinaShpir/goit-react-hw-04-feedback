import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={css.statisticsList}>
      <li>
        <p className={css.statisticsItem}>Good: {good}</p>
      </li>
      <li>
        <p className={css.statisticsItem}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css.statisticsItem}>Bad: {bad}</p>
      </li>
      <li>
        <p className={css.statisticsItem}>Total: {total}</p>
      </li>
      <li>
        <p className={css.statisticsItem}>Positive feedback: {positive}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
