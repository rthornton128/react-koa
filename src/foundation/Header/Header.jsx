import { Container, Navbar } from "react-bootstrap";

export function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React-Koa Experiment</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}
