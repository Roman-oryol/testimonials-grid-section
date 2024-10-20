import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Testimonial.module.scss';

const Testimonial = ({ name, status, main, details, avatarUrl, index }) => {
  const classModifiers = [
    'testimonialViolet',
    'testimonialGrayishBlue',
    'testimonialWhite',
    'testimonialBlackishBlue',
    'testimonialWhite',
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <article
      data-aos="fade-up"
      className={`${styles.testimonial} ${styles[classModifiers[index]]}`}
    >
      <div className={styles.testimonialAuthor}>
        <img src={avatarUrl} width={28} height={28} alt="Author's photograph" />
        <p className={styles.authorName}>{name}</p>
        <p className={styles.authorStatus}>{status}</p>
      </div>

      <p className={styles.testimonialMain}>{main}</p>

      <p className={styles.testimonialDetails}>" {details} ”</p>
      <p></p>
    </article>
  );
};

export default Testimonial;
