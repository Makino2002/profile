import "./CV.css";

export default function CV() {
  return (
    <div className="cv-container">
      {/* Header */}
      <div className="cv-header">
        <div className="cv-header-left">
          <img
            src="/media/Avt2_thunhopng.png"
            alt="Avatar of Nguyễn Minh Mẫn"
          />
          <div className="cv-info">
            <h1>Nguyễn Minh Mẫn</h1>
            <p className="cv-position">
              <b>Web Developer (Fresher)</b>
            </p>
            <p>
              <strong>Career Objective</strong>
            </p>
            <p>
              Seeking career development opportunities in web development with
              modern technologies. Interested in building dynamic, scalable web
              applications and continuously improving professional skills.
            </p>
          </div>
        </div>
        <div className="cv-header-right">
          <p>
            <strong>Address:</strong> Thu Duc, Ho Chi Minh City
          </p>
          <p>
            <strong>Phone:</strong> 0584 876 785
          </p>
          <p>
            <strong>Email:</strong> Maiphuc455@gmail.com
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Makino2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Makino2002
            </a>
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="cv-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>University of Science - VNUHCM</strong>
          </li>
          <li>Bachelor of Physics (2021 - 2025)</li>
          <ul>
            <li>Department: Physics - Informatics</li>
          </ul>
        </ul>
      </div>

      {/* Academic Achievements */}
      <div className="cv-section">
        <h2>Academic Achievements</h2>
        <ul>
          <li>
            <strong>06/2022:</strong> Second Prize - P-Master Contest
          </li>
          <li>
            <strong>10/2023 - 12/2023:</strong> Backend Rookie Hackathon
            <ul>
              <li>Learned MySQL, HTML, CSS, Python</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Skills */}
      <div className="cv-section">
        <h2>Skills</h2>
        <ul>
          <li>Programming: JavaScript, Java</li>
          <li>
            Frontend: HTML5, CSS3, JavaScript, <strong>ReactJS</strong>
          </li>
          <li>Backend: NodeJS, ExpressJS</li>
          <li>Databases: MySQL</li>
          <li>Version Control: Git, GitHub, GitKraken</li>
          <li>
            DevOps: Linux, Nginx, Vagrant, Docker, DigitalOcean, CI/CD (GitHub
            Actions, GitLab CI)
          </li>
          <li>Soft Skills: Teamwork, Problem Solving, Time Management</li>
        </ul>
      </div>

      {/* Work Experience */}
      <div className="cv-section">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>2021 - 2024:</strong> Teaching C/C++ programming and basic
            subjects
          </li>
          <li>
            <strong>10/2024 - Present:</strong> Internship at UDT Company
          </li>
        </ul>
      </div>

      {/* Projects */}
      <div className="cv-section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Student Management Application</strong> - Web app to manage
            students' academic performance
          </li>
          <li>
            <strong>Online Sales System</strong> - Developed front-end for an
            e-commerce system
          </li>
        </ul>
      </div>

      {/* Certificates */}
      <div className="cv-section">
        <h2>Certificates / Learning Sources</h2>
        <ul>
          <li>
            <a
              href="https://www.codewars.com/users/Makino2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeWars
            </a>
          </li>
          <li>Learned from: University, 28tech, F8, Web3</li>
        </ul>
      </div>

      {/* Activities */}
      <div className="cv-section">
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>
            <strong>2021 - 2024:</strong> NES Academic Club
            <ul>
              <li>Responsible for teaching programming</li>
            </ul>
          </li>
          <li>
            <strong>12/2021:</strong> Spring Volunteer - Physics Dept.
          </li>
          <li>
            <strong>05/2022:</strong> NES Academic Club Camp
          </li>
        </ul>
      </div>

      {/* Hobbies */}
      <div className="cv-section">
        <h2>Hobbies</h2>
        <ul>
          <li>Reading books, Running, Traveling</li>
        </ul>
      </div>
    </div>
  );
}
