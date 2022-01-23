import { FC, useState } from "react";
import { Link,Outlet, useLocation } from "react-router-dom";
import partition from "../../assets/logos/partition.svg";
import project from "../../assets/logos/project.svg";
import team from "../../assets/logos/team.svg";
import "./layout.scss";


const Layout: FC = ({children }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const handleClickMenu = (path) => {
    return () => setCurrentPath(path)
  }

  console.log({currentPath})

  return (
    <div>
      <nav className="app_global_header">
        <img className="app_global_header_logo" />
        <div className="app_global_header_logo_name">
          <Link to="/">pathfinder.dev</Link>
        </div> 
      </nav>
      <div className="app_global_dummy_header"/>
      <div className="app_global_main_container">
        <div className="app_global_sidebar">
          <ul className="app_global_sidebar_list">
            <Link to="/personal">
              <li 
                className={`app_global_sidebar_item ${currentPath=== "/personal" ? "selected" : ""}`}
                onClick={handleClickMenu("/personal")}
              >
                <img src={partition} alt="로드맵"/>
                <span>RoadMap</span>
              </li>
            </Link>
            <Link to="/">
              <li 
                className={`app_global_sidebar_item ${currentPath=== "/" ? "selected" : ""}`}
                onClick={handleClickMenu("/")}
              >
                <img src={project} alt="통계"/>
                <span>Statistics</span>
              </li>
            </Link>
            <Link to="/company">
              <li 
                className={`app_global_sidebar_item ${currentPath=== "/company" ? "selected" : ""}`}
                onClick={handleClickMenu("/company")}
              >
                <img src={team} alt="회사/업체"/>
                <span>Company</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="app_global_sidebar_dummy" />
        <main>{children}</main>
      </div>
    </div>
  )  
}

export default Layout;