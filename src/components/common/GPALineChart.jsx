/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";

const GPALineChart = ({ firstDataSet, secondDataSet }) => {

    const data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        dataset:
            [{
                label: firstDataSet.label,
                data: firstDataSet.data,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
            },
            {
                label: secondDataSet.label,
                data: secondDataSet.data,
                fill: false,
                borderColor: "rgb(54, 162, 235)",
            }]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: { display: true, position: "top" },
        },
        scales: {
            y: { beginAtZero: true, max: 4.0, title: { display: true, text: "GPA" } },
            x: { title: { display: true, text: "Semester" } },
        },
    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    )
}

export default GPALineChart