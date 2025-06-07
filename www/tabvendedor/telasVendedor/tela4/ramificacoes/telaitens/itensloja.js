function mostrarEditar(bloco) {
    const btn = bloco.querySelector('.item-editar');
    if (btn) btn.style.display = 'inline-block';
}

function editarItem() {
    alert('Editar item!');
}