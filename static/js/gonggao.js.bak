document.addEventListener("DOMContentLoaded", function() {
    const announcementList = document.querySelector('.announcement-list');
    const announcements = announcementList.querySelectorAll('li');

    // Clone the list items to create a seamless loop
    announcements.forEach(announcement => {
        announcementList.appendChild(announcement.cloneNode(true));
    });
});
