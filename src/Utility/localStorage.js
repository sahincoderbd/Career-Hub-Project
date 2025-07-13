const getJobApplicationFromLS = () => {
  const jobApplications = localStorage.getItem('job-applications');

  if (jobApplications) {
    return JSON.parse(jobApplications);
  }
  else {
    return [];
  }
}


const saveJobApplication = id => {
  const storedJobApplications = getJobApplicationFromLS();

  const exists = storedJobApplications.find(jobId => jobId === id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));

  }
}

export {getJobApplicationFromLS,saveJobApplication}