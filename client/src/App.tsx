import { useEffect, useState } from 'react'
import Card from './components/Card'
import { Link } from 'react-router-dom';

const App = () => {
  const apiURL = `http://localhost:5001`;
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() =>{
    fetch(`${apiURL}/jobs`)
      .then((result) => result.json())
      .then((result) => setJobs(result ? result : []))
      .catch((error) => console.error('Error fetching jobs:', error))
  }, [])

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

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-center text-xl font-bold text-gray-900 mb-2">Job Management Dashboard</h1>
            <ul className="list-disc pl-4">
              {jobs.map(job => (
                <li key={job.id} className="border-b border-gray-200">
                  <a href='#' onClick={() => handleJobClick(job.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><span>{job.jobType}</span> - {job.status} - {job.appointmentDate.substring(0, 10)}</a>
                </li>
              ))}
            </ul>
            {jobDetails && (
              <div className="card shadow-lg rounded-lg p-4 bg-white">
                <h2>Job Details</h2>
                <Card card={jobDetails} />
              </div>
            )}
          </div>
          <div className="flex">
              <Link to="/add-job" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Add Job
              </Link>
          </div>
        </div>
      </div>
  );
};

export default App;
