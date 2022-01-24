import { FC, useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import menu from "../../assets/logos/menu.svg";
import roadmap from "../../assets/logos/roadmap.svg";
import roadmap_selected from "../../assets/logos/roadmap_selected.svg";
import project from "../../assets/logos/project.svg";
import project_selected from "../../assets/logos/project_selected.svg";
import team from "../../assets/logos/team.svg";
import team_selected from "../../assets/logos/team_selected.svg";

import "./layout.scss";


const Layout: FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const handleClickMenu = (path) => {
    return () => setCurrentPath(path)
  }

	const sidebar = () => {
		const bar = document.querySelector(".app_global_sidebar");
		bar.classList.toggle("open_sidebar");
	};

  return (
    <div className="app_container">
      <nav className="app_global_header">
				<div className="app_global_header_logo_container">
					<img className="app_global_header_logo" />
					<div className="app_global_header_logo_name">
						<Link to="/">pathfinder.dev</Link>
					</div> 
				</div>
				<button className="app_global_header_hamburger" onClick={sidebar}><img src={menu} /></button>
      </nav>
			<div className="app_global_sidebar">
				<ul className="app_global_sidebar_list">
					<Link to="/personal">
						<li 
							className={`app_global_sidebar_item ${currentPath === "/personal" ? "selected" : ""}`}
							onClick={handleClickMenu("/personal")}
						>
							<img src={currentPath === "/personal" ? roadmap_selected :roadmap} alt="로드맵"/>
							<span>RoadMap</span>
						</li>
					</Link>
					<Link to="/">
						<li 
							className={`app_global_sidebar_item ${currentPath=== "/" ? "selected" : ""}`}
							onClick={handleClickMenu("/")}
						>
							<img src={currentPath === "/" ? project_selected : project  } alt="통계"/>
							<span>Statistics</span>
						</li>
					</Link>
					<Link to="/company">
						<li 
							className={`app_global_sidebar_item ${currentPath=== "/company" ? "selected" : ""}`}
							onClick={handleClickMenu("/company")}
						>
							<img src={currentPath === "/company" ? team_selected : team } alt="회사/업체"/>
							<span>Company</span>
						</li>
					</Link>
				</ul>
			</div>
      <main><Outlet/></main>
    </div>
  )  
}

export default Layout;