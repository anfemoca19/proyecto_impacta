import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import "./dashboart.css";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container">
        <div class="row">
          <div class="col">
            <Navbar />
          </div>
          <div class="col-5">2 of 3 (wider)</div>
          <div class="col">3 of 3</div>
        </div>
      </div>
    </>
  );
}
