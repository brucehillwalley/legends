import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { data } from "../helpers/data.js";
import PlayerCard from "./PlayerCard.jsx";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((player) => {
    player.name.toLowerCase().includes(search.toLowerCase().trim());
  });

  return (
    <>
      <Form.Control
        placeholder="Search a player"
        className="w-50 m-auto"
        onChange={handleChange}
        type="search"
      />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.toLowerCase().trim())
            )
            .map((player, i) => (
              <Col xl={3} lg={4} md={6} key={i}>
                <PlayerCard {...player} />
              </Col>
            ))}
        </Row>
        <p>container</p>
      </Container>
    </>
  );
};

export default CardContainer;
