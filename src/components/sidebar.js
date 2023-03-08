import React from "react";

function Sidebar() {
  return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#sidebar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">
              <span>HUMAN</span>SOURCE
            </a>
            <ul className="user-menu">
              <li className="dropdown pull-right">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  <svg className="glyph stroked male-user">
                    <use xlinkHref="#stroked-male-user" />
                  </svg>
                  Admin <span className="caret" />
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="/">
                      <svg className="glyph stroked male-user">
                        <use xlinkHref="#stroked-male-user" />
                      </svg>
                      Hồ sơ
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <svg className="glyph stroked cancel">
                        <use xlinkHref="#stroked-cancel" />
                      </svg>
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container-fluid */}
      </nav>
      <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
        <form role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
        <ul className="nav menu">
          <li className="active">
            <a href="index.html">
              <svg className="glyph stroked dashboard-dial">
                <use xlinkHref="#stroked-dashboard-dial" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="thanhvien.html">
              <svg className="glyph stroked male user">
                <use xlinkHref="#stroked-male-user" />
              </svg>
              Manage member
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
