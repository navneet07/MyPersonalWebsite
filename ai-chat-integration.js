/**
 * AI Chat Widget Integration for Navneet Garimella's Website
 * Simply include this script to add the conversational AI concierge
 */

(function() {
    'use strict';

    // Knowledge Base - All information about Navneet Garimella
    const KNOWLEDGE_BASE = {
        basics: {
            name: "Navneet Garimella",
            aliases: ["Nitin Garimella", "Nitin", "Navneet"],
            current_title: "Data Scientist & Systems Administrator",
            company: "Walmart Global Tech",
            location: "Cupertino / Sunnyvale, CA",
            experience_duration: "~3 years 10 months at Walmart",
            email: "navneet.garimella@walmart.com",
            linkedin: "linkedin.com/in/navneetgarimella",
            portfolio: "www.itguru.cloud",
            resume_path: "/Navneet_Garimella_Resume.pdf"
        },
        
        professional_summary: {
            bio: "A creative support professional turned data-focused systems engineer and founder of AiY Music. Skilled at balancing technical troubleshooting with analytics and dashboard building. Combines analytical expertise with artistic entrepreneurship, creating both technical solutions and cultural bridges through music.",
            unique_value: "Combines data science expertise with systems administration skills and creative entrepreneurship through multilingual music production",
            availability: "Currently employed at Walmart; open to data/analytics roles and developer growth paths"
        },

        skills: {
            analytics_data: ["SQL (advanced)", "Tableau", "Tableau Prep", "Python", "Data visualization", "BI"],
            systems_administration: ["Active Directory", "VMware", "SCCM/WSUS", "Cisco Meraki MDM", "VOIP", "Network management"],
            creative: ["Multilingual songwriting", "AI-assisted music", "Music production", "Video editing", "Cultural fusion"]
        },

        experience: {
            current: "Data Scientist & Systems Administrator at Walmart Global Tech (~4 years)",
            previous: "Technical Program Manager at Microsoft (2021-2022), plus roles at SonicWall, Asia Society, Bloom Energy, Alarm.com, Jazz Pharmaceuticals",
            industries: "Retail, Tech, Healthcare, Non-profit, Energy"
        },

        creative_profile: {
            brand: "AiY Music",
            description: "Multilingual creative venture blending cultural traditions with modern technology",
            languages: ["Hindi", "Urdu", "Telugu", "Punjabi", "English"],
            genres: ["Rap", "Ghazals", "Indie/Alt Rock", "Fusion", "EDM"],
            impact: "100+ free instrumental tracks shared for musician collaboration"
        },

        key_projects: [
            "Walmart KPI Dashboard System tracking first-call resolution and technician availability",
            "Automated Tableau Prep reporting workflows saving significant time",
            "SQL optimization scripts streamlining Tech Spot operations",
            "AiY Music multilingual tracks and AI-assisted songwriting experiments"
        ]
    };

    // Response Generation Engine
    class AIResponseGenerator {
        constructor(knowledgeBase) {
            this.kb = knowledgeBase;
        }

        generateResponse(message) {
            const lowerMessage = message.toLowerCase();

            // Greetings
            if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|what's up)/)) {
                return `Hi there! 👋 I'm here to help you learn about Navneet Garimella - ${this.kb.professional_summary.bio} Ask me about his experience, skills, projects, or creative work with AiY Music!`;
            }

            // About/Who questions
            if (lowerMessage.match(/(who is|tell me about|about).*(navneet|nitin)/i) || lowerMessage.match(/^(who|about)$/)) {
                return `Navneet Garimella is a ${this.kb.basics.current_title} at ${this.kb.basics.company} in ${this.kb.basics.location}. ${this.kb.professional_summary.bio} He has ${this.kb.basics.experience_duration} and experience across ${this.kb.experience.industries}.`;
            }

            // Skills questions
            if (lowerMessage.match(/(skills?|technical|technologies|tools|what can he do)/)) {
                const topSkills = [...this.kb.skills.analytics_data.slice(0, 3), ...this.kb.skills.systems_administration.slice(0, 3)];
                return `Navneet has strong technical skills including ${topSkills.join(', ')}. He's particularly good at combining analytics with systems administration. Plus he has creative skills in ${this.kb.creative_profile.languages.length}-language music production through AiY Music! What specific skills are you most interested in?`;
            }

            // Music/Creative questions
            if (lowerMessage.match(/(music|aiy|creative|song|artist)/)) {
                return `AiY Music is Navneet's creative venture that's really impressive! 🎵 He creates music in ${this.kb.creative_profile.languages.join(', ')} across genres like ${this.kb.creative_profile.genres.slice(0, 4).join(', ')}. ${this.kb.creative_profile.impact} This creative-technical combination brings unique problem-solving perspectives to his professional work!`;
            }

            // Experience/Work questions
            if (lowerMessage.match(/(experience|work|job|career|walmart|microsoft)/)) {
                return `Navneet is currently a ${this.kb.experience.current}. His work includes building Tableau dashboards for KPI tracking, automating reporting workflows, and managing IT infrastructure. Previously: ${this.kb.experience.previous}. His diverse background spans ${this.kb.experience.industries}.`;
            }

            // Projects questions
            if (lowerMessage.match(/(projects?|dashboard|tableau|sql|built)/)) {
                return `Navneet has built impressive projects! ${this.kb.key_projects[0]}, ${this.kb.key_projects[1]}, and ${this.kb.key_projects[2]}. Plus his creative ${this.kb.key_projects[3]}. These show his ability to deliver both technical solutions and creative innovations.`;
            }

            // Location questions
            if (lowerMessage.match(/(location|where|bay area|silicon valley|cupertino)/)) {
                return `He's based in ${this.kb.basics.location} - right in Silicon Valley! 🌉 Perfect location for tech opportunities and he's well-connected to the innovation ecosystem there.`;
            }

            // Contact questions
            if (lowerMessage.match(/(contact|email|reach|hire|talk|connect)/)) {
                return `You can reach Navneet at ${this.kb.basics.email} or LinkedIn: ${this.kb.basics.linkedin}. Portfolio: ${this.kb.basics.portfolio}. He's ${this.kb.professional_summary.availability}. I'd recommend mentioning specific opportunities!`;
            }

            // Availability questions
            if (lowerMessage.match(/(available|looking|opportunity|interested)/)) {
                return `${this.kb.professional_summary.availability}. He's particularly interested in data analyst, data scientist, and systems engineer roles, plus developer growth opportunities. His unique blend of technical + creative skills makes him ideal for innovative companies!`;
            }

            // Single word responses
            if (lowerMessage.match(/^(passion|interests?)$/)) {
                return `Navneet is passionate about analytics, AI-powered tools, IT systems, and creative media! 🎯 Through AiY Music he explores AI-assisted creativity and cultural fusion. He loves combining traditional approaches with cutting-edge technology.`;
            }

            if (lowerMessage.match(/^(good|smart|capable|qualified)$/)) {
                return `Absolutely! 💪 Nearly 4 years at Walmart building critical systems, plus Microsoft PM experience. His combination of technical depth, creative thinking, and multicultural perspective (5 languages!) makes him a strong problem-solver and valuable team member.`;
            }

            if (lowerMessage.match(/^(why|unique|different|special)$/)) {
                return `What makes Navneet unique: he combines serious technical skills (data science + systems admin) with creative entrepreneurship (AiY Music founder). This creative-analytical balance brings fresh perspectives to problem-solving that most purely technical candidates don't have! 🚀`;
            }

            // Comparison questions
            if (lowerMessage.match(/(better than|compared to|why hire|advantage)/)) {
                return `Navneet brings a rare combination: ${this.kb.basics.experience_duration} in enterprise data/systems work + creative entrepreneurship through AiY Music + multicultural perspective (${this.kb.creative_profile.languages.join('/')}) + AI experimentation. This blend of technical depth, creativity, and cultural intelligence is exactly what innovative companies need!`;
            }

            // Tech-specific deep dives
            if (lowerMessage.match(/(python|sql|tableau|vmware|active directory)/)) {
                return `Yes! Navneet has hands-on experience with that technology. At Walmart he's built SQL scripts, Tableau dashboards, and manages systems like VMware and Active Directory. He combines technical proficiency with the ability to explain complex concepts clearly. Want to discuss specific technical requirements?`;
            }

            // Culture/team fit questions
            if (lowerMessage.match(/(team|culture|personality|work style)/)) {
                return `Navneet is great for team environments! His experience includes cross-functional collaboration at major companies, plus community building through AiY Music (sharing 100+ free tracks). He's customer-focused, clear communicator, and brings both analytical rigor and creative energy to teams. 🤝`;
            }

            // Random encouragement
            if (lowerMessage.match(/^(wow|cool|impressive|nice|great)$/)) {
                return `Right?! 😊 Navneet's combination of technical expertise and creative entrepreneurship is pretty unique. The fact that he's building data systems by day and producing multilingual music by night shows incredible range. Anything specific you'd like to know more about?`;
            }

            // Help/confused responses
            if (lowerMessage.match(/^(help|what|how|confused|\?)$/)) {
                return `I'm here to help you learn about Navneet! 🤖 Try asking: "What does he do?", "Tell me about his skills", "What's AiY Music?", "How can I contact him?" - or anything else you're curious about. I can discuss his technical work, creative projects, or background!`;
            }

            // Default helpful response
            return `Great question! 🤔 I can tell you about Navneet's technical experience at Walmart & Microsoft, his data science & systems admin skills, his creative AiY Music venture, or how to connect with him. Try asking "What makes him unique?" or "Tell me about his experience" - I'm here to help! What would you like to know?`;
        }
    }

    // Chat Widget UI Class
    class AIChatWidget {
        constructor() {
            this.responseGenerator = new AIResponseGenerator(KNOWLEDGE_BASE);
            this.isOpen = false;
            this.createWidget();
            this.attachEventListeners();
        }

        createWidget() {
            // Create widget container
            this.container = document.createElement('div');
            this.container.className = 'navneet-ai-chat-widget';
            this.container.innerHTML = `
                <style>
                    .navneet-ai-chat-widget {
                        position: fixed;
                        bottom: 30px;
                        left: 0;
                        right: 0;
                        z-index: 10000;
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    }

        .navneet-chat-toggle {
            position: absolute;
            top: -30px;
            right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid #ff6b35;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }

        .navneet-chat-toggle::before {
            content: '';
            position: absolute;
            inset: 0;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .navneet-chat-toggle:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 15px rgba(255, 107, 53, 0.7);
            background: rgba(255, 255, 255, 0.15);
        }

                    .navneet-chat-toggle svg {
                        width: 24px;
                        height: 24px;
                        fill: white;
                        transition: transform 0.3s ease;
                    }

                    .navneet-chat-toggle.active {
                        box-shadow: 0 0 20px rgba(255, 107, 53, 0.8);
                        background: rgba(255, 255, 255, 0.2);
                        border-color: rgba(255, 107, 53, 0.9);
                    }

                    .navneet-chat-toggle.active svg {
                        transform: rotate(180deg);
                    }

                    .navneet-chat-panel {
                        position: absolute;
                        bottom: -30px;
                        left: 20px;
                        right: 20px;
                        max-width: 1200px;
                        margin: 0 auto;
                        height: 400px;
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(20px);
                        -webkit-backdrop-filter: blur(20px);
                        border: 2px solid #ff6b35;
                        border-radius: 20px 20px 0 0;
                        box-shadow: 0 0 20px rgba(255, 107, 53, 0.3), 0 -10px 60px rgba(0, 0, 0, 0.2);
                        transform: translateY(100%);
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        overflow: hidden;
                    }

                    .navneet-chat-panel.active {
                        transform: translateY(0);
                        opacity: 1;
                        visibility: visible;
                    }

                    .navneet-chat-header {
                        padding: 20px;
                        background: rgba(255, 107, 53, 0.2);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        border-bottom: 1px solid rgba(255, 107, 53, 0.3);
                    }

                    .navneet-chat-header h3 {
                        margin: 0 0 5px 0;
                        color: white;
                        font-size: 18px;
                        font-weight: 600;
                    }

                    .navneet-chat-header p {
                        margin: 0;
                        color: rgba(255, 255, 255, 0.8);
                        font-size: 14px;
                    }

                    .navneet-chat-messages {
                        height: 240px;
                        padding: 20px;
                        overflow-y: auto;
                        scrollbar-width: thin;
                    }

                    .navneet-chat-messages::-webkit-scrollbar {
                        width: 6px;
                    }

                    .navneet-chat-messages::-webkit-scrollbar-track {
                        background: transparent;
                    }

                    .navneet-chat-messages::-webkit-scrollbar-thumb {
                        background-color: rgba(255, 255, 255, 0.3);
                        border-radius: 3px;
                    }

                    .navneet-message {
                        margin-bottom: 15px;
                        animation: navneetFadeIn 0.4s ease-out;
                    }

                    .navneet-message.user {
                        text-align: right;
                    }

                    .navneet-message.ai {
                        text-align: left;
                    }

                    .navneet-message-bubble {
                        display: inline-block;
                        padding: 12px 16px;
                        border-radius: 18px;
                        max-width: 85%;
                        word-wrap: break-word;
                        font-size: 14px;
                        line-height: 1.4;
                    }

                    .navneet-message.user .navneet-message-bubble {
                        background: rgba(255, 255, 255, 0.9);
                        color: #333;
                        border: 1px solid rgba(255, 255, 255, 0.3);
                    }

                    .navneet-message.ai .navneet-message-bubble {
                        background: rgba(255, 107, 53, 0.2);
                        color: white;
                        border: 1px solid rgba(255, 107, 53, 0.4);
                        box-shadow: 0 0 10px rgba(255, 107, 53, 0.2);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                    }

                    .navneet-chat-input-area {
                        padding: 15px 20px;
                        border-top: 1px solid rgba(255, 107, 53, 0.3);
                        background: rgba(255, 107, 53, 0.1);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                    }

                    .navneet-chat-form {
                        display: flex;
                        gap: 10px;
                    }

                    .navneet-chat-input {
                        flex: 1;
                        padding: 12px 16px;
                        border: 1px solid rgba(255, 107, 53, 0.3);
                        border-radius: 20px;
                        background: rgba(255, 255, 255, 0.1);
                        color: white;
                        font-size: 14px;
                        outline: none;
                        transition: all 0.3s ease;
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                    }

                    .navneet-chat-input::placeholder {
                        color: rgba(255, 255, 255, 0.7);
                    }

                    .navneet-chat-input:focus {
                        border-color: rgba(255, 107, 53, 0.6);
                        background: rgba(255, 255, 255, 0.15);
                        box-shadow: 0 0 10px rgba(255, 107, 53, 0.2);
                    }

                    .navneet-send-button {
                        padding: 12px;
                        border: 1px solid #ff6b35;
                        border-radius: 50%;
                        background: rgba(255, 107, 53, 0.2);
                        color: white;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                    }

                    .navneet-send-button:hover {
                        transform: scale(1.1);
                        background: rgba(255, 107, 53, 0.3);
                        box-shadow: 0 0 10px rgba(255, 107, 53, 0.4);
                    }

                    .navneet-typing {
                        display: none;
                        padding: 12px 16px;
                        margin-bottom: 15px;
                    }

                    .navneet-typing.active {
                        display: block;
                    }

                    .navneet-typing-dots {
                        display: flex;
                        gap: 4px;
                    }

                    .navneet-typing-dots span {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.6);
                        animation: navneetTypingDots 1.4s infinite;
                    }

                    .navneet-typing-dots span:nth-child(2) {
                        animation-delay: 0.2s;
                    }

                    .navneet-typing-dots span:nth-child(3) {
                        animation-delay: 0.4s;
                    }

                    .navneet-welcome {
                        background: rgba(255, 107, 53, 0.15);
                        border: 1px solid rgba(255, 107, 53, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-bottom: 20px;
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        box-shadow: 0 0 15px rgba(255, 107, 53, 0.1);
                    }

                    .navneet-welcome h4 {
                        margin: 0 0 8px 0;
                        color: white;
                        font-size: 16px;
                        font-weight: 600;
                    }

                    .navneet-welcome p {
                        margin: 0 0 12px 0;
                        color: rgba(255, 255, 255, 0.9);
                        font-size: 13px;
                        line-height: 1.4;
                    }

                    .navneet-suggestions {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 6px;
                    }

                    .navneet-suggestion {
                        padding: 6px 12px;
                        background: rgba(255, 255, 255, 0.1);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        border-radius: 15px;
                        font-size: 12px;
                        color: rgba(255, 255, 255, 0.8);
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .navneet-suggestion:hover {
                        background: rgba(255, 107, 53, 0.2);
                        border-color: rgba(255, 107, 53, 0.4);
                        color: white;
                    }

                    @keyframes navneetFadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes navneetTypingDots {
                        0%, 60%, 100% {
                            transform: scale(1);
                            opacity: 0.6;
                        }
                        30% {
                            transform: scale(1.2);
                            opacity: 1;
                        }
                    }

                    @media (max-width: 768px) {
                        .navneet-ai-chat-widget {
                            bottom: 25px;
                        }
                        
                        .navneet-chat-panel {
                            left: 10px;
                            right: 10px;
                            height: 350px;
                            bottom: -25px;
                        }
                        
                        .navneet-chat-messages {
                            height: 190px;
                        }
                        
                        .navneet-chat-toggle {
                            right: 20px;
                            top: -25px;
                        }
                    }
                    
                    @media (max-width: 420px) {
                        .navneet-ai-chat-widget {
                            bottom: 20px;
                        }
                        
                        .navneet-chat-panel {
                            left: 5px;
                            right: 5px;
                            height: 300px;
                            bottom: -20px;
                        }
                        
                        .navneet-chat-messages {
                            height: 140px;
                        }
                        
                        .navneet-chat-toggle {
                            right: 15px;
                            width: 50px;
                            height: 50px;
                            top: -20px;
                        }
                        
                        .navneet-chat-toggle svg {
                            width: 20px;
                            height: 20px;
                        }
                    }
                </style>

                <button class="navneet-chat-toggle">
                    <svg viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                </button>

                <div class="navneet-chat-panel">
                    <div class="navneet-chat-header">
                        <h3>Ask About Navneet</h3>
                        <p>Data Scientist • Systems Admin • AiY Music</p>
                    </div>

                    <div class="navneet-chat-messages">
                        <div class="navneet-welcome">
                            <h4>👋 Hi there!</h4>
                            <p>I can answer questions about Navneet Garimella's background, experience, and projects. Try asking:</p>
                            <div class="navneet-suggestions">
                                <span class="navneet-suggestion">Tell me about Navneet</span>
                                <span class="navneet-suggestion">Skills?</span>
                                <span class="navneet-suggestion">AiY Music?</span>
                                <span class="navneet-suggestion">Contact info</span>
                            </div>
                        </div>
                    </div>

                    <div class="navneet-typing">
                        <div class="navneet-message-bubble">
                            <div class="navneet-typing-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                    <div class="navneet-chat-input-area">
                        <form class="navneet-chat-form">
                            <input type="text" class="navneet-chat-input" placeholder="Ask me about Navneet..." autocomplete="off">
                            <button type="submit" class="navneet-send-button">
                                <svg viewBox="0 0 24 24" width="16" height="16">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            `;

            document.body.appendChild(this.container);

            // Get elements
            this.toggle = this.container.querySelector('.navneet-chat-toggle');
            this.panel = this.container.querySelector('.navneet-chat-panel');
            this.messages = this.container.querySelector('.navneet-chat-messages');
            this.form = this.container.querySelector('.navneet-chat-form');
            this.input = this.container.querySelector('.navneet-chat-input');
            this.typing = this.container.querySelector('.navneet-typing');
        }

        attachEventListeners() {
            this.toggle.addEventListener('click', () => this.toggleChat());
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            
            // Suggestion chips
            this.container.querySelectorAll('.navneet-suggestion').forEach(chip => {
                chip.addEventListener('click', () => this.sendSuggestion(chip.textContent));
            });

            // Close on outside click
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.navneet-ai-chat-widget') && this.isOpen) {
                    this.closeChat();
                }
            });
        }

        toggleChat() {
            this.isOpen ? this.closeChat() : this.openChat();
        }

        openChat() {
            this.isOpen = true;
            this.panel.classList.add('active');
            this.toggle.classList.add('active');
            this.input.focus();
        }

        closeChat() {
            this.isOpen = false;
            this.panel.classList.remove('active');
            this.toggle.classList.remove('active');
        }

        sendSuggestion(message) {
            this.addMessage(message, 'user');
            this.processMessage(message);
        }

        handleSubmit(e) {
            e.preventDefault();
            const message = this.input.value.trim();
            if (!message) return;

            this.addMessage(message, 'user');
            this.input.value = '';
            this.processMessage(message);
        }

        addMessage(message, sender) {
            const messageEl = document.createElement('div');
            messageEl.className = `navneet-message ${sender}`;
            
            const bubbleEl = document.createElement('div');
            bubbleEl.className = 'navneet-message-bubble';
            bubbleEl.textContent = message;
            
            messageEl.appendChild(bubbleEl);
            this.messages.appendChild(messageEl);
            
            this.scrollToBottom();
        }

        async processMessage(message) {
            this.showTyping();
            
            // Realistic typing delay
            await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
            
            const response = this.responseGenerator.generateResponse(message);
            
            this.hideTyping();
            this.addMessage(response, 'ai');
        }

        showTyping() {
            this.typing.classList.add('active');
            this.scrollToBottom();
        }

        hideTyping() {
            this.typing.classList.remove('active');
        }

        scrollToBottom() {
            this.messages.scrollTop = this.messages.scrollHeight;
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new AIChatWidget());
    } else {
        new AIChatWidget();
    }

})();
