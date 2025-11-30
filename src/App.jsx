import React, { useState } from "react"; // ✅ ADD useState
import './App.css'
import { data } from "./data";
import photosnap from './assets/photosnap.svg'
import manage from './assets/manage.svg'
import account from './assets/account.svg'
import myhome from './assets/myhome.svg'
import loopstudios from './assets/loopstudios.svg'
import faceit from './assets/faceit.svg'
import shortly from './assets/shortly.svg'
import insure from './assets/insure.svg'
import eyecamco from './assets/eyecamco.svg'
import theairfiltercompany from './assets/theairfiltercompany.svg'
import headerweb from './assets/headerweb.svg'

// LOGO MAPPING
const logos = {
  "photosnap.svg": photosnap,
  "manage.svg": manage,
  "account.svg": account,
  "myhome.svg": myhome,
  "loopstudios.svg": loopstudios,
  "faceit.svg": faceit,
  "shortly.svg": shortly,
  "insure.svg": insure,
  "eyecamco.svg": eyecamco,
  "theairfiltercompany.svg": theairfiltercompany,
};

function App() {
  const [selectedRole, setSelectedRole] = useState("All");

  // FILTER LOGIC
  const filteredJobs =
    selectedRole === "All"
      ? data
      : data.filter((job) => job.role === selectedRole);

  return (
    <div className="app-container">

      <div className='list'>
        <img src={headerweb} className="logoreact" alt="logoreact" />
      </div>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        <button className="filterbtn" onClick={() => setSelectedRole("All")}>All</button>
        <button className="filterbtn" onClick={() => setSelectedRole("Frontend")}>Frontend</button>
        <button className="filterbtn" onClick={() => setSelectedRole("Backend")}>Backend</button>
        <button className="filterbtn" onClick={() => setSelectedRole("Fullstack")}>Fullstack</button>
        <button className="filterbtn" onClick={() => setSelectedRole("Senior")}>Senior</button>
      </div>

      {/* JOB LIST */}
      <div className="jobs-container">
        {filteredJobs.map((item) => (
          <div className="con" key={item.id}>

            <div className="figure">
              {(item.id === 1 || item.id === 2) && (<div className="insidecon"></div>)}

              <img className="photosnap" src={logos[item.logos]} alt={item.company} />

              <div className='writeup'>
                <div className="details">
                  <h3 className="accounttext">{item.company}</h3>
                  {item.new && (<button className="new">{item.new}</button>)}
                  {item.feature && (<button className="Feature">{item.feature}</button>)}
                </div>

                <div>
                  <p className="dev">{item.title}</p>
                </div>

                <div className='days'>
                  <p className='ago'>{item.posted}</p>
                  <p className="ago">{item.type}</p>
                  <p className="ago">{item.location}</p>
                </div>

              </div>

              <div className="acctbtn">
                {[
                  item.frontend,
                  item.senior,
                  item.html,
                  item.css,
                  item.javascript,
                  item.fullstack,
                  item.midweight,
                  item.python,
                  item.react,
                  item.junior,
                  item.saas,
                  item.ruby,
                  item.backend,
                  item.ror,
                  item.vue,
                  item.django
                ]
                  .filter(Boolean)
                  .map((tag, index) => (
                    <button key={index} className="actbtn">{tag}</button>
                  ))
                }
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
