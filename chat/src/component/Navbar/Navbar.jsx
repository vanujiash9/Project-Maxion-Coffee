import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";

const Menus = [
  { id: 1, name: "HOME", link: "#" },
  { id: 2, name: "SERVICE", link: "#" },
  { id: 3, name: "ABOUT", link: "#" },
];

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white'>
      <div className='container py-2'>
        <div className='flex justify-between items-center'>
          {/* Logo section */}
          <div className='flex items-center gap-3'>
            <a href="##" className='font-bold text-2xl sm:text-xl flex items-center gap-3 tracking-wider font-cursive'>
              <img src={Logo} alt="Logo" className='w-14' />
              Maxion Coffee
            </a>
          </div>

          {/* Links section */}
          <div className='flex items-center gap-4'>
            <ul className='hidden sm:flex items-center gap-4'>
              {Menus.map((data) => (
                <li key={data.id}>
                  <a href={data.link} className='inline-block text-xl py-2 px-4 text-white/70 hover:text-white duration-200'>
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className='bg-primary/70 px-4 py-2 rounded-full hover:bg-primary duration-200 flex items-center gap-2'>
              ORDER <FaCoffee className='text-xl' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
