// ** Reactstrap Imports
import {
    Table,
    Button,
    Row,
    Col,
    Input,
    Card,
    CardHeader,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledButtonDropdown
} from 'reactstrap'
import { ChevronDown } from 'react-feather'
import { useState, useEffect } from 'react'
import { forwardRef } from 'react'
// ** Table Columns*/
import useColumns from './useColumns'
import { FaUserCheck, FaUserTimes, FaUserClock } from 'react-icons/fa'

import { ExternalLink, Printer, File, Clipboard } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss';
import '@styles/react/libs/tables/react-dataTable-component.scss';


const customStyles = {};
// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef((props, ref) => (
    <div className='form-check'>
        <Input type='checkbox' ref={ref} {...props} />
    </div>
))


// ** Table Header
const CustomHeader = ({ isButtonShow }) => {

    return (
        <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
            <Row>
                <Col xl="3" className="d-flex align-items-center mb-sm-0 mb-1">
                    <div className="me-1">
                        <Input
                            id="search-invoice"
                            placeholder="Search Attendees"
                            className="w-100"
                            type="text"
                        // value={searchTerm}
                        // onChange={(e) => handleFilter(e.target.value)}
                        />
                    </div>
                </Col>
                <Col xl="9" className="justify-content-end d-flex align-items-center">
                    {isButtonShow ? <div className="d-flex">
                        <Button size="sm" color="primary" className="me-1">Mark All Attended</Button>
                        <Button size="sm" color="primary" className="me-1">Add All to Contact</Button>
                    </div> : <></>}
                    <div className="d-flex align-items-center">
                        <div className="me-1">
                            <FaUserCheck size="15" color="#7367f0" /><span className="me-1"> : Came</span>
                            <FaUserTimes size="15" color="#7367f0" /><span className="me-1"> : Not Come</span>
                            <FaUserClock size="15" color="#7367f0" /><span> : Later</span>
                        </div>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle color="secondary" outline caret>
                                <ExternalLink className="font-small-4 me-50" />
                                <span>Export</span>
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem className="w-100">
                                    <Printer className="font-small-4 me-50" />
                                    <span>Print</span>
                                </DropdownItem>
                                <DropdownItem className="w-100">
                                    <File className="font-small-4 me-50" />
                                    <span>Excel</span>
                                </DropdownItem>
                                <DropdownItem className="w-100">
                                    <Clipboard className="font-small-4 me-50" />
                                    <span>PDF</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

const Attendance = (props) => {
    const [attendanceStatus, setAttendanceStatus] = useState({
        id: "",
        attendanceStatus: "came"
    });
    const [isButtonShow, setIsButtonShow] = useState(false)
    useEffect(() => {
        //console.log(props.data);
    }, [attendanceStatus]);
    const { columns } = useColumns({ setAttendanceStatus });
    const addAttendance = (e) => {
        if (e.selectedRows.length > 0) {
            setIsButtonShow(true);
        } else {
            setIsButtonShow(false);
        }
    }

    return (
        <Card>
            <div className="react-dataTable">
                <DataTable
                    noHeader
                    subHeader
                    sortServer
                    pagination
                    responsive
                    paginationServer
                    columns={columns}
                    selectableRows
                    selectableRowsComponent={BootstrapCheckbox}
                    onSelectedRowsChange={addAttendance}
                    customStyles={customStyles}
                    sortIcon={<ChevronDown />}
                    className="react-dataTable"
                    data={props?.data}
                    subHeaderComponent={
                        <CustomHeader isButtonShow={isButtonShow} />
                    }
                />
            </div>
        </Card>
    )
}

export default Attendance
