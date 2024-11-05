/* 前端:img */
/* 后端:译子(铬中云) */
document.addEventListener('DOMContentLoaded', function() {
    var link = document.querySelector('.btn-home');
    link.href = 'index.html';

    fetch('index.html')
        .then(response => {
            if (response.ok) {
                return;
            }
            throw new Error('index.html not found');
        })
        .catch(error => {
            link.href = 'index.php'; // 如果index.html不存在，则尝试index.php
        });
});
/* 前端:img */
/* 后端:译子(铬中云) */