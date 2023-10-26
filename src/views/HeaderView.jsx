import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header>
      <Link to={"/home"} className="h-logo">
        <img src="/c-logo.png" alt="logo" />
        <h3 className="text-white">Coinmania</h3>
      </Link>

      <div className="links">
        <NavLink to={"/"}>Giriş Yap</NavLink>
        <NavLink to={"/home "}>Anasayfa</NavLink>
      </div>
    </header>
  );
};

export default HeaderView;
