import React, { useEffect, useState } from 'react';
import './EventsDetailsPage.css';
import '../../style.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api/pastevents`;

const EventDetailsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(API_URL);
        setEvents(res.data || []);
      } catch (err) {
        setEvents([]);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="event-details-container">
      <div className="header-section">
        <h1 className="event-heading">Event Details</h1>
        <p className="event-subtitle">Comprehensive overview of our events, reports, and resources</p>
      </div>

      <div className="table-wrapper">
        <div className="table-container">
          <table className="events-table">
            <thead>
              <tr className="table-header">
                <th className="table-cell header-cell">S.No</th>
                <th className="table-cell header-cell">Date</th>
                <th className="table-cell header-cell">Event Title</th>
                <th className="table-cell header-cell">Report</th>
                <th className="table-cell header-cell">Resources</th>
              </tr>
            </thead>
            <tbody>
              {[...events].reverse().map((event, index) => (
                <tr key={event._id} className="table-row">
                  <td className="table-cell serial-cell">{index + 1}</td>
                  <td className="table-cell date-cell">{formatDate(event.date)}</td>
                  <td className="table-cell title-cell">{event.title}</td>
                  <td className="table-cell link-cell">
                    {event.reportLink ? (
                      <a 
                        href={event.reportLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="drive-link report-link"
                        aria-label={`Report for ${event.title}`}
                      >
                        <FaExternalLinkAlt size={16} />
                        Click here
                      </a>
                    ) : (
                      <span style={{ color: '#888' }}>N/A</span>
                    )}
                  </td>
                  <td className="table-cell link-cell">
                    {event.resourcesLink ? (
                      <a 
                        href={event.resourcesLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="drive-link resources-link"
                        aria-label={`Resources for ${event.title}`}
                      >
                        <FaExternalLinkAlt size={16} />
                        Click here
                      </a>
                    ) : (
                      <span style={{ color: '#888' }}>N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;