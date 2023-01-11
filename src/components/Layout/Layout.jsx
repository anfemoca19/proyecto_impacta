const Layout = ({ navBar, children, sideBar }) => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-2 p-4 ">{navBar}</div>
        <div className="col-6 p-4">{children}</div>
        <div className="col-4 ">{sideBar}</div>
      </div>
    </div>
  );
};

export default Layout;
