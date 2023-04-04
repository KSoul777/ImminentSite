import React from "react";
import { Row, Container } from "reactstrap";

function ImmFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by KSL
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default ImmFooter;
