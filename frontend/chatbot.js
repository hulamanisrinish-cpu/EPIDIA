// EPIDIA AI Assistant - Powered by Gemini AI

const API_URL = 'http://localhost:8000';

class EPIDIAChatbot {
    constructor() {
        this.messages = [];
        this.isOpen = false;
        this.currentContext = null;
        this.init();
    }

    init() {
        this.createChatbotUI();
        this.attachEventListeners();
        this.detectContext();
        this.sendWelcomeMessage();
    }

    createChatbotUI() {
        const chatbotHTML = `
            <button class="chatbot-toggle" id="chatbotToggle">
                🤖
            </button>
            
            <div class="chatbot-container" id="chatbotContainer">
                <div class="chatbot-header">
                    <h3>🤖 EPIDIA AI Assistant</h3>
                    <button class="chatbot-close" id="chatbotClose">×</button>
                </div>
                
                <div class="chatbot-messages" id="chatbotMessages"></div>
                
                <div class="chatbot-input-area">
                    <input 
                        type="text" 
                        class="chatbot-input" 
                        id="chatbotInput" 
                        placeholder="Ask me anything about crisis response..."
                    />
                    <button class="chatbot-send" id="chatbotSend">➤</button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        document.getElementById('chatbotToggle').addEventListener('click', () => this.toggle());
        document.getElementById('chatbotClose').addEventListener('click', () => this.close());
        document.getElementById('chatbotSend').addEventListener('click', () => this.sendMessage());
        document.getElementById('chatbotInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    detectContext() {
        const path = window.location.pathname;
        if (path.includes('foodsight')) this.currentContext = 'foodsight';
        else if (path.includes('climarisk')) this.currentContext = 'climarisk';
        else if (path.includes('demohealth')) this.currentContext = 'demohealth';
        else if (path.includes('aiwatch')) this.currentContext = 'aiwatch';
        else if (path.includes('wealthflow')) this.currentContext = 'wealthflow';
    }

    toggle() {
        this.isOpen = !this.isOpen;
        document.getElementById('chatbotContainer').classList.toggle('active');
    }

    close() {
        this.isOpen = false;
        document.getElementById('chatbotContainer').classList.remove('active');
    }

    sendWelcomeMessage() {
        setTimeout(() => {
            const contextNames = {
                'foodsight': 'Food Security Crisis',
                'climarisk': 'Climate Crisis',
                'demohealth': 'Democratic Health Crisis',
                'aiwatch': 'AI Governance',
                'wealthflow': 'Wealth Inequality'
            };
            
            if (this.currentContext) {
                this.addBotMessage(`Hi! I'm your EPIDIA AI Assistant. I can see you're viewing ${contextNames[this.currentContext]} data. I'm powered by advanced AI and can answer ANY question about crisis response, what to do, who can help, and how to take action. Ask me anything!`);
            } else {
                this.addBotMessage("Hi! I'm your EPIDIA AI Assistant, powered by advanced AI. I provide intelligent guidance on crisis response across food security, climate change, democratic health, AI governance, and wealth inequality. Click on any module and ask me anything!");
            }
        }, 500);
    }

    async sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addUserMessage(message);
        input.value = '';
        
        this.showTyping();
        
        try {
            // Call backend API with Gemini AI
            const response = await fetch(`${API_URL}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    context: this.currentContext
                })
            });
            
            if (!response.ok) {
                throw new Error('API request failed');
            }
            
            const data = await response.json();
            this.hideTyping();
            this.addBotMessage(data.response);
            
        } catch (error) {
            console.error('Chatbot error:', error);
            this.hideTyping();
            this.addBotMessage("I'm having trouble connecting to my AI brain right now. Please make sure the backend server is running (run start.ps1 or start.sh). Try asking your question again in a moment!");
        }
    }

    addUserMessage(text) {
        const messagesDiv = document.getElementById('chatbotMessages');
        messagesDiv.innerHTML += `
            <div class="message user">
                <div class="message-avatar">👤</div>
                <div class="message-content">${this.escapeHtml(text)}</div>
            </div>
        `;
        this.scrollToBottom();
    }

    addBotMessage(text) {
        const messagesDiv = document.getElementById('chatbotMessages');
        // Convert markdown-style formatting to HTML
        const formattedText = this.formatMessage(text);
        messagesDiv.innerHTML += `
            <div class="message bot">
                <div class="message-avatar">🤖</div>
                <div class="message-content">${formattedText}</div>
            </div>
        `;
        this.scrollToBottom();
    }

    formatMessage(text) {
        // Convert basic markdown to HTML
        let formatted = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold
            .replace(/\*(.*?)\*/g, '<em>$1</em>')  // Italic
            .replace(/\n\n/g, '</p><p>')  // Paragraphs
            .replace(/\n/g, '<br>');  // Line breaks
        
        // Wrap in paragraph if not already
        if (!formatted.includes('<p>')) {
            formatted = '<p>' + formatted + '</p>';
        }
        
        return formatted;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showTyping() {
        const messagesDiv = document.getElementById('chatbotMessages');
        messagesDiv.innerHTML += `
            <div class="message bot typing-message">
                <div class="message-avatar">🤖</div>
                <div class="message-content typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        this.scrollToBottom();
    }

    hideTyping() {
        const typing = document.querySelector('.typing-message');
        if (typing) typing.remove();
    }

    scrollToBottom() {
        const messagesDiv = document.getElementById('chatbotMessages');
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
    new EPIDIAChatbot();
});
