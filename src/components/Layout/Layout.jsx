const Layout = ({ navBar, children, sideBar }) => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-2 p-4 ">{navBar}</div>
        <div className="col-8 p-4">{children}</div>
        <div className="col-2 ">{sideBar}</div>
      </div>
    </div>
  );
};

export default Layout;
