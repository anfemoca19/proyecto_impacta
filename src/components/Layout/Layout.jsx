import clsx from "clsx";
import styles from "../Layout/Layout.module.scss";
const Layout = ({ navBar, children, sideBar }) => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className={clsx("col-2 p-4", styles["style-navbar"])}>
          {navBar}
        </div>
        <div className={clsx("col-8 p-4")}>{children}</div>
        <div className={clsx("col-2 p-4", styles["style-sidebar"])}>
          {sideBar}
        </div>
      </div>
    </div>
  );
};

export default Layout;
