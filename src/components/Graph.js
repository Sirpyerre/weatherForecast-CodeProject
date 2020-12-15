import {useRef, useEffect, useState} from "react";
import Chartjs from 'chart.js';
import PropTypes from 'prop-types';
import classes from "./lineChart.css";

const Graph = ({list}) => {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    const chartData = {
        type: 'line',
    };

    let dataset = {};
    let labels = [];
    let data = [];

    list.filter(reading => reading.dt_txt.includes("18:00:00"))
        .map(item => {

            labels.push(item.main.temp);
            data.push(item.main.temp);

        })

    chartData.data = {
        labels: labels,
        datasets: [
            {
                label: "Temp",
                data: data
            }
        ]
    }

    console.log(data)

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const newChartInstance = new Chartjs(chartRef.current, chartData);
            setChartInstance(newChartInstance);
        }
    }, [chartRef]);

    return (
        <div className={classes.graphContainer}>
            <canvas id="my-chart" ref={chartRef}/>
        </div>
    )
}

Graph.propTypes = {
    list: PropTypes.array.isRequired,
};

export default Graph
