import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Card = ({ card }:any) => {
    const apiURL = import.meta.env.VITE_API_URL+':'+import.meta.env.VITE_PORT;
    const [jobData, setJobData] = useState({
      id: '',
      customerName: '',
      jobType: '',
      status: '',
      appointmentDate: '',
      technician: ''
    });
    const [selectedDate, setSelectedDate] = useState(new Date(card.appointmentDate));

    // initialize the job data
    useEffect(() => {
      setJobData(card), 
      setSelectedDate(new Date(card.appointmentDate))
    }, [card]);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setJobData({ ...jobData, [name]: value});
    };

    const handleDateChange = (date) => {
      // Update the selected date when the user modifies it
      setSelectedDate(date);
      // Update the job data with the new date
      setJobData({ ...jobData, appointmentDate: date.toISOString() })
    };

    const handleSubmit = () => {
      // Update an existing job in the backend
      fetch(`${apiURL}/jobs/${card.id}`, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(jobData)})
        .then(response => response.json())
        .then(response => {
          // Update jobs list after updating a job
          setJobData({...response});
        })
        .catch(error => console.error('Error updating job:', error));
      console.log(jobData);
      window.location.href="/";
    };

    const handleDeleteJob = (jobId) => {
      // Delete a job from the backend
      fetch(`${apiURL}/jobs/${jobId}`, {method: 'DELETE'})
        .then(response => {})
        .catch(error => console.error('Error deleting job:', error));
      window.location.href="/";
    };

    return (
      // To force controlled components to update, surrounding the component with a containing tag, give that containing tag a key prop ie. key={card.id}
      <form onSubmit={handleSubmit} key={card.id} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="customerName" className="font-bold text-gray-600">Customer Name:</label>
        <input
          id="customerName"
          name="customerName"
          type="text"
          defaultValue={card.customerName}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="jobType" className="font-bold text-gray-600">Job Type:</label>
        <select
            id="Job Type"
            defaultValue={card.jobType}
            onChange={(event) => setJobData({ ...jobData, jobType: event.target.value as string})}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option selected>Choose a type</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Housing">Housing</option>
            <option value="Boiler">Boiler</option>
        </select>
        <label htmlFor="status" className="font-bold text-gray-600">Status:</label>
        <select
            id="Status"
            defaultValue={card.status}
            onChange={(event) => setJobData({ ...jobData, status: event.target.value as string})}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option selected>Choose a status</option>
            <option value="Completed">Completed</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Pengding">Pengding</option>
        </select>
        <label htmlFor="appointmentDate" className="font-bold text-gray-600">AppointmentDate:</label><p></p>
        <DatePicker
          value={selectedDate.toISOString().split('T')[0]}
          onChange={handleDateChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        /><p></p>
        <label htmlFor="technician" className="font-bold text-gray-600">Technician:</label>
        <input
          type="text"
          id="technician"
          name="technician"
          defaultValue={card.technician}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-between">
      <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Update Job
      </button>
      <button type='button' onClick={() => handleDeleteJob(card.id)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Delete Job
      </button>
      </div>
    </form>
    );
  };
  
  export default Card;