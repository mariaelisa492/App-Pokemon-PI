import { Link } from "react-router-dom";
import './notFound.scss';

export const NotFound = () => {
    return (
        <div className="error">
            <div className="error__container">
                <h2 className="error__container--title">404</h2>
                <p>Page not found</p>
                <Link to="/">Back</Link>
            </div>
        </div>
    );
}