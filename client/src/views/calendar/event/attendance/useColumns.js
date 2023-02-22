// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { getUser } from '@src/views/apps/user/store'

// ** Icons Imports
import { Slack, User, Settings, Database, Edit2, Eye } from 'react-feather'

// ** Reactstrap Imports
import { Badge, Button, ButtonGroup } from 'reactstrap'

import { FaUserCheck, FaUserTimes, FaUserClock } from 'react-icons/fa'

export const useColumns = ({ setAttendanceStatus }) => {

    const groupButtonClick = (e, row) => {
        e.preventDefault();
        e.target.closest('.btn-group').childNodes.forEach((button, index) => {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
        });
        e.target.closest('button').classList.add('active');
        setAttendanceStatus({
            id: row._id, attendanceStatus: row.status
        })
    }
    const columns = [
        {
            name: 'Name',
            sortable: true,
            minWidth: '145px',
            sortField: 'name',
            selector: row => row.name,
            cell: row => (
                <div className='d-flex justify-content-left align-items-center'>
                    <div className='d-flex flex-column'>
                        <span className=''>{row.name}</span>
                    </div>
                </div>
            )
        },
        {
            name: 'Email',
            sortable: true,
            minWidth: '250px',
            sortField: 'currentPlan',
            selector: row => row.email,
            cell: row => <span className='text-capitalize'>{row.email}</span>
        },
        {
            name: 'Phone',
            sortable: true,
            minWidth: '172px',
            sortField: 'category',
            selector: row => row.category,
            cell: row => <span className=''>{row.phone}</span>
        },
        {
            name: 'Attendance',
            sortable: true,
            minWidth: '138px',
            sortField: 'status',
            selector: row => row.status,
            cell: row => (
                <ButtonGroup >
                    <Button outline color="primary p-50" onClick={(e) => groupButtonClick(e, row)}
                    >
                        <FaUserCheck size={15} />
                    </Button>
                    <Button outline color="primary p-50" onClick={(e) => groupButtonClick(e, row)}>
                        <FaUserTimes size={15} />
                    </Button>
                    <Button outline color="primary p-50" onClick={(e) => groupButtonClick(e, row)}>
                        <FaUserClock size={15} />
                    </Button>
                </ButtonGroup >
            )
        },
        {
            name: 'Actions',
            minWidth: '100px',
            cell: row => (
                <Button className="round" color="primary" outline>
                    Add To Leads
                </Button>
            )
        }
    ]
    return {
        columns
    }
}

export default useColumns
