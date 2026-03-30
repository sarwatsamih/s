function typeWriter(elementId, text, speed, isLink = false, linkHref = "") {
    let index = 0;
    const element = document.getElementById(elementId);
    element.classList.add("typewriter");

    // Clear any existing content
    element.innerHTML = "";
    
    // Create element for text
    let target;
    if (isLink) {
        target = document.createElement("a");
        target.href = linkHref;
        target.target = "_blank";
        target.style.textDecoration = "none";
        target.style.color = "inherit";
        target.style.fontWeight = "500";
        target.style.transition = "all 0.3s ease";
        
        // Add hover effect for links
        target.addEventListener("mouseenter", () => {
            target.style.color = "#667eea";
        });
        target.addEventListener("mouseleave", () => {
            target.style.color = "inherit";
        });
    } else {
        target = document.createElement("span");
    }
    
    element.appendChild(target);

    // Smooth fade-in when typing starts
    requestAnimationFrame(() => {
        element.classList.add("active");
    });

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add cursor blink effect
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .typewriter span::after {
        content: '|';
        animation: blink 0.7s step-end infinite;
        margin-left: 2px;
    }
    
    .typewriter.active span::after {
        content: '|';
    }
`;
document.head.appendChild(style);

// Initialize typewriter effects when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    // Main name with slower speed for dramatic effect
    typeWriter("typewriter1", "Sarwat Samih Yasin", 80);
    
    // Contact links
    setTimeout(() => {
        typeWriter("typewriter2", "Telegram: @barzaniii15", 60, true, "https://t.me/barzaniii15");
    }, 500);
    
    setTimeout(() => {
        typeWriter("typewriter3", "Email: sarwatsamih1@gmail.com", 60, true, "mailto:sarwatsamih1@gmail.com");
    }, 1200);
    
    // Add smooth scroll reveal for social section
    const socialSection = document.querySelector('.social-section');
    if (socialSection) {
        socialSection.style.opacity = '0';
        socialSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            socialSection.style.transition = 'all 0.6s ease-out';
            socialSection.style.opacity = '1';
            socialSection.style.transform = 'translateY(0)';
        }, 2000);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
