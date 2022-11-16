const themeSettings = evt => {
    const body = document.body
    const theme = evt.currentTarget.selectedOptions[0].value
  
    switch (theme) {
      case 'light':
        body.setAttribute('data-theme', 'light');
        break;
      case 'dark':
        body.setAttribute('data-theme', 'dark');
        break;
      case 'auto':
      default:
        body.setAttribute('data-theme', 'auto');
        break;
    }
  }
  
  const themeToggler = document.getElementById('theme-toggler')
  
  themeToggler.addEventListener('change', themeSettings)