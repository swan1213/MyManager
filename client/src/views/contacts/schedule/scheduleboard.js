import React, { Fragment, useRef, useState } from 'react';
import WeekCalender from './WeekCalender';
import DayCalendar from './DayCalendar';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  TabContent,
  TabPane,
  Card,
  InputGroup,
  Input
} from 'reactstrap';
import { ArrowLeftCircle, ArrowRightCircle, Settings } from 'react-feather';
import Breadcrumbs from '@components/breadcrumbs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const EmployeeCalender = () => {
  const [showText, setShowText] = useState(false);
  const [inputList, setInputList] = React.useState([]);
  const [inputWeekList, setInputWeekList] = useState([]);
  const [employeeAddList, setEmployeeAddList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [active, setActive] = useState('week');

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(previousMonth);
  };

  const colors = ['purple', 'yellow', 'orange', 'brown', 'black', 'red', 'green', 'pink'];

  const addEmployeeFiledInCalendar = (e) => {
    setEmployeeAddList(
      employeeAddList.concat(
        <tr>
          <td id="sub">
            <div className="d-flex p-1">
              <Avatar src="/static/images/avatar/1.jpg" />
              <div className="ml-1">
                <h5 className="font-weight-bold">Antanio S</h5>
                <span>0.00 - $0.00</span>
              </div>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )
    );
  };

  const onAddBtnClick = (event) => {
    setInputWeekList(
      inputWeekList.concat(
        <tr
          style={{ background: colors[inputWeekList.length % colors.length] }}
          className="jobs_column"
        >
          <td className="ml-1" style={{ border: 'none' }}>
            Open
          </td>
          <td style={{ border: 'none' }}></td>
          <td style={{ border: 'none' }}></td>
          <td style={{ border: 'none' }}></td>
          <td style={{ border: 'none' }}></td>
          <td style={{ border: 'none' }}></td>
          <td style={{ border: 'none' }}></td>
          <td style={{ border: 'none' }}></td>
        </tr>
      )
    );
  };

  const addPosition = () => {
    console.log('hello world');
  };

  return (
    <Card>
      <div className="d-flex justify-content-between">
        <div
          className="d-flex align-items-center text-success m-1"
          style={{ borderRadius: '5px', height: '40px' }}
        >
          <FaAngleLeft size={28} className="text-secondary" onClick={handlePreviousMonth} />
          <FaAngleRight size={28} className="text-secondary" onClick={handleNextMonth} />
          <h3 className="p-1 text-secondary" style={{ marginTop: '10px', color: '#fff' }}>
            <b>{currentMonth.toLocaleString('default', { month: 'long' })}</b>
          </h3>
        </div>
        <div className="d-flex m-2" role="group" aria-label="Basic example">
          <Button
            active={active === 'week'}
            onClick={() => {
              toggle('week');
            }}
            type="button"
            color="primary"
            outline
          >
            week
          </Button>
          <Button
            active={active === 'day'}
            onClick={() => {
              toggle('day');
            }}
            type="button"
            color="primary"
            outline
          >
            Day
          </Button>
          <InputGroup style={{ width: '160px', height: '40px', marginLeft: '10px' }}>
            <Input type="select">
              <option>Employee View</option>
              <option>User View</option>
            </Input>
          </InputGroup>
        </div>
      </div>
      <div>
        <div className="col-md-12 calenders">
          <TabContent className="py-0" activeTab={active}>
            <TabPane tabId="day">
              <DayCalendar
                inputList={inputList}
                inputWeekList={inputWeekList}
                employeeAddList={employeeAddList}
                addEmployeeFiledInCalendar={addEmployeeFiledInCalendar}
              />
            </TabPane>
            <TabPane tabId="week">
              <WeekCalender
                employeeAddList={employeeAddList}
                onAddBtnClick={onAddBtnClick}
                inputWeekList={inputWeekList}
                addEmployeeFiledInCalendar={addEmployeeFiledInCalendar}
              />
            </TabPane>
          </TabContent>
        </div>
      </div>
    </Card>
  );
};

export default EmployeeCalender;
