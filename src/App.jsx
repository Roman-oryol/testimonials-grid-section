import Container from './components/Container/Container';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';

import './tokens/fonts.scss';
import './App.scss';

const App = () => {
  return (
    <main>
      <h1 className="visuallyHidden">Testimonial section</h1>
      <Container>
        <TestimonialsSection />
      </Container>
    </main>
  );
};

export default App;
