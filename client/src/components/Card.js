import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Card = ({ card }) => {
    const apiURL = `http://localhost:5001`;
    const [jobData, setJobData] = useState({
        customerName: '',
        jobType: '',
        status: '',
        appointmentDate: '',
        technician: ''
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setJobData({ ...jobData, [name]: value });
    };
    const handleSubmit = () => {
        // Update an existing job in the backend
        fetch(`${apiURL}/jobs/${card.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(jobData) })
            .then(response => response.json())
            .then(response => {
            // Update jobs list after updating a job
            setJobData({ ...jobData });
        })
            .catch(error => console.error('Error updating job:', error));
        window.location.href = "/";
    };
    const handleDeleteJob = (jobId) => {
        // Delete a job from the backend
        fetch(`${apiURL}/jobs/${jobId}`, { method: 'DELETE' })
            .then(response => { })
            .catch(error => console.error('Error deleting job:', error));
        window.location.href = "/";
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto p-4", children: [_jsxs("div", { className: "mb-4", children: [_jsxs("label", { htmlFor: "customerName", className: "font-bold text-gray-600", children: ["Customer Name: ", card.customerName] }), _jsx("input", { id: "customerName", name: "customerName", type: "text", onChange: handleInputChange, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" }), _jsxs("label", { htmlFor: "jobType", className: "font-bold text-gray-600", children: ["Job Type: ", card.jobType] }), _jsxs("select", { id: "Job Type", onChange: (event) => setJobData({ ...jobData, jobType: event.target.value }), className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", children: [_jsx("option", { selected: true, children: "Choose a type" }), _jsx("option", { value: "Plumbing", children: "Plumbing" }), _jsx("option", { value: "Electrical", children: "Electrical" }), _jsx("option", { value: "Housing", children: "Housing" }), _jsx("option", { value: "Boiler", children: "Boiler" })] }), _jsxs("label", { htmlFor: "status", className: "font-bold text-gray-600", children: ["Status: ", card.status] }), _jsxs("select", { id: "Status", onChange: (event) => setJobData({ ...jobData, status: event.target.value }), className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", children: [_jsx("option", { selected: true, children: "Choose a status" }), _jsx("option", { value: "Completed", children: "Completed" }), _jsx("option", { value: "Scheduled", children: "Scheduled" }), _jsx("option", { value: "Pengding", children: "Pengding" })] }), _jsxs("label", { htmlFor: "appointmentDate", className: "font-bold text-gray-600", children: ["AppointmentDate: ", card.appointmentDate.substring(0, 16)] }), _jsx(DatePicker, { onChange: (date) => setJobData({ ...jobData, appointmentDate: date.toISOString() }), className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" }), _jsx("p", {}), _jsxs("label", { htmlFor: "technician", className: "font-bold text-gray-600", children: ["Technician: ", card.technician] }), _jsx("input", { type: "text", id: "technician", name: "technician", onChange: handleInputChange, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("button", { type: "submit", className: "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Update Job" }), _jsx("button", { onClick: () => handleDeleteJob(card.id), className: "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Delete Job" })] })] }));
};
export default Card;
