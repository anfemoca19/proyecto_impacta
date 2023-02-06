import clsx from "clsx";
import styles from "../MenuTabs/MenuTabs.module.scss";
export default function MenuTab() {
  return (
    <>
      <div className={clsx("container")}>
        <h2>Example tab 2 (using standard nav-tabs)</h2>
      </div>

      <div id="exTab2" className={clsx("container")}>
        <ul className={clsx("nav nav-tabs")}>
          <li className={clsx("active")}>
            <a href="#1" data-toggle="tab">
              Overview
            </a>
          </li>
          <li>
            <a href="#2" data-toggle="tab">
              Without clearfix
            </a>
          </li>
          <li>
            <a href="#3" data-toggle="tab">
              Solution
            </a>
          </li>
        </ul>
        <div className={clsx("tab-content")}>
          <div className={clsx("tab-pane active")} id="1">
            <h3>Standard tab panel created on bootstrap using nav-tabs</h3>
          </div>
          <div className={clsx("tab-pane")} id="2">
            <h3>
              Notice the gap between the content and tab after applying a
              background color
            </h3>
          </div>
          <div className={clsx("tab-pane")} id="3">
            <h3>add clearfix to tab-content (see the css)</h3>
          </div>
        </div>
      </div>
    </>
  );
}
