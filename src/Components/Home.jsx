import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Img1 from "../Images/nature.jpg";
import Button from "react-bootstrap/esm/Button";
import Card1 from "./Cards";
import Footer from "./Footer";
import "./Home.css";
function Home() {
  // // State to manage form inputs
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [contactNumber, setContactNumber] = useState("");

  // // State to manage table data
  // const [tableData, setTableData] = useState([]);

  // // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Add new entry to the tableData state
  //   setTableData([...tableData, { firstName, lastName, contactNumber }]);

  //   // Clear form fields after submission
  //   setFirstName("");
  //   setLastName("");
  //   setContactNumber("");
  // };

  return (
    // <img src={Img1} height={200} width={200} alt="" />

    // Card
    <div>
      <Card1 />
      <div>
        {" "}
        <div>
          <h4 className="cities">Popular Cities in France</h4>
          <div
            className="cities"
            style={{ float: "right", marginRight: "70px" }}
          >
            <Button
              style={{ borderRadius: "50px", borderColor: "black" }}
              variant="light"
            >
              See All
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "3%",
          }}
        >
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Paris</Card.Title>
              <Card.Text>Iil-de-france , France </Card.Text>
              <Card.Text className="paraText">
                It is the most populous of the eighteen regions of France, with
                an official estimated population of 12,271,794 residents on 1
                January 2023.Centred on the capital Paris, it is located in the
                north-central part of the country and often called the Paris
                Region
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Paris</Card.Title>
              <Card.Text>Iil-de-france , France </Card.Text>
              <Card.Text className="paraText">
                It is the most populous of the eighteen regions of France, with
                an official estimated population of 12,271,794 residents on 1
                January 2023.Centred on the capital Paris, it is located in the
                north-central part of the country and often called the Paris
                Region
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Nice</Card.Title>
              <Card.Text>Provence-Alpes-Cote d'Azur, France</Card.Text>
              <Card.Text className="paraText">
                Provence-Alps-Azure Coast'; or 'Provence, Alps, French Riviera',
                commonly shortened to PACA, also known as Région Sud 'Southern
                Region', is one of the eighteen administrative regions of
                France, located at the far southeastern point of the mainland.
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Bordeaux</Card.Title>
              <Card.Text>Nouvelle-Aquitaine, France</Card.Text>
              <Card.Text className="paraText">
                It is the largest administrative region in France by area,
                spanning the west and southwest of Metropolitan France. The
                region was created in 2014 by the merging of Aquitaine,
                Limousin, and Poitou-Charentes in a territorial reform.
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <hr />
      <div>
        {" "}
        <div>
          <h4 className="cities">Popular Food in France</h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "3%",
          }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Boeuf Bourguignon</Card.Title>
              {/* <Card.Text>Iil-de-france , France </Card.Text> */}
              <Card.Text>
                Named boeuf Bourguignon after the famed red wine from the
                Burgundy region of France, this dish combines a nice, fatty cut
                of beef with a dry pinot noir and plenty of fresh vegetables to
                create a hearty and indulgent stew.{" "}
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Bouillabaisse</Card.Title>
              {/* <Card.Text>Provence-Alpes-Cote d'Azur, France</Card.Text> */}
              <Card.Text>
                With a long name and an even longer list of ingredients,
                bouillabaisse is Marseille’s gift to France’s culinary canon.
                The soup, once a poor man’s dish and now a mainstay on many a
                Michelin-starred menu, elevates the catch of the day beyond your
                standard soupe de poisson.
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Tarte Tatin</Card.Title>
              {/* <Card.Text>Nouvelle-Aquitaine, France</Card.Text> */}
              <Card.Text>
                This list of classic French dishes would be incomplete without
                the inclusion of something from the country’s extensive
                repertoire of patisserie. Though not as refined or architectural
                as some treats seen in the windows of French sweet shops, the
                buttery, simmering tarte Tatin
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>

    // <div className="d-flex">
    //   {/* Form */}
    //   <Form className="w-50" onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formBasicFirstName">
    //       <Form.Label>First Name</Form.Label>
    //       <Form.Control
    //         type="text"
    //         placeholder="Enter your first name"
    //         value={firstName}
    //         onChange={(e) => setFirstName(e.target.value)} // Update firstName state
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicLastName">
    //       <Form.Label>Last Name</Form.Label>
    //       <Form.Control
    //         type="text"
    //         placeholder="Enter your last name"
    //         value={lastName}
    //         onChange={(e) => setLastName(e.target.value)} // Update lastName state
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Contact Number</Form.Label>
    //       <Form.Control
    //         type="number"
    //         placeholder="Enter your contact number"
    //         value={contactNumber}
    //         onChange={(e) => setContactNumber(e.target.value)} // Update contactNumber state
    //       />
    //     </Form.Group>

    //     <Button variant="primary" type="submit">
    //       Submit
    //     </Button>
    //   </Form>

    //   {/* Table */}
    //   <Table striped bordered hover className="w-50">
    //     <thead>
    //       <tr>
    //         <th>#</th>
    //         <th>First Name</th>
    //         <th>Last Name</th>
    //         <th>Contact Number</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {tableData.map((row, index) => (
    //         <tr key={index}>
    //           <td>{index + 1}</td>
    //           <td>{row.firstName}</td>
    //           <td>{row.lastName}</td>
    //           <td>{row.contactNumber}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </Table>
    // </div>
  );
}

export default Home;
