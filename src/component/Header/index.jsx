import NavbarTop from "../subComponent/NavbarTop";

const Header = (props) => {
  return (
    <div>
      <NavbarTop setLogin={props.setLogin} loggedUser={props.loggedUser} setLogged={props.setLogged}/>
    </div>
  );
};
export default Header;
