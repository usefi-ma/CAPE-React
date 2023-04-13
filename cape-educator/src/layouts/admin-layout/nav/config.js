// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Banner',
    path: '/banner',
    icon: icon('ic_blog'),
  },
  {
    title: 'Executive',
    path: '/executivedashboard',
    icon: icon('ic_user'),
  },
  {
    title: 'Research',
    path: '/researchdashboard',
    icon: icon('ic_blog'),
  },
  {
    title: 'Conference',
    path: '/conferences',
    icon: icon('ic_lock'),
  },
  {
    title: 'Speakers',
    path: '/speakers',
    icon: icon('ic_user'),
  },  
  {
    title: 'Sponsers',
    path: '/sponsers',
    icon: icon('ic_user'),
  },
  {
    title: 'Contact',
    path: '/contactdashboard',
    icon: icon('ic_lock'),
  },
  {
    title: 'Contactbook',
    path: '/Contactbook',
    icon: icon('ic_lock'),
  },
];

export default navConfig;