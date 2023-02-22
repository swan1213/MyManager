import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import '@styles/react/apps/app-email.scss';
import { positionData, data1 } from './data';
import { ChevronDown } from 'react-feather';
import { Button, CardHeader, CardTitle, Input, InputGroup } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function PositionTable() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <CardHeader>
        <CardTitle className="w-100">
          <div>
            <Button color="primary" onClick={toggle}>
              Create Position
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Create Position</ModalHeader>
        <ModalBody>
          <InputGroup>
            <Input type="text" alt="text" placeholder="create position..." />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary'>Create</Button>
        </ModalFooter>
      </Modal>
      <div className="react-dataTable">
        <DataTable
          className="react-dataTable"
          noHeader
          pagination
          selectableRows
          columns={positionData}
          paginationPerPage={7}
          sortIcon={<ChevronDown size={10} />}
          data={data1}
        />
      </div>
    </>
  );
}

export default PositionTable;
