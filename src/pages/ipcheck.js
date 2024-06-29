// src/pages/ipcheck.js
import React, { useEffect, useState } from 'react';
import './ipcheck.css';
import notConnectedIcon from './not_connected.png'; // Ensure the correct path

const IpCheck = () => {
  const [ipStatus, setIpStatus] = useState({ status: 'Checking protection', ip: '' });
  const [countdown, setCountdown] = useState(3);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const fetchIpStatus = async () => {
      try {
        const response = await fetch('https://check.cicadavpn.com/check-ip');
        const data = await response.json();
        return data.status === 'Protected by CicadaVPN' 
          ? { protected: true, ip: data.ip } 
          : { protected: false, ip: data.ip };
      } catch (error) {
        console.error('Error checking protection:', error);
        return { protected: false, ip: '' };
      }
    };

    const startCountdown = () => {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(interval);
            showResult();
          }
          return prevCountdown - 1;
        });
      }, 1000);
    };

    const showResult = async () => {
      const protectionStatus = await fetchIpStatus();
      if (protectionStatus.protected) {
        setIpStatus({ status: 'Protected! Your IP is', ip: protectionStatus.ip });
      } else {
        setIpStatus({ status: 'Not protected! Click Connect to get protected', ip: protectionStatus.ip });
      }
      setChecking(false);
    };

    startCountdown();
  }, []);

  return (
    <div className="container">
      {checking ? (
        <>
          <div className="spinner"></div>
          <div className="message">
            <span id="checkingText">{ipStatus.status}</span>
            <span className="blinking-cursor">|</span>
          </div>
          <div id="countdown">{countdown}</div>
        </>
      ) : (
        <div id="result">
          {ipStatus.status.includes('Not protected') ? (
            <>
              <img src={notConnectedIcon} alt="Not Connected" className="status-icon" />
              <div className="status-message">
                <p>{ipStatus.status}</p>
                <p>{ipStatus.ip && `Your IP is ${ipStatus.ip}`}</p>
              </div>
            </>
          ) : (
            <div className="status-message">
              <p>{ipStatus.status}</p>
              <p>{ipStatus.ip && `Your IP is ${ipStatus.ip} and your Provider is CicadaVPN`}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IpCheck;
