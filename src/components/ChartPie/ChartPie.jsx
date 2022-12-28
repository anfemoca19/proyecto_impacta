import "./ChartPie.scss";

export default function ChartPie({
  percentage,
  color = "",
  remainingColor,
  size = "",
}) {
  return (
    <>
      <div
        className={`c100 p${percentage} blue`}
        style={{ fontSize: size, backgroundColor: remainingColor }}
      >
        <span>{percentage}%</span>
        <div className="slice">
          <div className="bar" style={{ borderColor: color }}></div>
          <div className="fill" style={{ borderColor: color }}></div>
        </div>
      </div>
    </>
  );
}
