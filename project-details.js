const projectsData = {

    1: {
    title: "StayFit+ — Designing a Beginner-Friendly Fitness Experience",
    description: "A responsive fitness platform designed to help beginners start their journey with clarity, structured workouts, and a guided user experience.",
    category: "Web Design",
    year: "Apr 2026",
    services: "UI/UX·Frontend Development",
    role: "Designer & Developer",
    image: "images/Gymview.png",
    link: "https://kirubakarandaniel2699-web.github.io/Stayfit-/",

    overview: {
        title: "Designing clarity in a crowded fitness space",
        text: "StayFit+ was created to solve a common issue in fitness platforms — overwhelming users with too much information. The goal was to design a clean, structured experience that guides beginners toward taking action without confusion. By focusing on clarity, hierarchy, and mobile-first design, the platform enables users to quickly understand where to start and how to proceed."
    },

    research: {
        text: "To understand user behavior, I analyzed 8 popular fitness platforms and conducted interviews with 5 beginner users. The research revealed that most users felt overwhelmed within seconds due to cluttered layouts, excessive content, and unclear navigation paths.",
        cards: [
            { label: "Method", text: "Competitor analysis (8 platforms) + 5 user interviews" },
            { label: "Key Finding", text: "Users prefer quick access to structured workouts within 2 clicks" },
            { label: "Pain Point", text: "Cluttered UI and unclear CTAs caused early drop-offs" }
        ]
    },

    persona: {
        name: "Riya Sharma",
        role: "Working Professional, 27",
        emoji: "💪",
        tags: ["Beginner fitness enthusiast", "Works 9–6 daily", "Mobile-first user", "Limited attention span"],
        bio: "Riya is a working professional who wants to begin her fitness journey but feels overwhelmed by complex and content-heavy fitness websites. She prefers simple, guided experiences that help her start quickly without overthinking.",
        goals: [
            "Start a simple and structured workout routine",
            "Understand exercises without technical jargon",
            "Access workouts easily on mobile devices"
        ],
        frustrations: [
            "Too much information on landing pages",
            "Lack of clear starting point",
            "Confusing navigation and layout"
        ],
        quote: "I just want something simple that tells me where to start."
    },

    problem: "Users visiting fitness platforms were overwhelmed by excessive content, unclear navigation, and lack of direction. Beginners especially struggled to identify where to start, leading to high bounce rates and low engagement.",

    solution: "Designed a guided and structured homepage experience that leads users step-by-step — from a clear hero CTA to categorized workout programs and simplified navigation. The design reduces cognitive load and enables users to take action quickly.",

    process: [
        { num: "01", title: "Research & Competitive Analysis", desc: "Studied 8 fitness platforms to identify usability issues, navigation patterns, and content overload problems. Documented insights and opportunities for improvement." },
        { num: "02", title: "Wireframing", desc: "Created low-fidelity wireframes in Figma focusing on clear user flow from landing to workout selection. Validated structure with early feedback." },
        { num: "03", title: "Visual Design", desc: "Developed a bold and clean visual system using high contrast, strong typography, and minimal distractions to guide user attention effectively." },
        { num: "04", title: "Frontend Development", desc: "Built a fully responsive interface using HTML, CSS, and JavaScript with a focus on performance and smooth interactions." },
        { num: "05", title: "Testing & Refinement", desc: "Conducted usability testing with users and refined layout, CTA placement, and navigation to improve clarity and ease of use." }
    ],

    features: [
        { icon: "🗂️", title: "Structured Workout Categories", desc: "Users can easily find workouts based on goals like strength, cardio, or weight loss within two clicks." },
        { icon: "📱", title: "Mobile-First Experience", desc: "Optimized for mobile users with touch-friendly navigation and clear readability across devices." },
        { icon: "⚡", title: "Clear Call-to-Actions", desc: "Each section is designed to guide users toward the next step without confusion or hesitation." },
        { icon: "🎨", title: "Motivating Visual Design", desc: "A high-contrast and energetic design system encourages user engagement and builds trust." }
    ],

        colors: {
            intro: "The visual palette focuses on balancing energy and clarity. Dark tones establish trust and stability, while vibrant green highlights actions and progress. Generous whitespace ensures reduced cognitive load and better readability.",
            swatches: [
                { color: "#000000", name: "Black", hex: "#000000", role: "Primary text and card backgrounds" },
                { color: "#daa520", name: "Goldenrod", hex: "#daa520", role: "Primary CTA and highlights" },
                { color: "#43302E", name: "Old Burgundy", hex: "#43302E", role: "Background and spacing" },
                { color: "#D71717", name: "Red", hex: "#D71717", role: "Secondary text and UI elements" }
            ]
        },

    typography: [
        { sample: "Aa", font: "Calibri", sampleSize: "4rem", weight: "Bold 700", usage: "Headings, Hero Text, CTAs" },
        { sample: "Aa", font: "Calibri", sampleSize: "3rem", weight: "Regular 400", usage: "Body content and descriptions" }
    ],

    outcomes: {
        text: "The final design successfully delivers a simplified and engaging experience tailored for beginners. By focusing on clarity and structured navigation, users can now quickly understand and start their fitness journey without friction.",
        stats: [
            { num: "8+", label: "Competitor Platforms Analyzed" },
            { num: "5", label: "User Interviews Conducted" },
            { num: "3", label: "Design Iterations Completed" }
        ]
    },

    technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "Responsive Design"]
},

    2: {
        title: "Flower Festival — Designing an Intuitive Event Experience",
        description: "An event website designed to help visitors quickly access schedules, activities, and venue details while capturing the visual richness of a flower festival.",
        category: "Event Website",
        year: "Feb 2026",
        services: "UI/UX Design · Web Design",
        role: "UI/UX Designer",
        image: "images/1.png",
        link: "https://kirubakarandaniel2699-web.github.io/Flowersfestival-Test/",

        overview: {
            title: "Balancing visual storytelling with usability",
            text: "The Flower Festival website was designed to translate the energy and beauty of a real-world event into a digital format without compromising usability. Many event websites prioritize aesthetics but fail to deliver essential information clearly. This project focused on structuring content in a way that allows users to quickly find what they need while still experiencing the vibrancy of the festival."
        },

        research: {
            text: "To understand user expectations, I analyzed 6 event websites and conducted interviews with 4 potential visitors. The research revealed that users visit event websites with a clear purpose — such as checking schedules, locations, or activities — and tend to leave quickly if this information is not immediately accessible.",
            cards: [
                { label: "Method", text: "Competitor analysis (6 event websites) + 4 user interviews" },
                { label: "Key Finding", text: "Users expect schedules and key details within the first screen" },
                { label: "Pain Point", text: "Overly decorative layouts make essential information hard to find" }
            ]
        },

        persona: {
            name: "Anita Krishnan",
            role: "Working Professional & Event Planner, 30",
            emoji: "🌷",
            tags: ["Books decorations for events", "Busy schedule", "Mobile-first user", "Looks for quick decisions"],
            bio: "Anita is a working professional who frequently organizes small events like birthdays, family functions, and office celebrations. She prefers to quickly browse decoration options online and book services without long calls or confusion. She values clarity, pricing transparency, and visual previews before making a decision.",
            goals: [
                "Quickly explore bouquet and decoration options",
                "Understand pricing and packages clearly",
                "Book services without multiple follow-ups",
                "View real decoration samples before deciding"
            ],
            frustrations: [
                "No clear pricing or package details",
                "Lack of real images of past decoration work",
                "Too many steps to contact or book services",
                "Websites that look good but lack useful information"
            ],
            quote: "I don’t want to call and ask everything — just show me the options, price, and let me book."
        },

        problem: "Users visiting event websites struggled to find essential information such as schedules, activities, and venue details due to unstructured layouts and excessive focus on visuals, leading to frustration and early drop-offs.",

        solution: "Designed a clear content hierarchy that prioritizes essential information first — event dates, schedule, and location are immediately visible. Supporting visuals and storytelling elements are layered below to enhance the experience without distracting from usability.",

        process: [
            { num: "01", title: "User Research", desc: "Identified key user needs through competitor analysis and interviews, focusing on how users interact with event platforms." },
            { num: "02", title: "Information Architecture", desc: "Structured content to prioritize schedules, ticketing, and venue details at the top, followed by supporting content." },
            { num: "03", title: "Visual Design", desc: "Created a warm and vibrant visual system inspired by floral themes while maintaining clear separation between content sections." },
            { num: "04", title: "Responsive Design", desc: "Designed a mobile-first layout ensuring users can access key information quickly while on the move." }
        ],

        features: [
            { icon: "📅", title: "Accessible Event Schedule", desc: "Key event timings are placed prominently to help users plan their visit instantly." },
            { icon: "🗺️", title: "Clear Venue Details", desc: "Location and directions are integrated seamlessly for quick access and navigation." },
            { icon: "🌸", title: "Visual Storytelling", desc: "High-quality imagery enhances the festival experience without overwhelming the content." },
            { icon: "📱", title: "Mobile-Optimized Design", desc: "Ensures smooth browsing and quick information access across all devices." }
        ],

        colors: {
            intro: "The color palette is inspired by natural floral tones, combining vibrant accents with soft backgrounds to create a balance between visual appeal and readability.",
            swatches: [
                { color: "#1c5434", name: "Kaitoke Green", hex: "#1c5434", role: "Section Backgrounds" },
                { color: "#fef0f5", name: "Lavender Blush", hex: "#fef0f5", role: "Main Background" },
                { color: "#e4c464", name: "Yellow", hex: "#e4c464", role: "Button and Text Color" },
                { color: "#000000", name: "Black", hex: "#000000", role: "Text and dark elements" }
            ]
        },

        typography: [
            { sample: "Aa", font: "Playfair Display", sampleSize: "4rem", weight: "Bold 700", usage: "Headings and hero sections" },
            { sample: "Aa", font: "Lato", sampleSize: "3rem", weight: "Regular 400", usage: "Body text, schedule, and navigation" }
        ],

        outcomes: {
            text: "The final design successfully balances visual richness with functional clarity. Users can now quickly access key event information while still experiencing the atmosphere of the festival through thoughtful design elements.",
            stats: [
                { num: "6+", label: "Event Websites Analyzed" },
                { num: "4", label: "User Interviews Conducted" },
                { num: "2", label: "Design Iterations Completed" }
            ]
        },

        technologies: ["HTML5", "CSS3", "JavaScript", "Figma"]
    },

    3: {
    title: "Captured Dreams Studio — Designing an Image-First Portfolio Experience",
    description: "A photography portfolio website designed to showcase visual work with minimal interface, focusing on clarity, performance, and client conversion.",
    category: "Portfolio Website",
    year: "Nov 2025",
    services: "UI/UX Design · Frontend Development",
    role: "Designer & Developer",
    image: "images/Image16.png",
    link: "https://kirubakarandaniel2699-web.github.io/cd-studio/",

    overview: {
        title: "Designing for impact, not distraction",
        text: "Captured Dreams Studio was designed with a clear principle — the photography should be the hero, not the interface. Many portfolio websites overuse UI elements, reducing the visual impact of the work. This project focused on creating an immersive, distraction-free experience that allows potential clients to quickly evaluate the photographer’s style and make enquiry decisions."
    },

    research: {
        text: "I analyzed 7 photography portfolio websites and conducted discussions with 3 photographers and 4 potential clients. The key insight was that clients make quick decisions based on visual quality and often leave if the experience feels slow or cluttered.",
        cards: [
            { label: "Method", text: "Analysis of 7 portfolio websites + interviews with photographers and clients" },
            { label: "Key Finding", text: "Users decide within the first few images whether to continue or leave" },
            { label: "Pain Point", text: "Heavy UI and slow-loading galleries reduce trust and engagement" }
        ]
    },

    persona: {
        name: "Arvind Sethuraman",
        role: "Client — Wedding Planner / Parent, 52",
        emoji: "📸",
        tags: ["Hiring a photographer", "Trust-driven decisions", "Prefers simplicity", "Desktop-first user"],
        bio: "Arvind is searching for a professional photographer for a family wedding. He visits portfolio websites to evaluate quality, style, and reliability. He prefers simple and clean experiences where he can quickly view photos and contact the photographer without confusion.",
        goals: [
            "Quickly assess the quality and style of photography",
            "View a variety of work without navigating multiple pages",
            "Find contact details easily to make an enquiry"
        ],
        frustrations: [
            "Too many menus and distractions",
            "Slow-loading images affecting viewing experience",
            "No clear or immediate way to contact the photographer"
        ],
        quote: "If I like the photos, I’ll contact — don’t make me search for anything else."
    },

    problem: "Photography portfolio websites often included unnecessary UI elements, complex navigation, and slow-loading galleries. This distracted users from the actual work and reduced the chances of converting visitors into enquiries.",

    solution: "Designed a minimal, image-first experience where photography takes center stage. Reduced interface elements to only essentials, ensured fast-loading visuals, and created a seamless browsing flow that encourages users to explore and enquire.",

    process: [
        { num: "01", title: "Portfolio Research", desc: "Studied leading photography portfolio platforms to identify patterns that enhance visual storytelling and user engagement." },
        { num: "02", title: "Layout & Grid Design", desc: "Created a responsive gallery layout that maintains visual balance while showcasing images of different aspect ratios." },
        { num: "03", title: "Minimal UI Design", desc: "Reduced UI components to only essential elements, ensuring that nothing distracts from the photography." },
        { num: "04", title: "Performance Optimization", desc: "Focused on fast image loading, smooth transitions, and lightweight interactions to enhance user experience." }
    ],

    features: [
        { icon: "🖼️", title: "Image-First Gallery", desc: "A responsive layout that prioritizes photography and adapts seamlessly across devices." },
        { icon: "🔎", title: "Simple Category Filtering", desc: "Allows users to quickly navigate between different types of photography work." },
        { icon: "✨", title: "Subtle Interactions", desc: "Minimal hover and scroll effects that enhance the experience without distraction." },
        { icon: "📩", title: "Clear Enquiry Flow", desc: "A focused contact section designed to convert visitors into potential clients." }
    ],

    colors: {
        intro: "A minimal, monochromatic palette ensures that the photography remains the focal point. Accent color is used sparingly to create a premium and elegant feel.",
        swatches: [
            { color: "#111111", name: "Black", hex: "#111111", role: "Primary background" },
            { color: "#ffffff", name: "Pure White", hex: "#FFFFFF", role: "Text and contrast elements" },
            { color: "#20c98e", name: "Green-cyan", hex: "#20c98e", role: "Fonts" },
        ]
    },

    typography: [
        { sample: "Aa", font: "Cormorant Garamond", sampleSize: "4rem", weight: "Light 300 & Bold 700", usage: "Headings and brand identity" },
        { sample: "Aa", font: "DM Sans", sampleSize: "3rem", weight: "Regular 400", usage: "Navigation and body content" }
    ],

    outcomes: {
        text: "The final design demonstrates how minimalism can improve both aesthetics and usability. By removing unnecessary elements, users can focus entirely on the photography, leading to a more engaging and conversion-driven experience.",
        stats: [
            { num: "7", label: "Portfolio Websites Analyzed" },
            { num: "4", label: "User Interviews Conducted" },
            { num: "100%", label: "Focus on Visual Content" }
        ]
    },

    technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "CSS Animations"]
},

