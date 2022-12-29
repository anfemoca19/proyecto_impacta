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
import CircleColor from "../CircleColor/Circle";
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
    <div className="container-fluid d-flex align-items-center rounded container-account-graph mb-3 p-3">
      <div className="row ">
        <div className=" d-flex mb-3  me-3 ms-3">
          <CircleColor className="circle-blue-sm me-2 " />
          <span className="style-font-chart">
            Usuarios activos en la plataforma
          </span>
        </div>

        <div className=" style-graph-colaboradores d-flex align-items-center  ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={400}
              height={200}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis hide={true} />
              <CartesianGrid stroke="#fff" strokeDashoffset="5 5" />
              <Tooltip content={<CustomTooltip />} />
              {/* <Legend wrapperStyle={{ fontSize: "10px" }} /> */}

              <Line
                type="monotone"
                dataKey="line1"
                name="Usuarios activos en la plataforma"
                stroke="#fff"
                fill="#2985e2"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="line2"
                strokeDasharray="7 7"
                name="Tiempo de actividad de usuarios en la plataforma"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="  d-flex  me-3 ms-3">
          <CircleColor className="circle-green-sm me-2 " />
          <span className="style-font-chart">
            Tiempo de actividad de usuarios en la plataforma
          </span>
        </div>
      </div>
    </div>
  );
}
