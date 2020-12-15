import PropTypes from 'prop-types';
const WeatherState = ({name, value, className}) => {
    return (
        <>
            <p>{name}</p>
            <span className={className}>
                    {value}
            </span>
        </>
    )
}

WeatherState.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default WeatherState;