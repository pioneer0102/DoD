import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'menu',
    title: 'Menu',
    // subtitle: 'Unique dashboard designs',
    type: 'group',
    // icon: 'heroicons-outline:home',
    translate: 'MENU',
    children: [
      {
        id: 'home',
        title: 'Home',
        type: 'item',
        icon: 'heroicons-outline:home',
        url: '/menu/home',
      },
      {
        id: 'latest news',
        title: 'Latest News',
        type: 'item',
        icon: 'heroicons-outline:newspaper',
        url: '/menu/news',
      },
      {
        id: 'explore',
        title: 'Explore',
        type: 'item',
        icon: 'heroicons-outline:location-marker',
        url: '/menu/explore',
      },
      {
        id: 'files',
        title: 'Files',
        type: 'item',
        icon: 'heroicons-outline:document-text',
        url: '/menu/files',
      },
      {
        id: 'galary',
        title: 'Galary',
        type: 'item',
        icon: 'feather:image',
        url: '/menu/galary',
      },
      {
        id: 'events',
        title: 'Events',
        type: 'item',
        icon: 'heroicons-outline:calendar',
        url: '/menu/events',
      },
    ]
  },
  {
    id: 'dod',
    title: 'DoD',
    // subtitle: 'Unique dashboard designs',
    type: 'group',
    // icon: 'heroicons-outline:home',
    translate: '[DoD] Gaming Community',
    children: [
      {
        id: 'digital',
        title: 'Digital Combat Simulator',
        type: 'item',
        // icon: 'heroicons-outline:home',
        url: '/dod/digital',
      },
      {
        id: 'arma3',
        title: 'ArmA 3',
        type: 'item',
        // icon: 'heroicons-outline:newspaper',
        url: '/dod/arma3',
      },
      {
        id: 'battlefield',
        title: 'Battlefield Series',
        type: 'item',
        // icon: 'heroicons-outline:location-marker',
        url: '/dod/battlefieldseries',
      },
      {
        id: 'warship',
        title: 'World Of Warships',
        type: 'item',
        // icon: 'heroicons-outline:document-text',
        url: '/dod/worldofwarships',
      },
      {
        id: 'callofduty',
        title: 'Call Of Duty Series',
        type: 'item',
        // icon: 'feather:image',
        url: '/dod/callofdutyseries',
      },
      {
        id: 'rainbowsixsiege',
        title: 'Rainbow Six Siege',
        type: 'item',
        // icon: 'heroicons-outline:calendar',
        url: '/dod/rainbowsixsiege',
      },
    ]
  }
];

export default navigationConfig;
