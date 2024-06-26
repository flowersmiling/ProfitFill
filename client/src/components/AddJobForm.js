import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const AddJobForm = () => {
    const apiURL = import.meta.env.VITE_API_URL + ':' + import.meta.env.VITE_PORT;
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Send the job data to the backend
        fetch(`${apiURL}/jobs`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(jobData) })
            .then(response => response.json())
            .then(response => {
            // Update the jobs list after adding a new job
            setJobData({ ...jobData, ...response });
        })
            .catch(error => console.error('Error adding job:', error));
        window.location.href = "/";
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto p-4", children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "customerName", className: "block text-sm font-medium text-gray-700", children: "Customer Name:" }), _jsx("input", { type: "text", id: "customerName", name: "customerName", value: jobData.customerName, onChange: handleInputChange, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" }), _jsx("label", { htmlFor: "jobType", className: "block text-sm font-medium text-gray-700", children: "Job Type:" }), _jsxs("select", { id: "Job Type", value: jobData.jobType, onChange: (event) => setJobData({ ...jobData, jobType: event.target.value }), className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", children: [_jsx("option", { selected: true, children: "Choose a type" }), _jsx("option", { value: "Plumbing", children: "Plumbing" }), _jsx("option", { value: "Electrical", children: "Electrical" }), _jsx("option", { value: "Housing", children: "Housing" }), _jsx("option", { value: "Boiler", children: "Boiler" })] }), _jsx("label", { htmlFor: "status", className: "block text-sm font-medium text-gray-700", children: "Status:" }), _jsxs("select", { id: "Status", value: jobData.status, onChange: (event) => setJobData({ ...jobData, status: event.target.value }), className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", children: [_jsx("option", { selected: true, children: "Choose a status" }), _jsx("option", { value: "Completed", children: "Completed" }), _jsx("option", { value: "Scheduled", children: "Scheduled" }), _jsx("option", { value: "Pengding", children: "Pengding" })] }), _jsx("label", { htmlFor: "appointmentDate", className: "block text-sm font-medium text-gray-700", children: "AppointmentDate:" }), _jsx(DatePicker, { selected: jobData.appointmentDate ? new Date(jobData.appointmentDate) : null, onChange: (date) => setJobData({ ...jobData, appointmentDate: date.toISOString() }), className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" }), _jsx("label", { htmlFor: "technician", className: "block text-sm font-medium text-gray-700", children: "Technician:" }), _jsx("input", { type: "text", id: "technician", name: "technician", value: jobData.technician, onChange: handleInputChange, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" })] }), _jsx("button", { type: "submit", className: "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Add Job" })] }));
};
export default AddJobForm;
