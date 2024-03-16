import logo from './bowlingLogo.png';
function Header(props: any) {
  return (
    <header className="row header navbar navbar-dark bg-dark">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" height="100px" />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
        <p className="text-white">testing 1, 2, 3</p>
      </div>
    </header>
  );
}

export default Header;
