import React, { useContext, useEffect, useState } from 'react'
import "./Announcements.css"
import Navbar from '../Navbar/Navbar'
import { UserContext } from '../UserContext/UserContext';

const Announcements = () => {
const [announcements, setAnnouncements] = useState([]);
const [error, setError] = useState(null);
const [showForm, setShowForm] = useState(false);
const {user} = useContext(UserContext);
const [newAnnouncement, setNewAnnouncement] = useState({
  title: '',
  description: '',
  amount: 0,
  cost: 0,
});
const [token, setToken] = useState(null);

useEffect(() => {
  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('http://localhost:5050/Announcement');
      
      if (!response.ok) {
        throw new Error('Failed to fetch announcements');
      }
      
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching announcements:", error);
    }
  };

  fetchAnnouncements();
}, []);

useEffect(()=>{
  let t = localStorage.getItem("token")
  setToken(t)
}, [])

const handleUpdate = async (id) => {
  const updatedAnnouncement = {
    title: 'Updated title',         
    description: 'Updated description',
    amount: 10,                    
    cost: 100            
  };

  try {
    const response = await fetch(`http://localhost:5050/Announcement?itemId=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updatedAnnouncement),
    });

    if (!response.ok) {
      throw new Error('Failed to update announcement');
    }

    const updatedAnnouncements = await response.json();
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.map((announcement) =>
        announcement.id === id ? updatedAnnouncements : announcement
      )
    );
  } catch (error) {
    setError(error.message);
    console.error('Error updating announcement:', error);
  }
};

const handleDelete = async (id) => {
  try {
    const response = await fetch(`http://localhost:5050/Announcement?announcementId=${id}`, {
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete announcement');
    }

    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.filter((announcement) => announcement.id !== id)
    );
  } catch (error) {
    setError(error.message);
    console.error('Error deleting announcement:', error);
  }
};

const handleAddAnnouncement = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5050/Announcement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newAnnouncement),
    });

    console.log(newAnnouncement)

    if (!response.ok) {
      throw new Error('Failed to add announcement');
    }

    const addedAnnouncement = await response.json();
    setAnnouncements((prevAnnouncements) => [
      ...prevAnnouncements,
      addedAnnouncement,
    ]);

    setNewAnnouncement({
      title: '',
      description: '',
      amount: 0,
      cost: 0,
    });
    setShowForm(false);
  } catch (error) {
    setError(error.message);
    console.error('Error adding announcement:', error);
  }
};

  const displayAnnouncement = (announcement) => {
    return (
      <div className='announcement' key={announcement.id}>
        <h3>{announcement.item.title}</h3>
        <p>{announcement.item.description}</p>
        <p>Amount: <span>{announcement.item.amount.value}</span></p>
        <p>Cost: <span>{announcement.item.cost.value} zł</span></p>
        {user != null && user.id.value == announcement.ownerId.value && (
          <div className="buttons flex">
            <button onClick={() => handleUpdate(announcement.id)}>Update</button>
            <button onClick={() => handleDelete(announcement.id)}>Delete</button>
          </div>
        )}
      </div>
    );
  };


  return (
    <div className='Announcements container'>
      <Navbar active={"announcements"} />

      {error && <div className="error">{error}</div>}

      {showForm && (
        <form onSubmit={handleAddAnnouncement} className="add-announcement-form">
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={newAnnouncement.title}
              onChange={(e) =>
                setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={newAnnouncement.description}
              onChange={(e) =>
                setNewAnnouncement({ ...newAnnouncement, description: e.target.value })
              }
            />
          </div>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              value={newAnnouncement.amount}
              onChange={(e) =>
                setNewAnnouncement({ ...newAnnouncement, amount: +e.target.value })
              }
              required
            />
          </div>
          <div>
            <label>Cost:</label>
            <input
              type="number"
              value={newAnnouncement.cost}
              onChange={(e) =>
                setNewAnnouncement({ ...newAnnouncement, cost: +e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}

      {user != null && 
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Announcement'}
        </button>
      }

      {announcements.length === 0 ? (
        <p>No announcements available</p>
      ) : (
        <div className="announcements-display flex">
          {announcements.map((announcement) => displayAnnouncement(announcement))}
        </div>
      )}
    </div>
  );
};

export default Announcements