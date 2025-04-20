const tabs = document.querySelectorAll('.event-tab');
const events = document.querySelectorAll('.event-details');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Hide all events
        events.forEach(e => e.classList.remove('active'));

        // Activate clicked tab
        tab.classList.add('active');
        // Show the corresponding event
        const eventId = tab.getAttribute('data-event');
        document.getElementById(eventId).classList.add('active');
    });
});
