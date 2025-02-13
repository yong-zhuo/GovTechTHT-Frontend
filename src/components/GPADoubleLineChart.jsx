/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

const GPADoubleLineChart = ({ firstDataSet, secondDataSet }) => {

    const data = {
        //for each semester
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets:
            [{
                label: firstDataSet.label,
                data: firstDataSet.data,
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
            },
            {
                label: secondDataSet.label,
                data: secondDataSet.data,
                backgroundColor: "#FF0000",
                borderColor: "#FF0000",
            }]
    }

    const options = {
        responsive: true,
        aspectRatio: 2.7,
        plugins: {
            legend: { display: true, position: "top" },
        },
        scales: {
            y: { beginAtZero: true, max: 4.0, title: { display: true, text: "GPA" } },
            x: { title: { display: true, text: "Semester" } },
        },
        animation: false
    };

    return (
        <>
            <span className="text-xl mb-3 font-semibold">GPA Double Line Chart</span>
            <Line data={data} options={options} />
        </>
    )
}

export default GPADoubleLineChart