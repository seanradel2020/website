import React from 'react';
import wines from './wines.json';
import styles from './styles.module.css';

export default function WineList() {
  return <ul className={styles.list} aria-label="Wine ratings and reviews">
    {wines.map(wine => <li className={styles.card} key={`${wine.name}-${wine.vintage}`}>
      <div className={styles.header}>
        <h2>{wine.name}</h2>
        <span className={styles.rating} aria-label={`Rated ${wine.rating} out of 5`}>
          <strong>{wine.rating}</strong><span>/ 5</span>
        </span>
      </div>
      <dl className={styles.details}>
        <div><dt>Vintage</dt><dd>{wine.vintage}</dd></div>
        <div><dt>Reviewed</dt><dd>{wine.reviewDate}</dd></div>
        <div className={styles.location}><dt>Location</dt><dd>{wine.location}</dd></div>
      </dl>
      <p className={styles.review}>{wine.review}</p>
    </li>)}
  </ul>;
}
