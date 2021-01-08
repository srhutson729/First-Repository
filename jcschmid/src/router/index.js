import About from '../components/About';
import Blog from '../components/Blog';
import Book from '../components/Book';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Patreon from '../components/Patreon';
import Research from '../components/Research';
import Videos from '../components/Videos';

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/book",
    component: Book,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/patreon",
    component: Patreon,
  },
  {
    path: "/research",
    component: Research,
  },
  {
    path: "/videos",
    component: Videos,
  },
];
