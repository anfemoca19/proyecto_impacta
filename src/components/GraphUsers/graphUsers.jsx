import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../GraphUsers/graphUsers.scss";

/**
 * const dataCard = [{name: 'john', description: 'pipe', tel: '12'}, {name: 'yoli', description: 'yolisti'}]
 * {dataCard.map(card => {
 *  return <Card info={card} />
 * })}
 *
 * const Card = ({info}) => {
 *  const {name, description} = info
 *  return (
 *   <div>{name}</div>
 *  )
 * }
 */

const data = [
  { line1: 4000, line2: 2400 },
  { line1: 3000, line2: 1398 },
  { line1: 2000, line2: 9800 },
  { line1: 2780, line2: 3908 },
  { line1: 1890, line2: 4800 },
  { line1: 2390, line2: 3800 },
  { line1: 3490, line2: 4300 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p>{`Usuarios Activos : ${payload[0].value}`}</p>
        <p>{`Actividad de usuarios : ${payload[1].value}%`}</p>
      </div>
    );
  }

  return null;
};
export default function GraphUsers() {
  return (
    <div className="container d-flex justify-content-between align-items-center rounded container-account mb-3 p-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={400}
          height={200}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis hide={true} />
          <CartesianGrid stroke="#fff" />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: "10px" }} />

          <Line
            type="monotone"
            dataKey="line1"
            name="Usuarios activos en la plataforma"
            stroke="#fff"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="line2"
            strokeDasharray="5 5"
            name="Tiempo de actividad de usuarios en la plataforma"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
