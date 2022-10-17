let notifsContainer = document.getElementById('notifications-container');
let notifs = notifsContainer.querySelectorAll('.notif-row');

// ** Set new notifications count

let notifCount = document.querySelectorAll('.notif-row--new').length;
let notifCountDisplay = document.querySelector('.notif-header__count');
updateNotifCount();

// ** Add event listener for all notifications to toggle read-unread state
// ** After every toggle, the notification count display is updated using the function updateNotifCount()

notifs.forEach((el) => {
    el.addEventListener('click', () => {
        if (el.classList.contains('notif-row--new')) {
            notifCount--;
        } else {
            notifCount++;
        }
        toggleState(el);
        updateNotifCount();
    });
});

// Add event listener to "Mark all as read" for resetting the notif count and remove all .notif-row--new class

const markAllRead = document.querySelector('.notif-header__read a');
markAllRead.addEventListener('click', () => {
    notifs.forEach((el) => {
        if (el.classList.contains('notif-row--new')) {
            toggleState(el);
        }
    });
    notifCount = 0;
    updateNotifCount();
});

// ** Stop event propagation when clicking links and images in notifications   
let links = document.querySelectorAll('a, img');
links.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})

// ** Helper functions

function toggleState(el) {
    el.classList.toggle('notif-row--new');
    el.children[1].children[0].querySelector('.notif-row__dot').classList.toggle('notif-row__dot--hidden');
}

function updateNotifCount() {
    notifCountDisplay.textContent = notifCount;
}