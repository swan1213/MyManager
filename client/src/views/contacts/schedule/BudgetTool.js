import React from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  UncontrolledDropdown
} from 'reactstrap';

const weekDayas = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const BudetTool = ({ openfooter }) => {
  return (
    <>
      <table className="w-100 bordered-table">
        <thead style={{ background: '#f3f2f7' }}>
          <tr>
            <th style={{ width: '150px' }}>
              <InputGroup>
                <Input
                  type="select"
                  style={{
                    background: 'rgb(243, 242, 247)',
                    color: '#000',
                    border: 'none',
                    boxShadow: 'none'
                  }}
                >
                  <option>Campare to actuals</option>
                </Input>
              </InputGroup>
            </th>
            {weekDayas.map((item) => {
              return (
                <th width="100" height="50" className="border cursor-pointer ">
                  <div className="d-flex justify-content-around">
                    <span>{item}</span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <th className="border cursor-pointer" style={{ width: '200px' }}>
            <div className="d-flex justify-content-between" style={{ padding: '10px' }}>
              <div>Total</div>
              <div className="d-flex ">
                <span className="labour-header-badge">7.2%</span>
                <span style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'end' }}>
                  7.72 Hrs, <br /> $100
                </span>
              </div>
            </div>
          </th>
          <th className="border cursor-pointer">
            <div className="d-flex justify-content-between" style={{ padding: '5px' }}>
              <span className="labour-header-badge">7.2%</span>
              <span style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'end' }}>
                7.72 Hrs, <br /> $100
              </span>
            </div>
          </th>
          <th className="border cursor-pointer">
            <div className="d-flex justify-content-between" style={{ padding: '5px' }}>
              <span className="labour-header-badge">7.2%</span>
              <span style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'end' }}>
                7.72 Hrs, <br /> $100
              </span>
            </div>
          </th>
          <th className="border cursor-pointer">
            <div className="d-flex justify-content-between" style={{ padding: '5px' }}>
              <span className="labour-header-badge">7.2%</span>

              <span style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'end' }}>
                7.72 Hrs, <br /> $100
              </span>
            </div>
          </th>
          <th className="border cursor-pointer">
            <div className="d-flex justify-content-between" style={{ padding: '5px' }}>
              <span className="labour-header-badge">7.2%</span>

              <span style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'end' }}>
                7.72 Hrs, <br /> $100
              </span>
            </div>
          </th>
          <th className="border cursor-pointer">
            <div className="d-flex justify-content-between" style={{ padding: '5px' }}>
              <span className="labour-header-badge">7.2%</span>

              <span style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'end' }}>
                7.72 Hrs, <br /> $100
              </span>
            </div>
          </th>
          <th className="border cursor-pointer">
            <div className="d-flex justify-content-between" style={{ padding: '5px' }}>
              <span className="labour-header-badge">7.2%</span>

              <span style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'end' }}>
                7.72 Hrs, <br /> $100
              </span>
            </div>
          </th>
          <th className="border cursor-pointer">
            <div className="d-flex justify-content-between" style={{ padding: '5px' }}>
              <span className="labour-header-badge">7.2%</span>

              <span style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'end' }}>
                7.72 Hrs, <br /> $100
              </span>
            </div>
          </th>
        </tbody>
        {openfooter ? (
          <tbody className="pr-1 pl-1">
            <tr>
              <td className="border">
                <div className="d-flex justify-content-between  align-items-center p-1">
                  <span>Projected Labor Hours</span>
                  {/* <div>$0 proj.($0 act.)</div> */}
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border">
                <div className="d-flex justify-content-between  align-items-center p-1">
                  <span>Actual Labor Hours</span>
                  {/* <div>$0 proj.($0 act.)</div> */}
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="cursor-pointer d-flex justify-content-center">
                  <Input type="text" placeholder="7:23%" style={{ width: '140px' }} />
                </div>
              </td>
            </tr>
            <tr style={{ borderTop: '2px solid #c7c5c5' }}>
              <td>
                <div className="d-flex justify-content-between  align-items-center p-1">
                  <span>BOH</span>
                  <div>
                    <span className="labour-badge">72%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="p-1 d-flex justify-content-between">
                  <span>FOH</span>
                  <div>
                    <span className="labour-badge">28%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className="border">
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <span className="labour-badge">1%</span>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
            </tr>
          </tbody>
        ) : null}
      </table>
    </>
  );
};

export default BudetTool;
