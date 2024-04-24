// JS for personal information dynamically
document.addEventListener("DOMContentLoaded", function() {
    // Define personal information
    const personalInfo = {
        name: "Sibusiso Khoza",
        bio: "I always see my self as a Digital Architect with a Google UX Design Professional Certificate and Meta Introduction to Frontend Development Certificate. Proficient in HTML, CSS, and Bootstrap, I specialize in creating dynamic user interfaces. Skilled in Figma, I excel in user research, UX design, wireframing, and prototyping. My commitment to user-centric design is reflected in my ability to merge creativity with technical prowess, crafting seamless digital experiences.",
        projects: ["Project 1", "Project 2", "Project 3"],
        address: "Block 8 Thulani, 36 Street, Snakepark, Soweto, 1863",
        phone: "0780296288",
        email: "sibusisok59@gmail.com",
        socialLinks: {
            twitter: "https://www.twitter.com/yourusername",
            linkedin: "https://www.linkedin.com/in/sibusiso-khoza",
            github: "https://www.github.com/sbukhoza"
        }
    };

    // Personal information
    document.querySelector(".my-name").innerText = personalInfo.name;
    document.querySelector(".paragraph").innerText = personalInfo.bio;
    
    const projectsSection = document.querySelector("#about .projects");
    personalInfo.projects.forEach(project => {
        const projectItem = document.createElement("li");
        projectItem.innerText = project;
        projectsSection.appendChild(projectItem);
    });

    // Contact information
    document.querySelector(".address").innerHTML = personalInfo.address.replace(/\n/g, "<br>");
    document.querySelector(".social-links li a[href^='https://www.twitter.com/']").href = personalInfo.socialLinks.twitter;
    document.querySelector(".social-links li a[href^='https://www.linkedin.com/']").href = personalInfo.socialLinks.linkedin;
    document.querySelector(".social-links li a[href^='https://www.github.com/']").href = personalInfo.socialLinks.github;
    document.querySelector("footer p:nth-of-type(2)").innerText = `Phone: ${personalInfo.phone}`;

    // Contact form
    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", function(event) {
        const name = document.querySelector("#name").value;
        const surname = document.querySelector("#surname").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        if (!name || !surname || !emailPattern.test(email) || !message) {
            event.preventDefault();
            alert("Please fill out all fields with valid information.");
        }
    });
});