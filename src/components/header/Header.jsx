import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import StarredNavLink from './StarredNavLink';
import SearchInput from './SearchInput';
import './header.scss';

const Header = ({ searchMovies }) => {
  return (
    <header>
      <Link to="/" data-testid="home" onClick={() => searchMovies('')}>
        <i className="bi bi-film" />
      </Link>

      <nav>
        <StarredNavLink />
        <NavLink to="/watch-later" className="nav-fav">
          watch later
        </NavLink>
      </nav>

      <SearchInput onSearch={searchMovies} />
    </header>
  );
}

export default Header;
