import styles from './Car.module.css';

const Car = ({ car }) => {
  return (
    <div className={styles.card}>
      <h2>{car.name}</h2>
      <p>Quilometragem: {car.km} km</p>
      <p>Cor: {car.color}</p>
    </div>
  );
};

export default Car;
