import Card from "./components/Card";
import User from "./components/User";

const App = () => {

  const jobs = [
  {
    id: 1,
    company: "Amazon",
    jobRole: "Frontend Developer",
    jobType: "Full Time",
    level: "Fresher",
    salary: "₹6 LPA",
    location: "Mumbai, India",
    posted: "5 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 2,
    company: "Google",
    jobRole: "React Developer",
    jobType: "Full Time",
    level: "1-2 Years",
    salary: "₹12 LPA",
    location: "Bangalore, India",
    posted: "2 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 3,
    company: "Microsoft",
    jobRole: "Software Engineer",
    jobType: "Hybrid",
    level: "Fresher",
    salary: "₹10 LPA",
    location: "Hyderabad, India",
    posted: "1 day ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 4,
    company: "Infosys",
    jobRole: "Frontend Engineer",
    jobType: "Work From Office",
    level: "0-1 Year",
    salary: "₹5.5 LPA",
    location: "Pune, India",
    posted: "3 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  },
  {
    id: 5,
    company: "TCS",
    jobRole: "MERN Stack Developer",
    jobType: "Remote",
    level: "Fresher",
    salary: "₹7 LPA",
    location: "Remote",
    posted: "Today",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
  },
  {
    id: 6,
    company: "Adobe",
    jobRole: "UI Developer",
    jobType: "Hybrid",
    level: "2+ Years",
    salary: "₹15 LPA",
    location: "Noida, India",
    posted: "4 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
  },
];

  return (
    <>
   {jobs.map(function(el){
    return (
      <Card company={el.company} jobRole={el.jobRole} jobType={el.jobType} level={el.level} salary={el.salary} location={el.location} posted={el.posted} logo={el.logo} />

    )
   })}
    </>
  )
}

export default App