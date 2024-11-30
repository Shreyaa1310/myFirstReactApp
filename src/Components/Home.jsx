import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Img1 from "../Images/nature.jpg";
import Button from "react-bootstrap/esm/Button";
import Card1 from "./Cards";
import Footer from "./Footer";
import paris from "../Images/paris.jpg";
import nice from "../Images/nice.jpg";
import Provence from "../Images/Provence.jpg";
import "./Home.css";
import croissant from "../Images/Croissant.jpg";
import macarons from "../Images/Macarons.jpg";
import frenchBaguette from "../Images/FrenchBaguette.jpg";
import { useNavigate } from "react-router-dom";
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


   const navigate = useNavigate();
   const redirectToFood = () => {
     navigate("/Food");
   };
   const redirectToTravel = () => {
     navigate("/Tourism");
   };

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
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={paris} />
            <Card.Body>
              <Card.Title>Paris</Card.Title>
              {/* <Card.Text>France </Card.Text> */}
              <Card.Text className="paraText">
                The capital city of France, known for its iconic landmarks like
                the Eiffel Tower, Notre Dame Cathedral, and the Louvre Museum.
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
                onClick={redirectToTravel}
              >
                Details
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={nice} />
            <Card.Body>
              <Card.Title>Nice</Card.Title>
              {/* <Card.Text>Iil-de-france , France </Card.Text> */}
              <Card.Text className="paraText">
                Located on the French Riviera, Nice offers beautiful beaches, a
                charming old town, and the famous Promenade des Anglais.
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
                onClick={redirectToTravel}
              >
                Details
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={Provence} />
            <Card.Body>
              <Card.Title>Provence</Card.Title>
              {/* <Card.Text>Provence-Alpes-Cote d'Azur, France</Card.Text> */}
              <Card.Text className="paraText">
                A region in southeastern France known for its stunning lavender
                fields, rolling vineyards, and picturesque villages.
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
                onClick={redirectToTravel}
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
            <Card.Img variant="top" src={croissant} />
            <Card.Body>
              <Card.Title>Croissant</Card.Title>
              {/* <Card.Text>Iil-de-france , France </Card.Text> */}
              <Card.Text>
                A croissant is a laminated, yeast-leavened bakery product that
                contains dough/roll-in fat layers{" "}
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
                onClick={redirectToFood}
              >
                Details
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={macarons} />
            <Card.Body>
              <Card.Title>Macarons</Card.Title>
              {/* <Card.Text>Provence-Alpes-Cote d'Azur, France</Card.Text> */}
              <Card.Text>
                Macarons are sweet meringue-based confections made with egg
                whites, sugar, and almond flour, filled with ganache,
                buttercream, or jam.
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
                onClick={redirectToFood}
              >
                Details
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={frenchBaguette} />
            <Card.Body>
              <Card.Title>French Baguette</Card.Title>
              {/* <Card.Text>Nouvelle-Aquitaine, France</Card.Text> */}
              <Card.Text>
                An iconic French bread, crispy on the outside and soft on the
                inside, perfect for pairing with cheese or jam.
              </Card.Text>
              <Button
                style={{ background: "#333", borderColor: "#333" }}
                variant="primary"
                onClick={redirectToFood}
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
