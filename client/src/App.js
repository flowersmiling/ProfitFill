import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Card from './components/Card';
import { Link } from 'react-router-dom';
const App = () => {
    // const apiURL = import.meta.env.VITE_API_URL+':'+import.meta.env.VITE_PORT;
    const apiURL = import.meta.env.VITE_API_URL;
    const [jobs, setJobs] = useState([]);
    const [jobDetails, setJobDetails] = useState(null);
    console.log(apiURL);
    useEffect(() => {
        fetch(`${apiURL}/jobs`)
            .then((result) => result.json())
            .then((result) => setJobs(result ? result : []))
            .catch((error) => console.error('Error fetching jobs:', error));
    }, []);
    const handleJobClick = (jobId) => {
        setJobDetails(jobs.find(job => job.id === jobId));
        // Fetch job details from the backend
        // fetch(`${apiURL}/jobs/${jobId}`)
        //   .then(response => response.json())
        //   .then(response => {
        //     setJobDetails(response);
        //   })
        //   .catch(error => console.error('Error fetching job details:', error));
    };
    return (_jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: _jsxs("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: [_jsxs("div", { className: "p-6 bg-white border-b border-gray-200", children: [_jsx("h1", { className: "text-center text-xl font-bold text-gray-900 mb-2", children: "Job Management Dashboard" }), _jsx("ul", { className: "list-disc pl-4", children: jobs.map(job => (_jsx("li", { className: "border-b border-gray-200", children: _jsxs("a", { href: '#', onClick: () => handleJobClick(job.id), className: "font-medium text-blue-600 dark:text-blue-500 hover:underline", children: [_jsx("span", { children: job.jobType }), " - ", job.status, " - ", job.appointmentDate.substring(0, 10)] }) }, job.id))) }), jobDetails && (_jsxs("div", { className: "card shadow-lg rounded-lg p-4 bg-white", children: [_jsx("h2", { children: "Job Details" }), _jsx(Card, { card: jobDetails })] }))] }), _jsx("div", { className: "flex", children: _jsx(Link, { to: "/add-job", className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700", children: "Add Job" }) })] }) }));
};
export default App;
