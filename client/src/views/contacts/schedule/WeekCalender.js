import { Fragment, useEffect, useState } from 'react';
import img5 from '@src/assets/images/portrait/small/avatar-s-4.jpg';
import {
  Col,
  NavLink,
  Card,
  Nav,
  Row,
  TabContent,
  TabPane,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import BudetTool from './BudgetTool';
import LaborTool from './LaborTool';
import { Sun, User, ChevronDown, ChevronUp, Edit2, Plus, Clock } from 'react-feather';
import moment from 'moment';
import AddEmpolye from './AddEmpolye';

// const weather = [Sun]
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const data = [
  {
    id: 1,
    name: 'Antanio S',
    tracker: 0,
    startTime: '00:00',
    endTime: '00:00'
  },
  {
    id: 2,
    name: 'Antanio S',
    tracker: 0,
    startTime: '00:00',
    endTime: '00:00'
  }
];

const WeekCalender = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [currentDate, setCurrentDate] = useState(moment());
  const [days, setDays] = useState([]);
  const [active, setActive] = useState('1');
  const handleFormOpen = () => {};
  const [openfooter, setopenfooter] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const toggle = (tab) => {
    setActive(tab);
    setopenfooter(true);
  };

  const handleClickOpen = () => {
    setopenfooter(!openfooter);
  };

  const allowDrop = ev => {
    ev.preventDefault();
  }
  
  const drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  const drop = ev => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if( ev.target.localName !== 'th' || ev.target.className.indexOf( 'disable-drop' ) !== -1 ) return false;
    ev.target.appendChild(document.getElementById(data));
  }

  useEffect(() => {
    const daysInWeek = [];
    for (let i = 0; i < 7; i++) {
      daysInWeek.push(moment().add(i, 'days'));
    }
    setDays(daysInWeek);
  }, [currentDate]);

  const handlePageChange = (event) => {
    setSelectedPage(parseInt(event.target.value));
  };

  const indexOfLastPost = selectedPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const displayData = data.slice(indexOfFirstPost, indexOfLastPost);

  const openScheduleModal = () => {
    setOpenModel(!openModel);
  };

  return (
    <Fragment>
      <Card>
        <div className="w-100 rounded p-1">
          <h5>Week Calendar</h5>
          <table className="w-100 ">
            <thead>
              <tr>
                <th className="border cursor-pointer" width={'250'}>
                  <div className="d-flex">
                    <div className="m-1">
                      <AddEmpolye />
                    </div>
                  </div>
                </th>
                {days.map((day) => (
                  <th className="border cursor-pointer" key={day.format('MMM DD')}>
                    <div
                      className="text-center d-flex justify-content-between"
                      style={{ marginTop: '5px', margin: '5px' }}
                    >
                      <div>
                        <h3>
                          <b>{day.format('ddd')}</b>
                        </h3>
                        <span style={{ fontWeight: '200' }}> {day.format('MMM DD')}</span>
                      </div>
                      <div className="text-secondary">
                        <div>
                          <Sun size={20} />
                          <span style={{ fontSize: '14px', margin: '2px', fontWeight: '400' }}>
                            30° F
                          </span>
                        </div>
                        <div>
                          <User size={16} />
                          <span style={{ fontSize: '14px', fontWeight: '400' }}> 66</span>
                        </div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody onDrop={ event => drop(event) } onDragOver={ event => allowDrop(event) }>
              <tr className="border">
                <th className="border cursor-pointer p-2 disable-drop">Events</th>
                <th
                  className="border cursor-pointer text-center addScheduler-wrapper"
                  onClick={openScheduleModal}
                >
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
              </tr>
              <tr className="border">
                <th className="border cursor-pointer p-2 disable-drop">Opening Shift</th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
                <th className="border cursor-pointer text-center addScheduler-wrapper">
                  <Plus className="plus_icons" />
                </th>
              </tr>
              {displayData.map((item, i) => (
                <tr key={i}>
                  <th className="border cursor-pointer disable-drop" style={{ width: '200px' }}>
                    <div className="d-flex p-1">
                      <img
                        src={img5}
                        className="rounded-circle me-2"
                        alt="Generic placeholder image"
                        height="40"
                        width="40"
                      />
                      <div className="ml-1 ">
                        <h5 className="font-weight-bold">{item.name}</h5>
                        <span style={{ fontSize: '12px' }}>$0.00 - $0.00</span>
                      </div>
                    </div>
                  </th>
                  <th className="border cursor-pointer text-center addScheduler-wrapper">
                    <Plus className="plus_icons" />
                  </th>
                  <th className="border cursor-pointer addScheduler-wrapper">
                    <div
                      className="timeline d-flex"
                      draggable={true}
                      onDragStart={event => drag(event)}
                      id={`data${i}`}
                      style={{
                        background: '#ffeec9',
                        height: '25px',
                        position: 'relative',
                        top: '-30px'
                      }}
                    >
                      <div className="bg-primary" style={{ height: '25px', width: '20px' }}></div>
                      <span style={{ marginLeft: '5px', width: '100px' }}>9am - 10am</span>
                      <Edit2 size={16} style={{ position: 'relative', left: '5px' }} />
                    </div>
                    <Plus className="plus_icons" />
                  </th>
                  <th className="border cursor-pointer text-center addScheduler-wrapper">
                    <div className="addScheduler">
                      <Plus className="plus_icons" />
                    </div>
                  </th>
                  <th className="border cursor-pointer">
                    <div
                      className="timeline d-flex"
                      draggable={true}
                      onDragStart={event => drag(event)}
                      id={`data${i}-1`}
                      style={{
                        background: '#ffeec9',
                        height: '25px',
                        position: 'relative',
                        top: '-30px'
                      }}
                    >
                      <div className="bg-primary" style={{ height: '25px', width: '20px' }}></div>
                      <span style={{ marginLeft: '5px' }}>9am - 10am</span>
                      <Edit2 size={16} style={{ position: 'relative', left: '5px' }} />
                    </div>
                  </th>
                  <th className="border cursor-pointer text-center addScheduler-wrapper">
                    {' '}
                    <Plus className="plus_icons" />
                  </th>
                  <th className="border cursor-pointer text-center addScheduler-wrapper">
                    {' '}
                    <Plus className="plus_icons" />
                  </th>
                  <th className="border cursor-pointer text-center addScheduler-wrapper">
                    {' '}
                    <Plus className="plus_icons" />
                  </th>
                </tr>
              ))}
              <tr className="border bg-success text-white" style={{ pointerEvents: 'none' }}>
                <th className="cursor-pointer" style={{ paddingLeft: '20px' }}>
                  Host
                </th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
              </tr>
              {displayData.map((item, i) => (
                <tr key={i}>
                  <th className="border cursor-pointer p-1 disable-drop" style={{ width: '200px' }}>
                    <div className="d-flex p-1">
                      <img
                        src={img5}
                        className="rounded-circle me-2"
                        alt="Generic placeholder image"
                        height="40"
                        width="40"
                      />
                      <div className="ml-1 ">
                        <h5 className="font-weight-bold">{item.name}</h5>
                        <span style={{ fontSize: '12px' }}>$0.00 - $0.00</span>
                      </div>
                    </div>
                  </th>

                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                </tr>
              ))}
            </tbody>
          </table>
          <FormGroup
            style={{
              width: '100px',
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Label for="pageSelect" style={{ marginTop: '8px' }}>
              Page:
            </Label>
            <Input
              type="select"
              name="pageSelect"
              id="pageSelect"
              value={selectedPage}
              onChange={handlePageChange}
              style={{ width: '100px' }}
            >
              {Array.from({ length: Math.ceil(data.length / postsPerPage) }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Input>
          </FormGroup>
        </div>
      </Card>
      <div>
        <div className="d-flex justify-content-between h-100">
          <div className="shadow bg-white cursor-pointer">
            <Nav tabs className="p-0">
              <NavLink
                active={active === '1'}
                className="rounded"
                onClick={() => {
                  toggle('1');
                }}
              >
                Budget Tool
              </NavLink>
              <NavLink
                active={active === '2'}
                className="rounded"
                onClick={() => {
                  toggle('2');
                }}
              >
                Goal
              </NavLink>
            </Nav>
          </div>
          <div onClick={handleClickOpen} className="shadow bg-white cursor-pointer p-1">
            {openfooter ? <ChevronDown /> : <ChevronUp />}
          </div>
        </div>
        <div className="w-100 shadow bg-white h-100">
          <TabContent activeTab={active}>
            <TabPane tabId="1">
              <div className="w-100 shadow bg-white rounded">
                <BudetTool openfooter={openfooter} />
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="w-100 shadow bg-white rounded">
                <LaborTool openfooter={openfooter} />
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>

      <Modal isOpen={openModel} toggle={openScheduleModal} centered>
        <ModalHeader toggle={openScheduleModal}>Name Here</ModalHeader>
        <ModalBody>
          <div>
            <div className="d-flex p-1 ">
              <Input type="time" style={{ width: '150px', margin: '10px' }} />
              <Input type="time" style={{ width: '150px', margin: '10px' }} />
              <div className="d-flex" style={{ margin: '10px' }}>
                <Input type="checkbox" style={{ margin: '10px' }} />
                <Label style={{ marginTop: '10px' }}>Close</Label>
              </div>
            </div>
            <div className="d-flex ml-1 ">
              <span>Or use common shift name </span>
              <div>
                <Clock size={24} style={{ marginLeft: '10px' }} />
                <span style={{ marginLeft: '5px' }}>15.15 Hours</span>
              </div>
            </div>
            <div className='d-flex'>
              
            </div>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default WeekCalender;
