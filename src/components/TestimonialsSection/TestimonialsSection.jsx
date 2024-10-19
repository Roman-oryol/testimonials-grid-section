import Testimonial from '../Testimonial/Testimonial.jsx';
import testimonials from '../../mocks/testimonials.js';

import styles from './TestimonialsSection.module.scss';

const TestimonialsSection = () => {
  return (
    <div className={styles.testimonialsSection}>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={testimonial.id} {...testimonial} index={index} />
      ))}
    </div>
  );
};

export default TestimonialsSection;
