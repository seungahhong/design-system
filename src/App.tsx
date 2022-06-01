import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <Carousel
      imageList={[
        'https://www.w3schools.com/howto/img_nature_wide.jpg',
        'https://www.w3schools.com/howto/img_snow_wide.jpg',
        'https://www.w3schools.com/howto/img_mountains_wide.jpg',
      ]}
    />
  );
}

export default App;
