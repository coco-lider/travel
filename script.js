document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const dropdownMenus = document.querySelectorAll('.has-dropdown');
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
        
        // Toggle icon between bars and times
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Mobile dropdown toggle
    dropdownMenus.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const submenu = dropdown.querySelector('.dropdown');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                this.classList.toggle('active');
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                dropdown.classList.toggle('active');
            }
        });
    });

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });

    // Sticky header
    const header = document.querySelector('.main-header');
    const topBar = document.querySelector('.top-bar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const topBarHeight = topBar.offsetHeight;

        if (currentScroll > topBarHeight) {
            header.classList.add('sticky');
            topBar.style.display = 'none';
        } else {
            header.classList.remove('sticky');
            topBar.style.display = 'block';
        }

        if (currentScroll > lastScroll && currentScroll > topBarHeight) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
});