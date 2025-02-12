
function loadPage(page) {
    let content = document.getElementById("content");

    switch(page) {
        case "home":
            content.innerHTML = `
                <h1>Welcome to My Portfolio!</h1>
                <p>🚀 Hey there! I'm <strong>Ahmed Samir</strong>, a <span style="color: yellow;">Discord Bot Developer</span> & <span style="color: cyan;">Graphic Designer</span>. I specialize in building <strong>custom bots</strong>, creating <strong>interactive dashboards</strong>, and designing <strong>stunning graphics</strong> for brands.</p>
                
                <h2>✨ What You'll Find Here</h2>
                <ul>
                    <li>⚡ <strong>Discord Bots</strong> – Custom bots with AI chat, moderation, auto-responses, and more.</li>
                    <li>🖥️ <strong>Dashboards</strong> – Interactive web dashboards for bot management.</li>
                    <li>🎨 <strong>Graphic Designs</strong> – High-quality branding, logos, and digital art.</li>
                    <li>📜 <strong>Portfolio</strong> – A showcase of my latest projects & achievements.</li>
                </ul>
        
                <h2>🌟 Why Work With Me?</h2>
                <p>With a passion for technology and design, I ensure every project is:</p>
                <ul>
                    <li>✅ <strong>Optimized</strong> for best performance.</li>
                    <li>🎯 <strong>Custom-Tailored</strong> to your needs.</li>
                    <li>💡 <strong>Innovative</strong> and up-to-date.</li>
                </ul>
        
                <h2>📩 Let's Connect!</h2>
                <p>Looking for a developer or designer? Feel free to <a href="#" onclick="loadPage('contact')">reach out</a>and let’s create something amazing together!</p>
            `;
            break;        

            case "projects":
                content.innerHTML = `
                    <h2>My Projects</h2>
                    <div class="projects">
                        <div class="project">
                            <h3>Dashboard Bot Discord</h3>
                            <p>
                                A fully functional web dashboard for managing a Discord bot efficiently. This project includes:
                            </p>
                            <ul>
                                <li>Login using Discord OAuth2</li>
                                <li>Manage auto-responses and welcome messages</li>
                                <li>Live server statistics with dynamic charts</li>
                                <li>Logging system to track server events and bot interactions</li>
                                <li>Responsive UI for both desktop and mobile</li>
                            </ul>
                        </div>
            
                        <div class="project">
                            <h3>Portfolio Website</h3>
                            <p>
                                A personal website designed to showcase my work as a Discord bot developer and graphic designer. Features include:
                            </p>
                            <ul>
                                <li>Custom, pixel-style theme for a retro aesthetic</li>
                                <li>Interactive navigation with JavaScript for smooth transitions</li>
                                <li>Showcase section for past projects with descriptions</li>
                                <li>Contact form for easy communication</li>
                                <li>Optimized for SEO and fast loading speeds</li>
                            </ul>
                        </div>
            
                        <div class="project">
                            <h3>FiveM Server Files</h3>
                            <p>
                                A complete set of custom scripts and enhancements for FiveM servers, improving the GTA V roleplay experience. This includes:
                            </p>
                            <ul>
                                <li>Fully integrated economy system with banking and jobs</li>
                                <li>Custom police, EMS, and business scripts for immersive roleplay</li>
                                <li>High-performance optimizations to reduce server lag</li>
                                <li>Custom map design and MLOs for unique locations</li>
                                <li>Security enhancements to prevent exploits and cheaters</li>
                            </ul>
                        </div>
                    </div>
                `;
                break;
            
                case "about":
                    content.innerHTML = `
                        <h2>About Me</h2>
                        <p>I'm <strong>Ahmed Samir</strong>, a passionate <span style="color: yellow;">Discord bot developer</span> and <span style="color: cyan;">graphic designer</span>. I love creating interactive and useful bots that enhance Discord servers, as well as designing creative visuals for different projects.</p>
                        
                        <h3>What I Do?</h3>
                        <ul>
                            <li>⚡ Developing advanced <strong>Discord bots</strong> using <span style="color: lightgreen;">Node.js</span> and <span style="color: orange;">Express</span>.</li>
                            <li>🎨 Designing <strong>graphics</strong> for brands, businesses, and individuals.</li>
                            <li>🌐 Building interactive <strong>dashboards</strong> and web interfaces.</li>
                            <li>🛠️ Customizing bot responses & auto-moderation systems.</li>
                        </ul>
                        
                        <h3>My Skills</h3>
                        <ul>
                            <li>🖥️ Programming: <span style="color: lightgreen;">JavaScript (Node.js, Express, Discord.js)</span></li>
                            <li>🎨 Graphic Design: <span style="color: cyan;">Photoshop, Illustrator</span></li>
                            <li>🌍 Web Development: <span style="color: orange;">HTML, CSS, JavaScript</span></li>
                            <li>⚙️ Bot Features: Auto-moderation, custom commands, AI integrations</li>
                        </ul>
                
                        <h3>Projects I've Worked On</h3>
                        <div class="projects">
                            <div class="project">
                                <h4>⚡ Multi-Server Discord Bot</h4>
                                <p>A feature-rich bot with automatic responses, AI chat, custom welcomes, and interactive dashboards.</p>
                            </div>
                            <div class="project">
                                <h4>🎨 Graphic Design for Electronics Store</h4>
                                <p>Designed professional branding materials for <strong>Mohamed Serag Electronics</strong>.</p>
                            </div>
                        </div>
                
                        <h3>Want to Work Together?</h3>
                        <p>I'm always open to collaborations and exciting new projects. Feel free to <a href="#" onclick="loadPage('contact')">Contact Me</a></p>
                    `;
                    break;                

                    case "contact":
                        content.innerHTML = `
                            <h1>Contact Me</h1>
                            <div class="form-container">
                                <h2>Fill out the form below to reach out to me</h2>
                                <form id="contactForm" method="POST">
                                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY(https://web3forms.com/)">
                                    <input type="hidden" name="subject" value="New Contact From (Portfolio Test)" />
                                    <input type="checkbox" name="botcheck" style="display: none;" />
                    
                                    <label for="fname">First Name</label>
                                    <input type="text" name="name" id="first_name" placeholder="Your First Name" required />
                    
                                    <label for="lname">Last Name</label>
                                    <input type="text" name="lastname" id="lname" placeholder="Your Last Name" required />
                    
                                    <label for="email">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="email@example.com" required />
                    
                                    <label for="phone">Phone Number</label>
                                    <input type="text" name="phone" id="phone" placeholder="+20 10 1234 5678" required />
                    
                                    <label for="message">Your Message</label>
                                    <textarea rows="5" name="message" id="message" placeholder="Write your most important message to me" required></textarea>
                    
                                    <button type="submit">Send Message</button>
                                    <p id="result"></p>
                                </form>
                            </div>
                        `;
                        setTimeout(attachFormHandler, 100);
                        break;
                                              

                default:
                    content.innerHTML = `
                        <h2>🚨 Oops! Page Not Found</h2>
                        <p>It looks like the page you're looking for doesn't exist. Maybe you mistyped the URL or followed a broken link.</p>
                        
                        <h3>🔍 Here are some useful links:</h3>
                        <ul>
                            <li>🏠 <a href="#" onclick="loadPage('home')">Go to Home</a></li>
                            <li>🛠️ <a href="#" onclick="loadPage('projects')">View My Projects</a></li>
                            <li>📩 <a href="#" onclick="loadPage('contact')">Contact Me</a></li>
                        </ul>
                
                        <p>If you think this is a mistake, feel free to <a href="#" onclick="loadPage('contact')">reach out</a>.</p>
                    `;
                    break;
                
    }
}

function attachFormHandler() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(form);
        var object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        var json = JSON.stringify(object);
    
        console.log("Sending request...");
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        })
        .then(async (response) => {
            console.log("Response status:", response.status); 
            if (response.status == 200) {
                Swal.fire({
                    title: '<i class="fa-solid fa-check pixel-icon"></i> Success!',
                    html: '<p>Your message has been sent successfully!</p>',
                    width: "500px",
                    padding: "20px",
                    background: "#111",
                    color: "#fff",
                    customClass: {
                        title: "swal-title",
                        popup: "swal-popup",
                        confirmButton: "swal-button"
                    }
                });                
            } else {
                Swal.fire({
                    title: '<i class="fa-solid fa-xmark pixel-icon"></i> Error!',
                    html: '<p>Something went wrong!</p>',
                    width: "500px",
                    padding: "20px",
                    background: "#111",
                    color: "#fff",
                    customClass: {
                        title: "swal-title",
                        popup: "swal-popup",
                        confirmButton: "swal-button"
                    }
                });
           }
        })
        .catch((error) => {
            console.log(error);
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error",
                width: "500px",
                padding: "20px"
            });
        })
        .then(() => {
            form.reset();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadPage('home');
});

