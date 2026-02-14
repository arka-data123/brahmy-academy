# Brahmy Academy Chatbot - Documentation

## Overview
The Brahmy Academy website now features an intelligent chatbot assistant that can communicate in **Tunisian Arabic dialect** (Darija) as well as French and English. The chatbot provides instant answers about the gym's programs, schedules, and contact information.

## Features

### 🇹🇳 Tunisian Dialect Support
The chatbot understands and responds in authentic Tunisian Arabic, including:

**Common Greetings:**
- Ahla, Salam, Labess, Kifech
- صباح الخير، مساء الخير، اهلا

**Tunisian Phrases Recognized:**
- `kifech` - how
- `wa9tech` - when
- `win` - where
- `9adech` - how much
- `chnowa` - what
- `fama` - is there
- `nheb` / `bech` - I want / want to
- `blassa` - place/location
- `sa3a` / `wa9t` - time/hour
- `nhar` / `youm` - day
- And many more!

**Days of the Week in Tunisian:**
- Thnin (Monday)
- Tletha (Tuesday)
- Arb3a (Wednesday)
- Khmis (Thursday)
- Jom3a (Friday)
- Sebt (Saturday)
- Had (Sunday)

### 📚 Knowledge Base

The chatbot has complete knowledge of:

#### 1. **Class Schedule**
- Taekwondo sessions (Monday, Wednesday, Friday 5-6:30 PM)
- Kick Boxing sessions (Multiple times throughout the week)
- Gymnastics classes (Tuesday, Thursday, Sunday)
- Women-Only sessions (Tuesday & Thursday evenings)

#### 2. **Contact Information**
- Phone: 92 140 140
- WhatsApp: 92 140 140
- Email: contact@brahmyacademy.com
- Address: 1 Rue Du Moknine, Manouba, Tunisia
- Map Code: R3FJ+QP Manouba
- Hours: Open Daily until 10 PM
- Rating: 4.8/5 ⭐

#### 3. **Programs**
- Taekwondo - Traditional Korean martial arts
- Kick Boxing - High-intensity combat training
- Gymnastics - Flexibility and body control
- Women-Only Sessions - Private training space
- Co-ed Training - Mixed fitness programs

#### 4. **Coaches**
- Master Ahmed Brahmi (Taekwondo, 15+ years)
- Coach Karim Mansouri (Kick Boxing, 10+ years)
- Coach Amira Ben Salem (Women's Fitness, 8+ years)

## User Interface

### Chat Widget
- **Location**: Fixed bottom-right corner
- **Toggle Button**: Yellow/lime gradient circle with chat icon 💬
- **Design**: Modern dark theme matching website aesthetic
- **Responsive**: Adapts to mobile screens

### Chat Features
- **Auto-greeting**: Welcomes users in Tunisian dialect
- **Quick Suggestions**: 4 preset buttons for common queries
  - 📋 Programmes
  - ⏰ Horaires
  - 📍 Blassa (Location)
  - 📞 Contact
- **Message History**: Scrollable conversation view
- **Real-time Responses**: Instant answers with typing simulation

## Example Conversations

### Example 1: Schedule Query (Tunisian)
**User:** "Wa9tech el horaires mte3 taekwondo?"  
**Bot:** "🥋 Taekwondo:
• Monday: 5:00 - 6:30 PM
• Wednesday: 5:00 - 6:30 PM
• Friday: 5:00 - 6:30 PM

📞 Appeli 3la 92 140 140 bech treservi!"

### Example 2: Location Query (Tunisian)
**User:** "Win blastkom?"  
**Bot:** "📍 Blastna fi: 1 Rue Du Moknine, Manouba, Tunisia
🗺️ Code: R3FJ+QP Manouba
🚗 Fama parking gratuit!"

### Example 3: Programs Query (Mixed)
**User:** "Chnowa el programmes eli 3andkom?"  
**Bot:** "💪 El programmes mte3na:

🥋 Taekwondo - Art martial Coréen traditionnel
🥊 Kick Boxing - Combat training w cardio
🤸♀️ Gymnastics - Flexibilité w body control
🧕 100% Femmes - Sessions privées lel nissa
👥 Physique Mixte - Training mixte

Chnowa yhebbek? 😊"

### Example 4: Contact Query (Tunisian)
**User:** "9adech el numero?"  
**Bot:** "📞 El numero mte3na: 92 140 140
💬 WhatsApp: 92 140 140
Tnajem t9abelna kol youm!"

## Technical Implementation

### Files Created
1. **`js/chatbot.js`** - Main chatbot logic and AI
2. **`css/chatbot.css`** - Chatbot UI styles

### Key Components

#### BrahmyAcademyChatbot Class
```javascript
- initializeKnowledge() - Loads schedule, contact, programs data
- initializeTunisianDialect() - Sets up Tunisian phrases & responses
- generateResponse() - AI logic for understanding queries
- isScheduleQuery() - Detects schedule-related questions
- isContactQuery() - Detects contact information requests
- isProgramQuery() - Detects program inquiries
```

### Response Intelligence
The chatbot uses keyword matching and context analysis to:
- Detect the language (Tunisian, French, English)
- Identify the intent (schedule, contact, programs, etc.)
- Provide relevant, contextual responses
- Handle mixed-language queries

## Customization

### Adding New Phrases
Edit `initializeTunisianDialect()` in `chatbot.js`:
```javascript
phrases: {
  'your_phrase': 'meaning',
  // Add more phrases
}
```

### Updating Knowledge Base
Edit `initializeKnowledge()` in `chatbot.js`:
```javascript
schedule: {
  taekwondo: [
    { day: 'Monday', time: '5:00 - 6:30 PM' },
    // Add or modify sessions
  ]
}
```

### Styling Changes
Modify `css/chatbot.css`:
- Colors: Change gradient colors
- Size: Adjust `.chat-container` dimensions
- Position: Modify `.chat-widget` bottom/right values

## Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Accessibility
- Keyboard navigation support
- ARIA labels for screen readers
- Reduced motion support
- High contrast design

## Future Enhancements
Potential improvements:
- [ ] AI-powered natural language processing
- [ ] Voice input/output
- [ ] Multi-language switching button
- [ ] Chat history persistence
- [ ] Integration with booking system
- [ ] Live chat handoff to staff
- [ ] Sentiment analysis
- [ ] Analytics tracking

## Support
For chatbot customization or issues:
- Review code comments in `chatbot.js`
- Check console for error messages
- Test in different browsers
- Verify all files are properly linked in HTML

---

**Status**: ✅ Fully Functional  
**Language Support**: 🇹🇳 Tunisian Arabic, 🇫🇷 French, 🇬🇧 English  
**Knowledge**: Complete schedule, contact, programs, coaches  
**UI**: Modern, responsive, accessible
