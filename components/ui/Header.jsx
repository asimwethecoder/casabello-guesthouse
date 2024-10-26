import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Casabello Guest House
            </h1>
          </div>
          <Navigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;
