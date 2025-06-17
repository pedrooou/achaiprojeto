function abrirPopupEditar(btn) {
    const bloco = btn.closest('.item-bloco');
    const nome = bloco.querySelector('.item-nome').textContent;
    const descricao = bloco.querySelector('.item-descricao') ? bloco.querySelector('.item-descricao').textContent : '';
    const preco = bloco.querySelector('.item-preco').textContent.replace(/[^\d,]/g, '').replace(',', '.');
    const imgSrc = bloco.querySelector('img').src;

    document.getElementById('popup-titulo').textContent = 'Editar Item';
    document.getElementById('input-nome').value = nome;
    document.getElementById('input-descricao').value = descricao;
    document.getElementById('input-preco').value = preco;
    document.getElementById('preview-imagem').innerHTML = `<img src="${imgSrc}" alt="preview">`;
    document.getElementById('popup-editar').style.display = 'flex';

    // Salva referência do bloco para edição
    document.getElementById('form-editar-item').dataset.editing = bloco.dataset.id || '';
    document.getElementById('form-editar-item').dataset.bloco = bloco ? bloco.outerHTML : '';
}

function abrirPopupAdicionar() {
    document.getElementById('popup-titulo').textContent = 'Adicionar Novo Item';
    document.getElementById('input-nome').value = '';
    document.getElementById('input-descricao').value = '';
    document.getElementById('input-preco').value = '';
    document.getElementById('preview-imagem').innerHTML = '';
    document.getElementById('popup-editar').style.display = 'flex';
    document.getElementById('form-editar-item').dataset.editing = '';
}

// ...restante igual...