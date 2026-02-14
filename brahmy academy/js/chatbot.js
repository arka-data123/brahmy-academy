// Brahmy Academy Chatbot with Tunisian Arabic Dialect Support
// This chatbot provides intelligent responses about the gym's services, schedule, and contact info

class BrahmyAcademyChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.knowledgeBase = this.initializeKnowledge();
        this.tunisianPhrases = this.initializeTunisianDialect();
        this.init();
    }

    init() {
        this.createChatWidget();
        this.attachEventListeners();
    }

    initializeKnowledge() {
        return {
            // Schedule Information
            schedule: {
                openingHours: [
                    { day: 'Monday', time: '2:00 - 10:00 PM' },
                    { day: 'Tuesday', time: '2:00 - 10:00 PM' },
                    { day: 'Wednesday', time: '2:00 - 10:00 PM' },
                    { day: 'Thursday', time: '2:00 - 10:00 PM' },
                    { day: 'Friday', time: '2:00 - 10:00 PM' },
                    { day: 'Saturday', time: '2:00 - 10:00 PM' },
                    { day: 'Sunday', time: 'Closed' }
                ]
            },

            // Contact Information
            contact: {
                phone: '92 140 140',
                phoneLink: '+21692140140',
                email: 'brahmyacademy@gmail.com',
                address: '1 Rue Du Moknine, Manouba, Tunisia',
                mapCode: 'R3FJ+QP Manouba',
                hours: 'Mon-Sat: 2 PM - 10 PM, Sun: Closed',
                instagram: '@brahmy_academy',
                facebook: 'Brahmy Academy',
                whatsapp: '92 140 140',
                rating: '4.8/5 ⭐'
            },

            // Programs Information
            programs: {
                taekwondo: 'Traditional Korean martial arts focusing on discipline, power, and precision',
                kickboxing: 'High-intensity combat training for strength, speed, and confidence',
                gymnastics: 'Professional training for flexibility, balance, and body control',
                women: 'Women-only sessions in a comfortable, empowering environment',
                mixed: 'Co-ed strength and conditioning for all fitness levels'
            },

            // Coaches
            coaches: [
                { name: 'Master Ahmed Brahmi', specialty: 'Taekwondo', experience: '15+ years' },
                { name: 'Coach Karim Mansouri', specialty: 'Kick Boxing', experience: '10+ years' },
                { name: 'Coach Amira Ben Salem', specialty: 'Women\'s Fitness', experience: '8+ years' }
            ]
        };
    }

    initializeTunisianDialect() {
        return {
            // Greetings
            greetings: ['ahla', 'salam', 'slm', 'صباح الخير', 'مساء الخير', 'اهلا', 'سلام', 'labess', 'labas', 'cv', 'kifech'],

            // Common Tunisian phrases and their meanings
            phrases: {
                'kifech': 'how',
                'chkoun': 'who',
                'wakt': 'time',
                'wa9tech': 'when',
                'fama': 'is there',
                'chnowa': 'what',
                'win': 'where',
                '9adech': 'how much',
                'bech': 'want to',
                'nheb': 'I want',
                'yemken': 'maybe',
                'barcha': 'a lot',
                'chway': 'a little',
                'behi': 'good/ok',
                'mriguel': 'man',
                'mra': 'woman',
                'nissa': 'women',
                'sport': 'sport',
                'tadrib': 'training',
                'taekwondo': 'taekwondo',
                'kick boxing': 'kick boxing',
                'gymnastique': 'gymnastics',
                'telephone': 'phone',
                'numero': 'number',
                'adresse': 'address',
                'blassa': 'place/location',
                'sa3a': 'hour/time',
                'youm': 'day',
                'nhar': 'day',
                'jom3a': 'friday',
                'thnin': 'monday',
                'tletha': 'tuesday',
                'arb3a': 'wednesday',
                'khmis': 'thursday',
                'sebt': 'saturday',
                'had': 'sunday',
                'sobh': 'morning',
                '3chiya': 'evening',
                'lil': 'night'
            },

            // Response templates in Tunisian style
            responses: {
                greeting: [
                    'Ahla bik fi Brahmy Academy! 🥋 Kifech n3awnek?',
                    'Salam! Labess? Ena hné bech n3awnek. 😊',
                ],
                schedule: [
                    'El programme mte3na behi barcha! ',
                    'Fama des cours ',
                    'El wa9t mte3 '
                ],
                contact: [
                    'Tnajem t9abelna fi: ',
                    'El numero mte3na: ',
                    'Blastna fi: '
                ],
                thanks: [
                    'Ahla bik! 😊',
                    'Behi, merci! 🙏',
                    'B saha w raha! 💪'
                ],
                unknown: [
                    'Mafehmtech behi, tnajem t3awed?',
                    'Chnowa theb ta3ref bedhabt?',
                    'Tnajem testa3mel klém ekher?'
                ]
            }
        };
    }

    createChatWidget() {
        const chatHTML = `
      <div class="chat-widget" id="chatWidget">
        <button class="chat-toggle" id="chatToggle" aria-label="Toggle chat">
          <span class="chat-icon">💬</span>
          <span class="chat-close">✕</span>
        </button>
        
        <div class="chat-container" id="chatContainer">
          <div class="chat-header">
            <div class="chat-header-info">
              <div class="chat-avatar">🥋</div>
              <div>
                <h3>Brahmy Assistant</h3>
                <p class="chat-status">Online • Yekhdmou b Tounsi 🇹🇳</p>
              </div>
            </div>
            <button class="chat-minimize" id="chatMinimize" aria-label="Minimize chat">−</button>
          </div>
          
          <div class="chat-messages" id="chatMessages">
            <div class="chat-message bot-message">
              <div class="message-avatar">🥋</div>
              <div class="message-content">
                <p>Ahla bik fi Brahmy Academy! 👋</p>
                <p>Ena hné bech n3awnek b kol ma theb ta3ref 3la el academy, el programmes, wel horaires. 💪</p>
                <p>Tnajem tahki m3aya b Tounsi walla b Français! 😊</p>
              </div>
            </div>
          </div>
          
          <div class="chat-suggestions" id="chatSuggestions">
            <button class="suggestion-btn" data-message="Chnowa el programmes eli 3andkom?">📋 Programmes</button>
            <button class="suggestion-btn" data-message="Wa9tech el horaires?">⏰ Horaires</button>
            <button class="suggestion-btn" data-message="Win blastkom?">📍 Blassa</button>
            <button class="suggestion-btn" data-message="9adech el numero?">📞 Contact</button>
          </div>
          
          <div class="chat-input-container">
            <input 
              type="text" 
              class="chat-input" 
              id="chatInput" 
              placeholder="Ekteb message mte3ek..."
              autocomplete="off"
            />
            <button class="chat-send" id="chatSend" aria-label="Send message">
              <span>➤</span>
            </button>
          </div>
        </div>
      </div>
    `;

        document.body.insertAdjacentHTML('beforeend', chatHTML);
    }

    attachEventListeners() {
        const toggle = document.getElementById('chatToggle');
        const minimize = document.getElementById('chatMinimize');
        const send = document.getElementById('chatSend');
        const input = document.getElementById('chatInput');
        const suggestions = document.querySelectorAll('.suggestion-btn');

        toggle.addEventListener('click', () => this.toggleChat());
        minimize.addEventListener('click', () => this.toggleChat());
        send.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        suggestions.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.dataset.message;
                input.value = message;
                this.sendMessage();
            });
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const widget = document.getElementById('chatWidget');
        widget.classList.toggle('chat-open', this.isOpen);
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();

        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';

        // Simulate typing delay
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 500);
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageHTML = `
      <div class="chat-message ${sender}-message animate-fade-up">
        ${sender === 'bot' ? '<div class="message-avatar">🥋</div>' : ''}
        <div class="message-content">
          <p>${text}</p>
        </div>
      </div>
    `;

        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Check for greetings
        if (this.containsAny(lowerMessage, this.tunisianPhrases.greetings)) {
            return this.randomChoice(this.tunisianPhrases.responses.greeting);
        }

        // Check for schedule queries
        if (this.isScheduleQuery(lowerMessage)) {
            return this.getScheduleResponse(lowerMessage);
        }

        // Check for contact queries
        if (this.isContactQuery(lowerMessage)) {
            return this.getContactResponse(lowerMessage);
        }

        // Check for program queries
        if (this.isProgramQuery(lowerMessage)) {
            return this.getProgramResponse(lowerMessage);
        }

        // Check for coach queries
        if (this.isCoachQuery(lowerMessage)) {
            return this.getCoachResponse();
        }

        // Check for thanks
        if (this.containsAny(lowerMessage, ['merci', 'chokran', 'شكرا', 'thank', 'thanks'])) {
            return this.randomChoice(this.tunisianPhrases.responses.thanks);
        }

        // Default response
        return this.getDefaultResponse();
    }

    isScheduleQuery(message) {
        const scheduleKeywords = ['horaire', 'wa9t', 'wakt', 'sa3a', 'time', 'schedule', 'quand', 'wa9tech', 'when', 'youm', 'nhar', 'day'];
        return this.containsAny(message, scheduleKeywords);
    }

    getScheduleResponse(message) {
        let response = '📅 El horaires mte3na (Opening Hours):\n\n';

        this.knowledgeBase.schedule.openingHours.forEach(slot => {
            response += `• ${slot.day}: ${slot.time}\n`;
        });

        response += '\nMarhbé bik fi ay wa9t! 🥋';
        response += '\n📞 Appeli 3la 92 140 140 bech tes2al 3la cours spécifique!';
        return response;
    }

    isContactQuery(message) {
        const contactKeywords = ['contact', 'telephone', 'numero', 'phone', 'appel', 'blassa', 'win', 'where', 'adresse', 'address', 'email'];
        return this.containsAny(message, contactKeywords);
    }

    getContactResponse(message) {
        const contact = this.knowledgeBase.contact;
        let response = '';

        if (message.includes('telephone') || message.includes('numero') || message.includes('phone') || message.includes('appel')) {
            response = `📞 El numero mte3na: ${contact.phone}\n`;
            response += `💬 WhatsApp: ${contact.whatsapp}\n`;
            response += 'Tnajem t9abelna kol youm!';
        } else if (message.includes('blassa') || message.includes('win') || message.includes('where') || message.includes('adresse')) {
            response = `📍 Blastna fi: ${contact.address}\n`;
            response += `🗺️ Code: ${contact.mapCode}\n`;
            response += '🚗 Fama parking gratuit!';
        } else if (message.includes('email') || message.includes('mail')) {
            response = `✉️ Email: ${contact.email}\n`;
            response += 'Njawebou fi 24 sa3a!';
        } else {
            response = `📞 Telephone: ${contact.phone}\n`;
            response += `📍 Adresse: ${contact.address}\n`;
            response += `✉️ Email: ${contact.email}\n`;
            response += `🕐 ${contact.hours}\n`;
            response += `⭐ Rating: ${contact.rating}`;
        }

        return response;
    }

    isProgramQuery(message) {
        const programKeywords = ['programme', 'program', 'cours', 'class', 'sport', 'tadrib', 'training', 'chnowa', 'what'];
        return this.containsAny(message, programKeywords);
    }

    getProgramResponse(message) {
        let response = '💪 El programmes mte3na:\n\n';
        response += '🥋 Taekwondo - Art martial Coréen traditionnel\n';
        response += '🥊 Kick Boxing - Combat training w cardio\n';
        response += '🤸♀️ Gymnastics - Flexibilité w body control\n';
        response += '🧕 100% Femmes - Sessions privées lel nissa\n';
        response += '👥 Physique Mixte - Training mixte\n\n';
        response += 'Chnowa yse3dk? 😊';
        return response;
    }

    isCoachQuery(message) {
        const coachKeywords = ['coach', 'trainer', 'instructor', 'modarreb', 'professeur'];
        return this.containsAny(message, coachKeywords);
    }

    getCoachResponse() {
        let response = '👨‍🏫 El coaches mte3na:\n\n';
        this.knowledgeBase.coaches.forEach(coach => {
            response += `• ${coach.name} - ${coach.specialty} (${coach.experience})\n`;
        });
        response += '\nKol el coaches certifiés w professionnels! 💪';
        return response;
    }

    getDefaultResponse() {
        const responses = [
            'Mafehmtech bel behi... Tnajem t3awed? 🤔\n\nTnajem tes2alni 3la:\n• Programmes\n• Horaires\n• Blassa w Contact\n• Coaches',
            'Chnowa theb ta3ref bezzeb? 😊\n\nEna n3awed:\n📋 Programmes\n⏰ Horaires\n📍 Blassa\n📞 Contact',
            'Hmm, ma3ndhich el jaweb l hedhi... 🤔\n\nEssayi tes2alni 3la el programmes, horaires, walla contact info!'
        ];
        return this.randomChoice(responses);
    }

    containsAny(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }

    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BrahmyAcademyChatbot();
});
