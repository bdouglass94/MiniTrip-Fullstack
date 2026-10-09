import { NavLink } from "react-router";

function Navbar() {
  return (
    // NavLink highlights the link matching the current URL.
    <nav className="mb-8 flex gap-6">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-blue-700 underline"
            : "font-medium text-gray-600 hover:text-blue-600"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/trips"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-blue-700 underline"
            : "font-medium text-gray-600 hover:text-blue-600"
        }
      >
        My Trips
      </NavLink>
    </nav>
  );
}

export default Navbar;