import React from "react";
import { Navbar,Container,NavDropdown,Nav,Offcanvas,Form,Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

export const NavBar = () =>{
    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} bg="dark"variant="dark" expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Brand >Numer Project</Navbar.Brand>


                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end">

                  

                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    
                   

                        <NavDropdown
                          title="Interpolation"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}>
                          <NavDropdown.Item href="/Newton">Newton</NavDropdown.Item><NavDropdown.Divider />
                          <NavDropdown.Item href="/Lagrange">Lagrange</NavDropdown.Item><NavDropdown.Divider />
                        </NavDropdown>

                        <NavDropdown
                          title="Root of equation"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}>
                          <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item><NavDropdown.Divider />
                          <NavDropdown.Item href="/Graphical">Graphical</NavDropdown.Item><NavDropdown.Divider />
                          <NavDropdown.Item href="/Onepoint">Onepoint</NavDropdown.Item><NavDropdown.Divider />
                          <NavDropdown.Item href="/Newton_Raphson">Newton_Raphson</NavDropdown.Item><NavDropdown.Divider />
                          <NavDropdown.Item href="/Secant">Secant</NavDropdown.Item><NavDropdown.Divider />
                          <NavDropdown.Item href="/FalsePosition">FalsePosition</NavDropdown.Item><NavDropdown.Divider />
                        </NavDropdown>

                        <NavDropdown
                          title="Solutions Root of equation"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}>
                          <NavDropdown.Item href="/Gauss_Jordan">Gauss_Jordan</NavDropdown.Item><NavDropdown.Divider />
                          <NavDropdown.Item href="/Gauss_elimination">Gauss_elimination</NavDropdown.Item><NavDropdown.Divider />
                        </NavDropdown>

                        


            
                    </Nav>
                    
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
}