4: {
    title: "Menxpress — Designing a Conversion-Focused Men's Fashion Store",
    description: "An e-commerce platform for men's fashion focused on simplifying product discovery, improving decision-making, and creating a smooth purchase journey.",
    category: "E-Commerce",
    year: "Dec 2025",
    services: "UI/UX Design · WordPress Development",
    role: "Designer & WordPress Developer",
    image: "images/Menxpress.png",
    link: "https://dev-menxpress.pantheonsite.io/",

    overview: {
        title: "From browsing to buying — reducing decision friction",
        text: "Menxpress was designed to solve a common challenge in men's fashion e-commerce — too many choices with too little guidance. The goal was to create a focused shopping experience that helps users quickly find what suits them and confidently complete a purchase."
    },

    research: {
        text: "Through analysis of 5 fashion e-commerce platforms and feedback from 6 male shoppers, it became clear that users prefer guided shopping over endless scrolling. Decision fatigue and complex checkout flows were the primary reasons for drop-offs.",
        cards: [
            { label: "Method", text: "5 e-commerce site audits + 6 shopper insights" },
            { label: "Key Finding", text: "Users prefer curated options over large catalogs" },
            { label: "Pain Point", text: "Complex checkout and poor filtering reduce conversions" }
        ]
    },

    persona: {
        name: "Karthik Murugan",
        role: "Working Professional, 28",
        emoji: "👔",
        tags: ["Busy lifestyle", "Mobile shopper", "Style-conscious beginner", "Quick decision maker"],
        bio: "Karthik shops online for clothing but prefers a guided experience. He doesn't want to browse endlessly — he wants to quickly find outfits that suit specific occasions.",
        goals: [
            "Find outfits based on occasion quickly",
            "Filter products easily by size and style",
            "Make a fast and confident purchase"
        ],
        frustrations: [
            "Too many irrelevant product options",
            "Unclear size information",
            "Long and complicated checkout flows"
        ],
        quote: "Just show me what works for me and let me buy it fast."
    },

    problem: "Users were overwhelmed by large product catalogs and lacked clear guidance, leading to hesitation and cart abandonment.",

    solution: "Designed an experience centered around curated options, simplified filtering, and a streamlined checkout flow to guide users from discovery to purchase with minimal friction.",

    process: [
        { num: "01", title: "E-Commerce Research", desc: "Studied user behavior and competitor platforms to identify friction points in browsing and checkout." },
        { num: "02", title: "Information Architecture", desc: "Reorganized content around user intent such as occasions and styles instead of generic categories." },
        { num: "03", title: "WordPress Development", desc: "Built using WordPress and WooCommerce with custom UI alignment." },
        { num: "04", title: "Mobile Optimization", desc: "Focused on touch-friendly navigation and simplified checkout for mobile users." }
    ],

    features: [
        { icon: "🔍", title: "Smart Filtering", desc: "Helps users quickly narrow down products based on their needs." },
        { icon: "👗", title: "Curated Collections", desc: "Predefined outfit suggestions reduce decision fatigue." },
        { icon: "📏", title: "Clear Size Guidance", desc: "Improves confidence and reduces purchase hesitation." },
        { icon: "⚡", title: "Fast Checkout", desc: "Simplified process designed to reduce drop-offs." }
    ],

    colors: {
        intro: "The palette reflects modern masculinity with strong contrast and subtle premium accents.",
        swatches: [
            { color: "#1c1c1c", name: "Charcoal Black", hex: "#1C1C1C", role: "Primary background" },
            { color: "#b87333", name: "Copper Accent", hex: "#B87333", role: "CTA and highlights" },
            { color: "#f9f9f9", name: "Soft White", hex: "#F9F9F9", role: "Background" },
            { color: "#555555", name: "Slate Gray", hex: "#555555", role: "Secondary text" }
        ]
    },

    typography: [
        { sample: "Aa", font: "Raleway", sampleSize: "4rem", weight: "Bold 700", usage: "Headings" },
        { sample: "Aa", font: "Source Sans Pro", sampleSize: "3rem", weight: "Regular 400", usage: "Body text" }
    ],

    outcomes: {
        text: "The project highlights how reducing decision complexity can directly improve user experience and conversion. Clear structure and guidance significantly improve shopping confidence.",
        stats: [
            { num: "5", label: "Platforms Studied" },
            { num: "6", label: "Users Interviewed" },
            { num: "3-Step", label: "Checkout Flow" }
        ]
    },

    technologies: ["WordPress", "WooCommerce", "Figma", "CSS"]
},

   5: {
    title: "The Malabar Ocean — Designing a Premium Dining Experience",
    description: "A restaurant website designed to create an emotional connection through visuals while enabling seamless table reservations.",
    category: "Restaurant Website",
    year: "Mar 2026",
    services: "UI/UX Design · WordPress · Elementor",
    role: "UI/UX Designer & Developer",
    image: "images/Restaurant.png",
    link: "https://dev-the-malabar-ocean.pantheonsite.io/",

    overview: {
        title: "Designing for emotion and conversion",
        text: "The Malabar Ocean website was designed to replicate the premium dining experience digitally. The focus was on creating desire through visuals while ensuring users can easily explore the menu and make reservations."
    },

    research: {
        text: "Research showed that users rely heavily on visuals and ease of booking when choosing restaurants online.",
        cards: [
            { label: "Method", text: "6 restaurant audits + 5 user insights" },
            { label: "Key Finding", text: "Visual appeal strongly influences booking decisions" },
            { label: "Pain Point", text: "Complicated booking flows reduce reservations" }
        ]
    },

    persona: {
        name: "Deepa & Vikram",
        role: "Couple Planning a Special Dinner",
        emoji: "🍽️",
        tags: ["Occasion-based diners", "Mobile users", "Experience-focused"],
        bio: "They explore restaurants online before making a booking and prefer visually rich websites that clearly show menu and ambiance.",
        goals: [
            "Explore ambiance before visiting",
            "View menu with clarity",
            "Book easily online"
        ],
        frustrations: [
            "Poor visuals",
            "No clear booking option",
            "Confusing navigation"
        ],
        quote: "The website should make us feel excited to visit."
    },

    problem: "Users couldn’t experience the restaurant’s quality online, leading to missed booking opportunities.",

    solution: "Designed an immersive, visual-first experience with a simple booking flow to convert visitors into customers.",

    process: [
        { num: "01", title: "Research", desc: "Studied premium restaurant websites." },
        { num: "02", title: "Visual Design", desc: "Created mood-based design system." },
        { num: "03", title: "Page Structure", desc: "Designed storytelling layout." },
        { num: "04", title: "Development", desc: "Built using Elementor." }
    ],

    features: [
        { icon: "🌊", title: "Immersive Hero", desc: "Creates strong first impression." },
        { icon: "🍛", title: "Visual Menu", desc: "Enhances food appeal." },
        { icon: "📖", title: "Storytelling Section", desc: "Builds brand trust." },
        { icon: "📅", title: "Easy Reservation", desc: "Simplifies booking." }
    ],

    colors: {
        intro: "Inspired by ocean tones and luxury dining ambiance.",
        swatches: [
            { color: "#0a2540", name: "Deep Navy", hex: "#0A2540", role: "Primary" },
            { color: "#d4a84b", name: "Gold Accent", hex: "#D4A84B", role: "Highlight" },
            { color: "#faf7f2", name: "Ivory", hex: "#FAF7F2", role: "Background" },
            { color: "#8b6914", name: "Warm Bronze", hex: "#8B6914", role: "Secondary" }
        ]
    },

    typography: [
        { sample: "Aa", font: "Libre Baskerville", sampleSize: "4rem", weight: "Bold 700", usage: "Headings" },
        { sample: "Aa", font: "Mulish", sampleSize: "3rem", weight: "Regular 400", usage: "Body" }
    ],

    outcomes: {
        text: "Demonstrates how emotional design combined with usability can improve user engagement and bookings.",
        stats: [
            { num: "6", label: "Sites Studied" },
            { num: "5", label: "Users Interviewed" },
            { num: "1", label: "Booking Flow Simplified" }
        ]
    },

    technologies: ["WordPress", "Elementor", "Figma"]
},

    6: {
    title: "StayFit+ Mobile App — Designing for Habit Formation",
    description: "A fitness app focused on simplifying workout tracking and improving consistency through minimal interactions.",
    category: "Mobile App Design",
    year: "Apr 2026",
    services: "UI/UX Design · Mobile Prototyping",
    role: "UX/UI Designer",
    image: "images/Java.png",
    link: "https://www.figma.com/proto/uBTe4rfdBGkchVetUhoCnD/Stayfit-Mobile-Application-Design?node-id=356-5806&starting-point-node-id=356%3A5747&t=hZ5CEsQgglRdvC1C-1",

    overview: {
        title: "Reducing friction in fitness tracking",
        text: "The app was designed to remove complexity from fitness tracking and help users stay consistent by simplifying every interaction."
    },

    research: {
        text: "Users abandon apps due to complexity, not lack of motivation.",
        cards: [
            { label: "Method", text: "6 app audits + 5 user interviews" },
            { label: "Key Finding", text: "Friction reduces consistency" },
            { label: "Pain Point", text: "Complex UI leads to abandonment" }
        ]
    },

    persona: {
        name: "Faizan",
        role: "Student, 21",
        emoji: "🏋️",
        tags: ["Inconsistent habits", "Mobile-first", "Needs motivation"],
        bio: "Struggles with consistency due to complex apps.",
        goals: [
            "Log workouts quickly",
            "Track progress easily",
            "Stay motivated"
        ],
        frustrations: [
            "Too many steps",
            "Complex dashboards",
            "No clear progress"
        ],
        quote: "Make it simple so I can stay consistent."
    },

    problem: "Fitness apps were too complex, causing users to drop off quickly.",

    solution: "Designed a simple, fast, and focused experience that encourages daily usage.",

    process: [
        { num: "01", title: "Research", desc: "Studied user behavior." },
        { num: "02", title: "User Flow", desc: "Simplified interactions." },
        { num: "03", title: "Wireframes", desc: "Created low-fidelity screens." },
        { num: "04", title: "UI Design", desc: "Built clean interface." },
        { num: "05", title: "Testing", desc: "Improved usability." }
    ],

    features: [
        { icon: "⚡", title: "Quick Logging", desc: "Fast interaction design." },
        { icon: "🔥", title: "Streak Tracking", desc: "Motivates users." },
        { icon: "🏠", title: "Simple Home", desc: "Focused interface." },
        { icon: "📊", title: "Progress View", desc: "Clear insights." }
    ],

    colors: {
        intro: "Dark theme focused on energy and clarity.",
        swatches: [
            { color: "#000000", name: "Black", hex: "#000000", role: "Primary text and card backgrounds" },
            { color: "#daa520", name: "Goldenrod", hex: "#daa520", role: "Primary CTA and highlights" },
        ]
    },

    typography: [
        { sample: "Aa", font: "Manrope", sampleSize: "4rem", weight: "Bold 800", usage: "Headings" },
        { sample: "Aa", font: "Manrope", sampleSize: "3rem", weight: "Regular 400", usage: "Body" }
    ],

    outcomes: {
        text: "The app demonstrates that simplicity drives consistency in habit-based products.",
        stats: [
            { num: "6", label: "Apps Studied" },
            { num: "5", label: "Users Interviewed" },
            { num: "3", label: "Tap Interaction Goal" }
        ]
    },

    technologies: ["Figma", "Prototype", "Design System"]
},
};

