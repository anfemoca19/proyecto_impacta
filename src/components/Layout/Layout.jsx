const Layout = ({ navBar, children, sideBar }) => {
  return (
    <div className="container-fluid divider-top">
      <div className="row">
        <div className="col-2 divider-right p-4 ">{navBar}</div>
        <div className="col-6  divider-right p-4">{children}</div>
        <div className="col-4 ">{sideBar}</div>
      </div>
    </div>
  );
};

export default Layout;
