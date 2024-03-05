

function Navbar(){
  return (
    <>
      <nav className="navbar navbar-expand-lg Nav_main container-fluid">
        <div className="container gx-0">
          <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="icons">
                <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png "
                  width="28" height="28" alt="" title="" className="img-small"
                />
              </div>

              {/* <button className="btn1" type="button">
                Login
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

