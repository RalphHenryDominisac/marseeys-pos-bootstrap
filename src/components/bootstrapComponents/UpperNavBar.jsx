import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import DateTime from "../DateTime";



export default function UpperNavBar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
      

        <DateTime/>
        <Nav.Item>
          <Nav.Link href="/home">
            <Button variant="warning">Order</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Button variant="warning">Pending</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Button variant="warning">History</Button>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Button variant="primary">Logout</Button>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
