import React from "react";
import { Row } from "react-bootstrap";

export default function footer(props) {
  return (
    <footer>
      <container>
        <Row>
          <div
            className="text-center py-3"
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <b>
              copyright &copy; Developed by{" "}
              <a href="https://m-islam.netlify.app/">Muntasirul islam</a>
            </b>
          </div>
        </Row>
      </container>
    </footer>
  );
}
