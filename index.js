document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll(".image-text-container");
    containers.forEach(container => {
        container.classList.add("hidden");
    });
    void containers[0].offsetWidth;
    containers.forEach(container => {
        container.classList.remove("hidden");
    });
    const navButtons = document.querySelectorAll(".nav-button");    
    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            document.querySelectorAll(".container").forEach(section => {
                section.classList.add("hidden");
            });
            void targetSection.offsetWidth;
            targetSection.classList.remove("hidden");
            document.body.prepend(targetSection);
            this.classList.add("active");
            setTimeout(() => {
                this.classList.remove("active");
            }, 300);
        });
    });
});