import styles from "../styles/SortDesc.module.css";

const ShortDesc = () => {
  return (
    <header className={styles.header}>
      <div>
        <p>
          <h1>LEARN...INNOVATE...BUILD... SHARE </h1>
        </p>
        <br />
        <p className={styles.context}>
          OpenToMany is an Open Source driven community which focuses on
          learning from exploring , understand from the current demands and
          build a innovation driven solution.
        </p>
      </div>
    </header>
  );
};

export default ShortDesc;
