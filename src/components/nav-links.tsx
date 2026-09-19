export default function NavLinks() {
  console.log("NavLinks rendered");

  return (
    <nav className="flex gap-4 text-sm font-medium text-blue-600 dark:text-blue-400">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}