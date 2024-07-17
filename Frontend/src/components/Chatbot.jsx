import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './Chatbot.css'; // Import your chatbot styles here

const Chatbot = () => {
    const [question, setQuestion] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_KEY = 'AIzaSyAQjEmtpagF9uCga4queRqsQMm2gj0NWlg'; // Replace with your actual API key

    // Initialize GoogleGenerativeAI instance with API key
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Function to handle question submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await model.generateContent(question);
            const response = await result.response;
            const text = response.text();
            const plainText = text.replace(/[*#]/g, ''); // Remove markdown syntax

            // Process and format response
            const formattedResponse = formatResponse(plainText);

            setMessages([...messages, { type: 'user', text: question }]);
            
            // Display formatted response gradually
            for (let i = 0; i < formattedResponse.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust delay time as needed
                setMessages(prevMessages => [...prevMessages, { type: 'bot', text: formattedResponse[i] }]);
            }

            setQuestion('');
        } catch (error) {
            console.error('Error generating content:', error);
            setError('Error generating answer. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Function to format response with italics, bold, etc.
    const formatResponse = (text) => {
        // Split text into paragraphs based on double newline
        const paragraphs = text.split(/\n{2,}/);

        // Apply formatting to each paragraph
        const formattedParagraphs = paragraphs.map(paragraph => {
            // Use regex to identify and format text within asterisks as bold
            let formattedText = paragraph.replace(/\*([^\*]+)\*/g, '<b>$1</b>');

            // Use regex to identify and format text within underscores as italic
            formattedText = formattedText.replace(/_([^_]+)_/g, '<i>$1</i>');

            return `<p>${formattedText}</p>`;
        });

        return formattedParagraphs;
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h2 className="chatbot-title">Chat with Chatbot</h2>
            </div>
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`chatbot-message ${message.type}-message`} dangerouslySetInnerHTML={{ __html: message.text }}></div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chatbot-input-form">
                <input
                    type="text"
                    placeholder="Type your question here..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="chatbot-input"
                    required
                />
                <button type="submit" className="chatbot-send-btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Chatbot;
