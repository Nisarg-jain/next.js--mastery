import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

export default function Navbar() {
  console.log("Navbar rendered");

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
      <div className="font-bold text-lg">My Brand</div>
      <NavLinks />
      <NavSearch />
    </header>
  );
}