

export default function Navbar() {

    const navItems = ["Prizes", "Tracks", "Timeline", "Sponser"];

  return (
    <nav className="w-full p-4 bg-gray-200">
       <h1 className="text-2xl font-bold">Innerve - X</h1>
       <ul className="flex space-x-4">
         {navItems.map((item) => (
           <li key={item}>
             <a href="#" className="text-gray-700 hover:text-gray-900">
               {item}
             </a>
           </li>
         ))}
       </ul>
    </nav>
  );
}