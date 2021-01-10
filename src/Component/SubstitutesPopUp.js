import React,  { useState }  from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';

function renderSubstitutes(subs, modifySelectedSubstitute) {
    let rows = []
    subs.map((element) => {
      let str = ""
      element.map((val) => {
        str = str + val.name + "\n"
      })

      rows.push((
        <tr className='sub' onClick={() => modifySelectedSubstitute(element)} key={element}>
          {str}
        </tr>
      ))
    })
    return rows;
}
    

export default function SubstitutesPopUp(subs, onClick) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Find Substitute
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Pick a Substitute!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{renderSubstitutes(subs,onClick)}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

ReactDOM.render(<SubstitutesPopUp />, document.getElementById('root'));
