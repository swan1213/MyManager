// ** React Imports
import { Fragment, forwardRef } from 'react'

// ** Reactstrap Imports
import { Input, Table, Row, Col } from 'reactstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef((props, ref) => (
    <div className="form-check">
        <Input type="checkbox" ref={ref} {...props} />
    </div>
))

const FilesTable = () => {
    return (
        <Fragment>
            <Row className="mx-0">
                <Col
                    className="d-flex align-items-center justify-content-end mt-1 flex-grow-1"
                    md="12"
                    sm="12"
                >
                    <Input
                        className="dataTable-filter mb-50"
                        placeholder="Search by File Name ..."
                        type="text"
                        bsSize="sm"
                        id="search-input"
                        // value={searchValue}
                        // onChange={handleFilter}
                    />
                </Col>
            </Row>
            <Table responsive>
                <thead>
                    <tr>
                        <th>
                            <Input type="checkbox" />
                        </th>
                        <th>File Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Input type="checkbox" />
                        </td>
                        <td>
                            <span className="align-middle fw-bold">
                                Angular Project
                            </span>
                        </td>
                        <td>PDF</td>
                    </tr>
                    <tr>
                        <td>
                            <Input type="checkbox" />
                        </td>
                        <td>
                            <span className="align-middle fw-bold">
                                React Project
                            </span>
                        </td>
                        <td>DOCX</td>
                    </tr>
                    <tr>
                        <td>
                            <Input type="checkbox" />
                        </td>
                        <td>
                            <span className="align-middle fw-bold">
                                Vuejs Project
                            </span>
                        </td>
                        <td>ODT</td>
                    </tr>
                    <tr>
                        <td>
                            <Input type="checkbox" />
                        </td>
                        <td>
                            <span className="align-middle fw-bold">
                                Bootstrap Project
                            </span>
                        </td>
                        <td>PDF</td>
                    </tr>
                </tbody>
            </Table>
        </Fragment>
    )
}

export default FilesTable
