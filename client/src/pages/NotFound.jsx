import { Link } from "react-router-dom";
import './notFound.scss';

export const NotFound = () => {
    return (
        <div className="error">
            <div className="error__container">
                <h2 className="error__container--title">404</h2>
                <p>Sorry! the page you're looking for is not here</p>
                <Link to="/">Back home</Link>
            </div>
        </div>
    );
}