function getProjectId(){
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function loadProject() {
    const id = getProjectId();
    const p = projectsData[id];

    if (!p) {
        document.body.innerHTML = "<div style='text-align:center;padding:8rem 2rem;font-family:sans-serif'><h2>Project Not Found</h2><a href='index.html' style='color:#c94a2a'>← Back to Portfolio</a></div>";
        return;
    }

    // META
    document.title = p.title + " — Daniel Kirubakaran";
    document.getElementById("heroImg").src = p.image;
    document.getElementById("heroTitle").innerText = p.title;
    document.getElementById("heroDesc").innerText = p.description;
    document.getElementById("metaCategory").innerText = p.category;
    document.getElementById("metaYear").innerText = p.year;
    document.getElementById("metaServices").innerText = p.services;

    // SIDEBAR
    document.getElementById("sbCategory").innerText = p.category;
    document.getElementById("sbYear").innerText = p.year;
    document.getElementById("sbServices").innerText = p.services;
    document.getElementById("sbRole").innerText = p.role;
    document.getElementById("liveLink").href = p.link;

    // TECH TAGS
    const tt = document.getElementById("techTags");
    tt.innerHTML = p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("");

    // OVERVIEW
    document.getElementById("overviewTitle").innerText = p.overview.title;
    document.getElementById("overviewText").innerText = p.overview.text;

    // RESEARCH
    document.getElementById("researchText").innerText = p.research.text;
    document.getElementById("researchGrid").innerHTML = p.research.cards.map(c =>
        `<div class="r-card"><div class="r-card-label">${c.label}</div><div class="r-card-text">${c.text}</div></div>`
    ).join("");

    // PERSONA
    const pe = p.persona;
    document.getElementById("personaCard").innerHTML = `
        <div class="persona-left">
            <div class="persona-avatar">${pe.emoji}</div>
            <div class="persona-name">${pe.name}</div>
            <div class="persona-role">${pe.role}</div>
            <div class="persona-tags">
                ${pe.tags.map(t => `<div class="persona-tag">${t}</div>`).join("")}
            </div>
        </div>
        <div class="persona-right">
            <div class="persona-section">
                <div class="p-sec-label">Bio</div>
                <div class="p-sec-text">${pe.bio}</div>
            </div>
            <div class="persona-section">
                <div class="p-sec-label">Goals</div>
                <ul class="p-list">${pe.goals.map(g => `<li>${g}</li>`).join("")}</ul>
            </div>
            <div class="persona-section">
                <div class="p-sec-label">Frustrations</div>
                <ul class="p-list">${pe.frustrations.map(f => `<li>${f}</li>`).join("")}</ul>
            </div>
            <div class="persona-section">
                <div class="p-sec-label">Quote</div>
                <div class="p-sec-text" style="font-style:italic;font-size:1rem;color:#0d0d0d">"${pe.quote}"</div>
            </div>
        </div>
    `;

    // PROBLEM & SOLUTION
    document.getElementById("psGrid").innerHTML = `
        <div class="ps-card problem">
            <div class="ps-icon">⚠️</div>
            <div class="ps-title">The Problem</div>
            <div class="ps-text">${p.problem}</div>
        </div>
        <div class="ps-card solution">
            <div class="ps-icon">✅</div>
            <div class="ps-title">The Solution</div>
            <div class="ps-text">${p.solution}</div>
        </div>
    `;

    // DESIGN PROCESS
    document.getElementById("processSteps").innerHTML = p.process.map(s => `
        <div class="process-step">
            <div class="step-num">${s.num}</div>
            <div>
                <div class="step-title">${s.title}</div>
                <div class="step-desc">${s.desc}</div>
            </div>
        </div>
    `).join("");

    // KEY FEATURES
    document.getElementById("featuresGrid").innerHTML = p.features.map(f => `
        <div class="feature-item">
            <div class="feature-icon">${f.icon}</div>
            <div>
                <div class="feature-title">${f.title}</div>
                <div class="feature-desc">${f.desc}</div>
            </div>
        </div>
    `).join("");

    // COLORS
    document.getElementById("colorIntro").innerText = p.colors.intro;
    document.getElementById("paletteRow").innerHTML = p.colors.swatches.map(s => `
        <div class="palette-swatch">
            <div class="swatch-color" style="background:${s.color}"></div>
            <div class="swatch-info">
                <div class="swatch-name">${s.name}</div>
                <div class="swatch-hex">${s.hex}</div>
                <div class="swatch-role">${s.role}</div>
            </div>
        </div>
    `).join("");

    // TYPOGRAPHY
    document.getElementById("typoGrid").innerHTML = p.typography.map(t => `
        <div class="typo-card">
            <div class="typo-sample" style="font-family:'${t.font}',serif;font-size:${t.sampleSize}">${t.sample}</div>
            <div class="typo-meta">
                <small>Typeface</small><p>${t.font}</p>
                <small>Weight</small><p>${t.weight}</p>
                <small>Used for</small><p>${t.usage}</p>
            </div>
        </div>
    `).join("");

    // OUTCOMES
    document.getElementById("outcomesText").innerText = p.outcomes.text;
    document.getElementById("outcomesGrid").innerHTML = p.outcomes.stats.map(s => `
        <div class="outcome-item">
            <span class="outcome-num">${s.num}</span>
            <span class="outcome-label">${s.label}</span>
        </div>
    `).join("");
}

loadProject();
