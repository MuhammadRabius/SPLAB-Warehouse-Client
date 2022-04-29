import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import itemImg from '../../../images/Category-banner.jpg'


const ProductCategory = () => {
      const [lgShow, setLgShow] = useState(false);
      return (
            <div>
                   <h1 className='text-center font-thin pb-3'>SPLAB Medicine Category</h1>
                   <div className='grid grid-cols-1 lg:grid-cols-3 sm:m-2 lg:m-10 lg:p-4  gap-4'>
                         <div>
                              <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={itemImg} />
                              <Card.Body>
                              <Card.Title>Tablet Section</Card.Title>
                              <Card.Text>
                                    
                              </Card.Text>
                              <Button onClick={() => setLgShow(true)}>See all</Button>
                              <Modal
                              size="lg"
                              show={lgShow}
                              onHide={() => setLgShow(false)}
                              aria-labelledby="example-modal-sizes-title-lg"
                              >
                              <Modal.Header closeButton>
                              <Modal.Title id="example-modal-sizes-title-lg">
                                   Tablet Section
                              </Modal.Title>
                              </Modal.Header>
                              <Modal.Body> <p> SP-NISHAT
                                    <br /> SP-SURANJAN
                                    <br />SP-USHBA
                                    <br />SP-KUNDUR
                                    <br />SP-GARLETAB
                                    <br />SP-PECH </p> 
                                    </Modal.Body>
                              </Modal>
                              </Card.Body>
                             </Card>

                         </div>
                         <div>
                              <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={itemImg} />
                              <Card.Body>
                              <Card.Title>Liquid Section</Card.Title>
                              <Card.Text>
                                    
                              </Card.Text>
                              <Button onClick={() => setLgShow(true)}>See all</Button>
                              <Modal
                              size="lg"
                              show={lgShow}
                              onHide={() => setLgShow(false)}
                              aria-labelledby="example-modal-sizes-title-lg"
                              >
                              <Modal.Header closeButton>
                              <Modal.Title id="example-modal-sizes-title-lg">
                                   Liquid Section
                              </Modal.Title>
                              </Modal.Header>
                              <Modal.Body> <p> SP-DEENAR
                                    <br />SP-SADAR
                                    <br />SP-NANKHA
                                    <br />SP-BUZURI
                                    <br />SP-SAILAN
                                    <br />SP-FAULAD
                                    <br />SP-SEB
                                     </p> 
                                    </Modal.Body>
                              </Modal>
                              </Card.Body>
                             </Card>

                         </div>
                         <div>
                              <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={itemImg} />
                              <Card.Body>
                              <Card.Title>Semi-Solid 
                                    Section </Card.Title>
                              <Card.Text>
                                    
                              </Card.Text>
                              <Button onClick={() => setLgShow(true)}>See all</Button>
                              <Modal
                              size="lg"
                              show={lgShow}
                              onHide={() => setLgShow(false)}
                              aria-labelledby="example-modal-sizes-title-lg"
                              >
                              <Modal.Header closeButton>
                              <Modal.Title id="example-modal-sizes-title-lg">
                                  Semi-Solid Section
                              </Modal.Title>
                              </Modal.Header>
                              <Modal.Body> <p> SP-NISHAT
                                    <br /> SP-SURANJAN
                                    <br />SP-USHBA
                                    <br />SP-KUNDUR
                                    <br />SP-GARLETAB
                                    <br />SP-PECH </p> 
                                    </Modal.Body>
                              </Modal>
                              </Card.Body>
                             </Card>

                         </div>
                         <div>
                              <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={itemImg} />
                              <Card.Body>
                              <Card.Title>Ointment Section</Card.Title>
                              <Card.Text>
                                    
                              </Card.Text>
                              <Button onClick={() => setLgShow(true)}>See all</Button>
                              <Modal
                              size="lg"
                              show={lgShow}
                              onHide={() => setLgShow(false)}
                              aria-labelledby="example-modal-sizes-title-lg"
                              >
                              <Modal.Header closeButton>
                              <Modal.Title id="example-modal-sizes-title-lg">
                                Ointment Section
                              </Modal.Title>
                              </Modal.Header>
                              <Modal.Body> <p> SP-NISHAT
                                    <br /> SP-SURANJAN
                                    <br />SP-USHBA
                                    <br />SP-KUNDUR
                                    <br />SP-GARLETAB
                                    <br />SP-PECH </p> 
                                    </Modal.Body>
                              </Modal>
                              </Card.Body>
                             </Card>

                         </div>
                         <div>
                              <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={itemImg} />
                              <Card.Body>
                              <Card.Title> Oil Base Section</Card.Title>
                              <Card.Text>
                                    
                              </Card.Text>
                              <Button onClick={() => setLgShow(true)}>See all</Button>
                              <Modal
                              size="lg"
                              show={lgShow}
                              onHide={() => setLgShow(false)}
                              aria-labelledby="example-modal-sizes-title-lg"
                              >
                              <Modal.Header closeButton>
                              <Modal.Title id="example-modal-sizes-title-lg">
                                 Oil Base Section
                              </Modal.Title>
                              </Modal.Header>
                              <Modal.Body> <p> SP-NISHAT
                                    <br /> SP-SURANJAN
                                    <br />SP-USHBA
                                    <br />SP-KUNDUR
                                    <br />SP-GARLETAB
                                    <br />SP-PECH </p> 
                                    </Modal.Body>
                              </Modal>
                              </Card.Body>
                             </Card>

                         </div>
                   </div>
            </div>
      );
};

export default ProductCategory;