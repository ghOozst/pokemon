import Navigation from './Navigation.component';

const Header = () => {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <span className="font-bold">Pokemon</span>
      <Navigation />
    </header>
  );
};

export default Header;
