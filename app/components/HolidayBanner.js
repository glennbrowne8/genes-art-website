'use client';

import React from 'react';

export default function HolidayBanner({ settings }) {
  const holidayMode = settings?.holidayMode;
  
  // Don't show banner if holiday mode is not enabled
  if (!holidayMode?.enabled) {
    return null;
  }

  // Format return date if provided
  const formatReturnDate = (dateString) => {
    if (!dateString) return null;
    
    const date = new Date(dateString);
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-AU', options);
  };

  const returnDate = holidayMode.returnDate ? formatReturnDate(holidayMode.returnDate) : null;
  const defaultMessage = "G'day! I'm currently away on leave. The gallery is still here for you to browse, but I'm not taking new orders at the moment.";
  const message = holidayMode.message || defaultMessage;

  return (
    <div style={{
      backgroundColor: '#FFF4E6',
      borderBottom: '2px solid #F4A460',
      padding: '20px',
      textAlign: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{
          fontSize: '24px',
          marginBottom: '4px'
        }}>
          🏖️
        </div>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#8B4513',
          margin: 0,
          marginBottom: '8px'
        }}>
          Currently Away
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#654321',
          margin: 0,
          lineHeight: '1.6',
          maxWidth: '600px'
        }}>
          {message}
        </p>
        {returnDate && (
          <p style={{
            fontSize: '14px',
            color: '#8B4513',
            fontWeight: '600',
            margin: '8px 0 0 0',
            padding: '8px 16px',
            backgroundColor: 'rgba(139, 69, 19, 0.1)',
            borderRadius: '20px'
          }}>
            📅 Expected return: {returnDate}
          </p>
        )}
      </div>
    </div>
  );
}
