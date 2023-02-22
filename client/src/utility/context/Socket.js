import React, { createContext, Fragment, useEffect } from 'react';
import socketio from 'socket.io-client';

import Avatar from '@components/avatar';
import { Coffee } from 'react-feather';

import { toast, Slide } from 'react-toastify';
import { getUserData, isUserLoggedIn } from '../Utils';

const SOCKET_URL = process.env.REACT_APP_API;

const SocketContext = createContext();

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
        <h6 className="toast-title fw-bold">Welcome, {name}</h6>
      </div>
    </div>
    <div className="toastify-body">
      <span>
        You have successfully logged in as an {role} user to My Manager. Now you can start to
        explore. Enjoy!
      </span>
    </div>
  </Fragment>
);

const NewEmailToastContent = ({ name, message }) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
        <h6 className="toast-title fw-bold">{name} replied to ticket</h6>
      </div>
    </div>
    <div className="toastify-body">
      <span>{message}</span>
    </div>
  </Fragment>
);

const socket = socketio('https://mymanager.com/api');

socket.connect();

const SocketProvider = ({ children }) => {
  useEffect(() => {
    socket.connect();
    socket.on('ready-client', () => {
      if (isUserLoggedIn()) socket.emit('adminRegister', getUserData().id);
    });

    socket.on('newEmail', ({ reqName, message }) => {
      toast.info(<NewEmailToastContent />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
        position: 'bottom-right'
      });
    });

    socket.on('startChat', (data) => {
      toast.success(
        <ToastContent
          name={data.fullName || data.username || 'John Doe'}
          role={data.role || 'admin'}
        />,
        {
          icon: false,
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
          position: 'bottom-right'
        }
      );
    });
    return () => {
      socket.off('startChat');
      socket.off('ready-client');
      socket.off('newEmail');
    };
  }, [socket]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export { SocketProvider, SocketContext };
