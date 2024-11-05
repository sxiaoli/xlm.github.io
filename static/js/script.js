// script.js
document.addEventListener('DOMContentLoaded', function() {
    const announcementContent = document.querySelector('.announcement-content');
    let currentPage = 0;
    const announcements = [
        '<a href="https://172.lot-ml.com/h5orderEn/index?pudID=52a3ed15bb6a7213&userid=a4061d1ff6584527" target="_blank">山东联通专属流量卡｜29元80G+100分钟，只发山东</a>',
        '<a href="https://172.lot-ml.com/h5orderEn/index?pudID=a815b3887ab3522a&userid=a4061d1ff6584527" target="_blank">山东电信专属流量卡｜29元80G+100分钟，只发山东</a>',
       
        // 更多公告...
    ];

    function showAnnouncement(index) {
        announcementContent.innerHTML = announcements[index];
    }

    function autoSwitchAnnouncement() {
        showAnnouncement(currentPage);
        currentPage = (currentPage + 1) % announcements.length;
    }

    // 每5秒钟切换一次公告
    setInterval(autoSwitchAnnouncement, 5000);

    // 初始化显示第一个公告
    showAnnouncement(currentPage);
});