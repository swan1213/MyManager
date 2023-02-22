import React from 'react';
import DataTable from 'react-data-table-component';
import '@styles/react/apps/app-email.scss';
import { positionData, data1 } from './data';
import { ChevronDown } from 'react-feather';
import { Button, CardHeader, CardTitle } from 'reactstrap';

function ShiftTable() {
  return (
    <>
      <CardHeader>
        <CardTitle className="w-100">
          <div>
            <Button color="primary">Create Shift</Button>
          </div>
        </CardTitle>
      </CardHeader>
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

export default ShiftTable;
