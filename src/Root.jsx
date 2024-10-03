import { Link, Outlet } from "react-router-dom";
import './Root.css';
import { LanguageSelector } from "./LanguageSelector";


export const Root = () => {
    return (
        <div className="Root">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Úvod</Link></li>
                        <li><Link to="/races">Rasy</Link></li>
                        <li><Link to="/professions">Profese</Link></li>
                        <div className="LanguageSelectorContainer"><LanguageSelector /></div>
                    </ul>
                  
                </nav>

              
                
               
            </header>
            <Outlet />
        </div>
    );
};