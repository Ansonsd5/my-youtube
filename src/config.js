const sidebarConfig = [
    {
      id: 'home',
      label: 'Home',
      icon: 'home',
      link: '/home',
    },
    {
      id: 'trending',
      label: 'Trending',
      icon: 'fire',
      link: '/trending',
    },
    {
      id: 'subscriptions',
      label: 'Subscriptions',
      icon: 'subscriptions',
      link: '/subscriptions',
    },
    {
      id: 'library',
      label: 'Library',
      icon: 'video_library',
      link: '/library',
    },
    {
      id: 'history',
      label: 'History',
      icon: 'history',
      link: '/history',
    },
    {
      id: 'playlist',
      label: 'Your Playlist',
      icon: 'playlist_play',
      link: '/playlist',
    },
    {
      id: 'watchLater',
      label: 'Watch Later',
      icon: 'watch_later',
      link: '/watch-later',
    },
    // Add more sections as needed
  ];
  
  // You can also have a separate configuration for user-related actions
  const userConfig = [
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
      link: '/settings',
    },
    {
      id: 'help',
      label: 'Help',
      icon: 'help',
      link: '/help',
    },
    // Add more user actions
  ];
  
  export { sidebarConfig, userConfig };
  