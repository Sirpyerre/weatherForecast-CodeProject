import PropTypes from 'prop-types';

const Graph = ({data}) => {
    return (
        <div className="graph">
            AQUI la grafica
        </div>
    )
}

Graph.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Graph
