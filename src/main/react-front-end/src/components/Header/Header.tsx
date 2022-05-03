import HeaderDropDownDivider from "./HeaderDropDownDivider";
import HeaderItem from "./HeaderItem";
import Language from './Language';
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  console.log("render header")
  return (

    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="#">
              <i className="bi bi-search" />
            </a>
          </li>{/* End Search Icon*/}
          <Language />
          <li className="nav-item dropdown pe-3">
            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <img src="/assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
              <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
            </a>{/* End Profile Iamge Icon */}
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
              </li>
              <HeaderDropDownDivider />
              <HeaderItem titre="My Profile" class="bi-person" url="/" />
              <HeaderDropDownDivider />
              <HeaderItem titre="Account Settings" class="bi-gear" url="/" />
              <HeaderDropDownDivider />
              <HeaderItem titre="Need Helps ?" class="bi-question-circle" url="/" />
              <HeaderDropDownDivider />
              <HeaderItem titre="Sign Out" class="bi-box-arrow-right" url="/" />
            </ul>{/* End Profile Dropdown Items */}
          </li>{/* End Profile Nav */}
        </ul>
      </nav>{/* End Icons Navigation */}
    </header>
  );
};

export default Header;