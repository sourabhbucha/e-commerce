import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <span>
                                Copyright &copy; Sourabh
                            </span>
                        </Col>
                    </Row>
                </Container>
            </footer>   
        </>
    )
}

export default Footer
