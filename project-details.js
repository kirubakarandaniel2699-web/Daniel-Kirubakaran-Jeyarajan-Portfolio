const projectsData = {

    1: {
        title: "StayFit+ – Fitness Website",
        description: "A responsive fitness website designed to guide users through structured workout programs.",
        category: "Web Design",
        year: "2024",
        services: "UI/UX Design, Frontend Development",
        image: "images/Updated Logo.png",
        link: "https://kirubakarandaniel2699-web.github.io/Stayfit-/",

        overview: "Created a fitness-focused website that helps users explore workout programs in a structured and engaging way.",

        research: "Analyzed fitness websites and observed that users prefer quick access to workout plans and simple navigation.",

        problem: "Users struggled to find structured workout plans and navigate complex fitness websites.",

        solution: "Designed a clean interface with categorized sections, strong CTAs, and responsive layout.",

        process: [
            "User research & competitor analysis",
            "Wireframing in Figma",
            "UI design & prototyping",
            "Frontend development"
        ],

        features: [
            "Clean UI",
            "Workout categories",
            "Responsive design",
            "Easy navigation"
        ],

        technologies: ["HTML", "CSS", "JavaScript", "Figma"]
    },

    2: {
        title: "Flower Festival – Event Website",
        description: "A visually engaging event website.",
        category: "Event Website",
        year: "2024",
        services: "UI/UX Design",
        image: "images/1.png",
        link: "https://kirubakarandaniel2699-web.github.io/Flowersfestival-Test/",

        overview: "Designed a website to showcase festival details and events clearly.",

        research: "Users need clear schedules and visual highlights.",

        problem: "Users couldn’t easily access event details.",

        solution: "Structured content with clear sections and visuals.",

        process: [
            "Research event websites",
            "Created wireframes",
            "Designed UI",
            "Responsive layout"
        ],

        features: [
            "Event schedule",
            "Attractive UI",
            "Mobile responsive"
        ],

        technologies: ["Figma", "HTML", "CSS"]
    },

    3: {
        title: "Captured Dreams Studio",
        description: "Photography portfolio website.",
        category: "Portfolio Website",
        year: "2024",
        services: "UI/UX Design, Frontend",
        image: "images/Image16.png",
        link: "https://kirubakarandaniel2699-web.github.io/cd-studio/",

        overview: "A visually driven portfolio website focusing on photography showcase.",

        research: "Minimal UI works best for photography.",

        problem: "Photographers lacked clean portfolio websites.",

        solution: "Created image-focused minimal design.",

        process: [
            "Research portfolio trends",
            "Wireframe layout",
            "Design UI",
            "Develop frontend"
        ],

        features: [
            "Image-first layout",
            "Minimal UI",
            "Responsive gallery"
        ],

        technologies: ["HTML", "CSS", "JavaScript"]
    },

    4: {
        title: "Menxpress – Men’s Boutique",
        description: "E-commerce fashion website.",
        category: "E-Commerce",
        year: "2024",
        services: "UI/UX, WordPress",
        image: "images/Menxpress.png",
        link: "https://dev-menxpress.pantheonsite.io/",

        overview: "Modern fashion e-commerce platform.",

        research: "Users prefer simple browsing and filtering.",

        problem: "Cluttered layouts reduced usability.",

        solution: "Clean layout with filtering system.",

        process: [
            "Competitor analysis",
            "User flow design",
            "UI design",
            "WordPress development"
        ],

        features: [
            "Product filtering",
            "Clean UI",
            "Smooth checkout"
        ],

        technologies: ["WordPress", "Figma"]
    },

    5: {
        title: "The Malabar Ocean",
        description: "Restaurant website.",
        category: "Restaurant Website",
        year: "2024",
        services: "UI/UX, WordPress",
        image: "images/Restaurant.png",
        link: "https://dev-the-malabar-ocean.pantheonsite.io/",

        overview: "Luxury restaurant website design.",

        research: "Users are influenced by visuals.",

        problem: "Restaurants lacked immersive websites.",

        solution: "Used visuals + clean layout.",

        process: [
            "Research restaurant UI",
            "Design layout",
            "Visual storytelling",
            "Build in WordPress"
        ],

        features: [
            "Menu display",
            "Luxury UI",
            "Responsive"
        ],

        technologies: ["WordPress", "Elementor"]
    },

    6: {
        title: "StayFit+ Mobile App",
        description: "Fitness tracking app.",
        category: "Mobile App",
        year: "2024",
        services: "UI/UX Design",
        image: "images/weekly.png",
        link: "https://www.figma.com/proto/uBTe4rfdBGkchVetUhoCnD/Stayfit-Mobile-Application-Design?node-id=500-6182&t=W4T4SUQA8SnM0MQL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=356%3A5747&show-proto-sidebar=1",

        overview: "Simple fitness tracking app.",

        research: "Users drop apps due to complexity.",

        problem: "Apps were too complicated.",

        solution: "Minimal UI with tracking.",

        process: [
            "User research",
            "Wireframes",
            "Prototype design",
            "User testing"
        ],

        features: [
            "Workout tracking",
            "Progress charts",
            "Simple UI"
        ],

        technologies: ["Figma"]
    }

};

function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function loadProject() {
    const id = getProjectId();
    const project = projectsData[id];

    if (!project) {
        document.body.innerHTML = "<h2 style='text-align:center'>Project Not Found</h2>";
        return;
    }

    document.getElementById("heroTitle").innerText = project.title;
    document.getElementById("projectTitle").innerText = project.title;
    document.getElementById("projectDescription").innerText = project.description;
    document.getElementById("projectCategory").innerText = project.category;
    document.getElementById("projectYear").innerText = project.year;
    document.getElementById("projectServices").innerText = project.services;
    document.getElementById("projectOverview").innerText = project.overview;
    document.getElementById("projectProblem").innerText = project.problem;
    document.getElementById("projectSolution").innerText = project.solution;
    document.getElementById("mainImage").src = project.image;
    document.getElementById("projectLink").href = project.link;

    // Process
    const processList = document.getElementById("processList");
    processList.innerHTML = "";
    project.process.forEach(p => {
        const li = document.createElement("li");
        li.innerText = p;
        processList.appendChild(li);
    });

    // Features
    const featuresList = document.getElementById("featuresList");
    featuresList.innerHTML = "";
    project.features.forEach(f => {
        const li = document.createElement("li");
        li.innerText = f;
        featuresList.appendChild(li);
    });

    // Technologies
    const techTags = document.getElementById("techTags");
    techTags.innerHTML = "";
    project.technologies.forEach(t => {
        const span = document.createElement("span");
        span.className = "tech-tag";
        span.innerText = t;
        techTags.appendChild(span);
    });
}

loadProject();