import LorBot from "./components/LorBot";
import StickmanFight from "./components/StickmanFight";
import DataAnalysis from "./components/DataAnalysis";
import JsP5 from "./components/JsP5";
import LunarLander from "./components/LunarLaner";
import PocketTanks from "./components/PocketTanks";
import Spreadit from "./components/Spreadit";
import UltimateNinja from "./components/UltimateNinja";


export const PROJECT_LIST =
    [
        {
            name: "Ultimate Ninja",
            description: "Stealth action game",
            url: "https://github.com/MOj0/ultimate_ninja",
            technologies: ["Rust", "good-web-game", "reqwest lib", "threading"],
            owner: "MOj0",
            repo_name: " ultimate_ninja",
            preview_url: "https://user-images.githubusercontent.com/59799831/217947763-e8942f66-81b9-4671-992a-72d964e5425f.gif",
            preview_thumbnail_url: "https://user-images.githubusercontent.com/59799831/217947763-e8942f66-81b9-4671-992a-72d964e5425f.gif",
            tags: ["Rust", "Game Development", "2D"],
            content: UltimateNinja,
        },
        {
            name: "Stickman Fight",
            description: "Online multiplayer 3D game [Computer Graphics class]",
            url: "https://github.com/MOj0/Stickman_Fight",
            technologies: ["Javascript", "WebGL", "sockets.io"],
            owner: "MOj0",
            repo_name: "Stickman_Fight",
            preview_url: "https://user-images.githubusercontent.com/59799831/154125979-ff998929-d9d0-423d-aa45-ca1298eff87d.gif",
            preview_thumbnail_url: "https://user-images.githubusercontent.com/59799831/154125979-ff998929-d9d0-423d-aa45-ca1298eff87d.gif",
            tags: ["Javascript", "Computer Graphics", "3D", "Shaders", "Networking"],
            content: StickmanFight,
        },
        {
            name: "Legends of Runeterra Bot",
            description: "Bot for the Legends of Runeterra card game",
            url: "https://github.com/MOj0/LoR-Bot",
            technologies: ["Python", "Computer Vision", "Automation"],
            owner: "MOj0",
            repo_name: "LoR-Bot",
            preview_url: "https://raw.githubusercontent.com/MOj0/LoR-Bot/master/gifs/demo.gif",
            preview_thumbnail_url: "https://raw.githubusercontent.com/MOj0/LoR-Bot/master/gifs/demo.gif",
            tags: [
                "Python",
                "Riot Games API",
                "Opencv",
                "numpy",
                "pywin32",
            ],
            content: LorBot,
        },
        {
            name: "Analysis and prediction of parking spots in Ljubljana",
            description: "[Data Mining class]",
            url: "https://github.com/MOj0/PR21MOJR",
            technologies: ["Python", "Time Series Models"],
            owner: "MOj0",
            repo_name: "PR21MOJR",
            preview_url: "https://user-images.githubusercontent.com/59799831/174149924-b378349a-2a90-4f06-9ee0-d04972ba3f69.png",
            preview_thumbnail_url: "https://user-images.githubusercontent.com/59799831/174149924-b378349a-2a90-4f06-9ee0-d04972ba3f69.png",
            tags: [
                "Python",
                "Data Analysis",
                "Time Series Prediction",
            ],
            content: DataAnalysis,
        },
        {
            name: "Spreadit",
            description: "A reddit clone [Information Systems class]",
            url: "https://github.com/Gnortss/spreadit",
            technologies: ["C#", ".NET 6", "Android App"],
            owner: "Gnortss",
            repo_name: "spreadit",
            preview_url: "https://user-images.githubusercontent.com/59799831/149286223-e938b251-c107-44cf-a861-ae4f7ee6355c.png",
            preview_thumbnail_url: "https://user-images.githubusercontent.com/59799831/149286223-e938b251-c107-44cf-a861-ae4f7ee6355c.png",
            tags: [
                "C#",
                "Webapp",
                ".NET 6",
                "Mobile Development",
            ],
            content: Spreadit,
        },
        {
            name: "Javascript p5 Visualization Projects",
            description: "Various fun projects in the p5 library",
            url: "https://github.com/MOj0/JS-Projects",
            technologies: [],
            owner: "MOj0",
            repo_name: "JS-Projects",
            preview_url: "https://user-images.githubusercontent.com/59799831/174158466-594c9d3a-9a48-4c06-a88e-d0a45afb55fe.png",
            preview_thumbnail_url: "https://user-images.githubusercontent.com/59799831/174158466-594c9d3a-9a48-4c06-a88e-d0a45afb55fe.png",
            tags: [
                "Javascript",
                "p5",
                "Algorithms",
            ],
            content: JsP5,
        },
        {
            name: "Lunar Lander",
            description: "A remake of the Lunar Lander Atari game",
            url: "https://github.com/MOj0/LunarLander",
            technologies: [],
            owner: "MOj0",
            repo_name: "LunarLander",
            preview_url: "https://user-images.githubusercontent.com/59799831/174161236-741860be-3d8a-49cc-8b71-6582ae87b1b9.png",
            preview_thumbnail_url: "https://user-images.githubusercontent.com/59799831/174161236-741860be-3d8a-49cc-8b71-6582ae87b1b9.png",
            tags: [
                "Java",
                "Game Development",
            ],
            content: LunarLander,
        },
        {
            name: "Pocket Tanks",
            description: "A remake of the Pocket Tanks videogame",
            url: "https://github.com/MOj0/Pocket-Tanks",
            technologies: [],
            owner: "MOj0",
            repo_name: "Pocket-Tanks",
            preview_url: "https://user-images.githubusercontent.com/59799831/174164021-ce13f8a5-7d3f-4a82-951a-c3749c80d331.png",
            preview_thumbnail_url: "https://user-images.githubusercontent.com/59799831/174164021-ce13f8a5-7d3f-4a82-951a-c3749c80d331.png",
            tags: [
                "Java",
                "Game Development",
            ],
            content: PocketTanks,
        },
    ];

export const EXPERIENCE_LIST =
    [
        {
            title: "Software Development",
            company: "DevRev",
            company_url: "https://devrev.ai/",
            start_date: "Jul 2022",
            end_date: "Present",
            icon_url: "https://avatars.githubusercontent.com/u/72990475?s=120&v=4",
            tags: [
                "Golang", "CRM", "CLI Tools", "AWS"
            ],
        },
        {
            title: "Technical Documentation",
            company: "Luxonis",
            company_url: "https://www.luxonis.com/",
            start_date: "Aug 2021",
            end_date: "Nov 2021",
            icon_url: "https://avatars.githubusercontent.com/u/60142758?s=200&v=4",
            tags: [
                "Python", "Computer Vision", "AI", "Sphinx", "Electrical Engineering"
            ],
        }
    ];