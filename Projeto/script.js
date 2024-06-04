document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.sidebar li');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const contentPath = item.getAttribute('data-content');
            const contentId = contentPath.split('/')[1]; // Pega o nome do arquivo sem a extensão
            loadContent(contentPath, contentId);
        });
    });
});

function loadContent(contentPath, contentId) {
    const contentDiv = document.getElementById(contentId);

    fetch(`${contentPath}.html`)
        .then(response => response.text())
        .then(data => {
            const allContentItems = document.querySelectorAll('.content-item');
            allContentItems.forEach(item => item.style.display = 'none');
            
            contentDiv.innerHTML = data;
            contentDiv.style.display = 'block';

            // Carregar o CSS específico
            loadCSS(`${contentPath}.css`);
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

function loadCSS(cssPath) {
    // Remover CSS antigo
    const oldLink = document.querySelector('link[data-dynamic-css]');
    if (oldLink) {
        oldLink.parentNode.removeChild(oldLink);
    }

    // Adicionar novo CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    link.setAttribute('data-dynamic-css', 'true');
    document.head.appendChild(link);
}
