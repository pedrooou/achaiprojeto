   const params = new URLSearchParams(window.location.search);
    const tela = params.get('tela');
    if (tela && document.getElementById(tela)) {
      document.getElementById(tela).style.display = 'block';
    }