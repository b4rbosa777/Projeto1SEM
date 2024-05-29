document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.sidebar ul li');
    const contentItems = document.querySelectorAll('.content-item');

    items.forEach(item => {
        item.addEventListener('click', function () {
            const contentId = this.getAttribute('data-content');
            
            contentItems.forEach(contentItem => {
                if (contentItem.id === contentId) {
                    contentItem.style.display = 'block';
                } else {
                    contentItem.style.display = 'none';
                }
            });
        });
    });
});
