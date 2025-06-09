import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Área Agricultável", "Vegetação"],
  datasets: [
    { data: [500, 200], backgroundColor: ["#42A5F5", "#66BB6A"] }
  ]
};

export default function Dashboard() {
  return <Pie data={data} />;
}