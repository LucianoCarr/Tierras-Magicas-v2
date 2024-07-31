document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to the clicked tab
      tab.classList.add('active');

      // Hide all tab contents
      tabContents.forEach(content => content.classList.remove('active'));
      // Show the content corresponding to the clicked tab
      document.getElementById(tab.getAttribute('data-target')).classList.add('active');
    });
  });
});
