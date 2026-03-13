export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <span className="text-purple-500">Portofolio</span>
      </h1>

      <ul className="flex gap-10 text-gray-300 font-medium">
        <li className="hover:text-purple-500 cursor-pointer">Home</li>

        <li className="hover:text-purple-500 cursor-pointer">About</li>

        <li className="hover:text-purple-500 cursor-pointer">Project</li>

        <li className="hover:text-purple-500 cursor-pointer">Blog</li>
      </ul>

      <button className="border border-purple-500 px-6 py-2 rounded-lg text-purple-400 hover:bg-purple-600 hover:text-white transition">
        Contact Me
      </button>
    </nav>
  );
}
