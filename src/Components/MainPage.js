import React from "react";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Routes, Route } from "react-router-dom";

export const MainPage = () => {

  return (
    <Row>
      <Col>
        <Routes>
          <Route path="/" exact={<Logins />} />
          <Route path="/create" exact={<CreateLogin />} />
          <Route path="/modify" exact={<ModifyLogin />} />
        </Routes>
      </Col>
    </Row>
  )
}