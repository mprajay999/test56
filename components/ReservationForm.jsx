import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: '',
    seatingPreference: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="date" className="block text-primary mb-2">Date</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block text-primary mb-2">Time</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>
      <div className="mb-4">
        <label htmlFor="partySize" className="block text-primary mb-2">Party Size</label>
        <input type="number" id="partySize" name="partySize" value={formData.partySize} onChange={handleChange} required min="1"
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>
      <div className="mb-4">
        <label htmlFor="seatingPreference" className="block text-primary mb-2">Seating Preference</label>
        <select id="seatingPreference" name="seatingPreference" value={formData.seatingPreference} onChange={handleChange} required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
          <option value="">Select a preference</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
          <option value="bar">Bar</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-primary mb-2">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-primary mb-2">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block text-primary mb-2">Phone</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>
      <button type="submit" className="w-full bg-secondary text-primary py-3 rounded-md hover:bg-accent transition-colors">
        Make Reservation
      </button>
    </form>
  );
};

export default ReservationForm;