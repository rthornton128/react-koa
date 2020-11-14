const { Container } = require("react-bootstrap");

import styles from "./Footer.scss";

export function Footer() {
  return (
    <footer className={`text-muted ${styles.footer}`}>
      <Container>
        <p>Footer text</p>
      </Container>
    </footer>
  );
}
