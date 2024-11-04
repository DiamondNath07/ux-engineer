import React from 'react';
import QRCode from 'react-qr-code';

const page = () => {
  const value = 'www.talstrike.com';
  return (
    <div
      style={{
        height: 'auto',
        margin: '0 auto',
        maxWidth: '15%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingTop: 150,
        color: '#4169E1',
      }}
    >
      <QRCode
        size={256}
        style={{
          height: 'auto',
          maxWidth: '100%',
          width: '100%',
        }}
        value={value}
        viewBox={`0 0 256 256`}
        // bgColor="#4169E1"
        fgColor="#4169E1"
      />
    </div>
  );
};

export default page;
