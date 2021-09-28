import pikachuLoader from '../../assets/img/loading.gif'
import "./loader.scss";

function Loader() {
    return (
        <div className="spinner">
            <img 
				src={pikachuLoader}
				alt='Pikachu loader'
			/>
            <span className="loading">Cargando...</span>
        </div> 
    )
}

export default Loader;