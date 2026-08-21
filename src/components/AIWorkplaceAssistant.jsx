'use client';

import { useState } from 'react';
import { Send, Menu, X, FileText, CheckCircle, Search, MessageCircle, Mail } from 'lucide-react';

export default function AIWorkplaceAssistant() {
  // SIDEBAR STATE
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // EMAIL GENERATOR STATE
  const [emailTone, setEmailTone] = useState('professional');
  const [emailAudience, setEmailAudience] = useState('client');
  const [emailTopic, setEmailTopic] = useState('');
  const [emailOutput, setEmailOutput] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);

  // MEETING NOTES STATE
  const [meetingTranscript, setMeetingTranscript] = useState('');
  const [meetingSummary, setMeetingSummary] = useState(null);
  const [meetingLoading, setMeetingLoading] = useState(false);

  // TASKS STATE
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish Portfolio POE', due: 'Today 2PM', priority: 'high' },
    { id: 2, title: 'Update CV for Learnership', due: 'Tomorrow', priority: 'medium' },
    { id: 3, title: 'Practice Excel formulas', due: 'This week', priority: 'low' },
  ]);

  // RESEARCH STATE
  const [researchQuery, setResearchQuery] = useState('');
  const [researchResult, setResearchResult] = useState('');
  const [researchLoading, setResearchLoading] = useState(false);

  // CHATBOT STATE
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hi! How can I help you with your work today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  // HANDLERS
  const handleGenerateEmail = async () => {
    if (!emailTopic.trim()) {
      alert('Please enter an email topic');
      return;
    }
    
    setEmailLoading(true);
    try {
      // Simulated API call - replace with real API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEmailOutput(`Subject: ${emailTopic}\n\nDear [Recipient Name],\n\nI hope this message finds you well. ${emailTopic}\n\nBest regards,\nXolile C. Malope`);
    } catch (error) {
      console.error('Email generation failed:', error);
      alert('Failed to generate email');
    } finally {
      setEmailLoading(false);
    }
  };

  const handleSummarizeMeeting = async () => {
    if (!meetingTranscript.trim()) {
      alert('Please paste your meeting transcript');
      return;
    }

    setMeetingLoading(true);
    try {
      // Simulated API call - replace with real API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMeetingSummary({
        keyPoints: [
          'Sales increased by 15% in Q2',
          'Market expansion planned for Q3',
          'New product launch scheduled'
        ],
        actions: [
          'Xolile to prepare Excel report by Friday',
          'Team to review market data by Wednesday',
          'Manager to approve budget by next Monday'
        ],
        deadlines: [
          'Client presentation - 28 Aug 2026',
          'Report submission - 25 Aug 2026',
          'Budget approval - 26 Aug 2026'
        ]
      });
    } catch (error) {
      console.error('Meeting summary failed:', error);
      alert('Failed to summarize meeting');
    } finally {
      setMeetingLoading(false);
    }
  };

  const handleResearch = async () => {
    if (!researchQuery.trim()) {
      alert('Please enter a research question');
      return;
    }

    setResearchLoading(true);
    try {
      // Simulated API call - replace with real API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResearchResult(
        `Based on current research, top trends in "${researchQuery}" include:\n\n` +
        `1. AI-driven analytics and automation\n` +
        `2. Predictive modeling and forecasting\n` +
        `3. Real-time data visualization with Power BI and Tableau\n` +
        `4. Machine learning integration in business processes\n` +
        `5. Cloud-based data infrastructure\n\n` +
        `These trends are shaping how organizations approach data management and decision-making.`
      );
    } catch (error) {
      console.error('Research failed:', error);
      alert('Failed to retrieve research data');
    } finally {
      setResearchLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), sender: 'user', text: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setChatLoading(true);

    try {
      // Simulated API call - replace with real API
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const botMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: `I understand you need help with: "${chatInput}". Here's what I can do: 1) Draft the email, 2) Schedule it, 3) Add follow-up reminders. What would you prefer?`
      };
      setChatMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat failed:', error);
    } finally {
      setChatLoading(false);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleAddTask = (title) => {
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title,
      due: 'Not set',
      priority: 'low'
    };
    setTasks(prev => [...prev, newTask]);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 border-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-50 border-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-50 border-green-100 text-green-700';
      default:
        return 'bg-gray-50 border-gray-100 text-gray-700';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return '🔴';
      case 'medium':
        return '🟡';
      case 'low':
        return '🟢';
      default:
        return '⚪';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* SIDEBAR */}
      <aside className={`fixed md:static w-64 h-screen bg-white border-r transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} md:flex flex-col p-6 z-40`}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-bold text-indigo-600">AI WorkBoost</h1>
            <p className="text-xs text-gray-400">Workplace Productivity Assistant</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1 hover:bg-gray-100 rounded"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-2 text-sm flex-1">
          {[
            { id: 'dashboard', icon: '📊', label: 'Dashboard' },
            { id: 'email', icon: '✉️', label: 'Smart Email' },
            { id: 'meeting', icon: '📝', label: 'Meeting Notes' },
            { id: 'tasks', icon: '✅', label: 'AI Task Planner' },
            { id: 'research', icon: '🔍', label: 'Research Assistant' },
            { id: 'chatbot', icon: '💬', label: 'AI Chatbot' }
          ].map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setSidebarOpen(false)}
              className={`block p-2 rounded-lg transition ${
                item.id === 'dashboard'
                  ? 'bg-indigo-50 text-indigo-600 font-semibold'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {item.icon} {item.label}
            </a>
          ))}
        </nav>

        <div className="text-[10px] text-gray-400 pt-4 border-t">
          ⚠️ AI-generated content may require human review
        </div>
      </aside>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 right-6 md:hidden bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 z-30"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-auto">
        {/* HEADER */}
        <header className="bg-white border-b p-4 sticky top-0 z-20">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Dashboard</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Xolile C. Malope</span>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-semibold" title="User avatar">
                XC
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8 space-y-10 max-w-7xl">
          {/* DASHBOARD STATS */}
          <section id="dashboard" className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Emails Generated', value: 24, icon: Mail },
              { label: 'Meetings Summarized', value: 12, icon: FileText },
              { label: 'Tasks Planned', value: 48, icon: CheckCircle }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                      <p className="text-3xl font-bold text-indigo-600 mt-2">{stat.value}</p>
                    </div>
                    <Icon className="text-gray-300" size={32} />
                  </div>
                </div>
              );
            })}
          </section>

          {/* SMART EMAIL GENERATOR */}
          <section id="email" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
              <Mail size={24} /> Smart Email Generator
            </h3>
            <p className="text-sm text-gray-500 mb-4">AI-powered email drafting based on tone and audience</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tone</label>
                  <select
                    value={emailTone}
                    onChange={(e) => setEmailTone(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="professional">Professional</option>
                    <option value="friendly">Friendly</option>
                    <option value="formal">Formal</option>
                    <option value="persuasive">Persuasive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Audience</label>
                  <select
                    value={emailAudience}
                    onChange={(e) => setEmailAudience(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="client">Client</option>
                    <option value="manager">Manager</option>
                    <option value="team">Team</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Topic</label>
                  <textarea
                    value={emailTopic}
                    onChange={(e) => setEmailTopic(e.target.value)}
                    placeholder="e.g., Requesting deadline extension for Tech Trend report"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                </div>

                <button
                  onClick={handleGenerateEmail}
                  disabled={emailLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white py-2 rounded-lg text-sm font-semibold transition"
                >
                  {emailLoading ? 'Generating...' : 'Generate Email'}
                </button>
              </div>

              <div className="bg-slate-50 border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-3">📧 AI Output Preview:</p>
                {emailOutput ? (
                  <div className="text-sm text-gray-700 whitespace-pre-wrap bg-white p-3 rounded border border-gray-200 max-h-48 overflow-y-auto">
                    {emailOutput}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 italic">Your generated email will appear here...</p>
                )}
                <p className="mt-4 text-[10px] text-amber-600">⚠️ AI-generated content may require human review</p>
              </div>
            </div>
          </section>

          {/* MEETING NOTES SUMMARIZER */}
          <section id="meeting" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
              <FileText size={24} /> Meeting Notes Summarizer
            </h3>
            <p className="text-sm text-gray-500 mb-4">Extract key points, actions, and deadlines from your meeting</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Transcript</label>
                <textarea
                  value={meetingTranscript}
                  onChange={(e) => setMeetingTranscript(e.target.value)}
                  placeholder="Paste your meeting transcript here..."
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm h-40 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
                <button
                  onClick={handleSummarizeMeeting}
                  disabled={meetingLoading}
                  className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white py-2 rounded-lg text-sm font-semibold transition"
                >
                  {meetingLoading ? 'Summarizing...' : 'Summarize Meeting'}
                </button>
              </div>

              <div className="bg-slate-50 border border-gray-200 rounded-lg p-4">
                {meetingSummary ? (
                  <div className="text-sm space-y-4">
                    <div>
                      <p className="font-bold text-gray-800 mb-2">📌 Key Points:</p>
                      <ul className="space-y-1 text-gray-600">
                        {meetingSummary.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span>•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-2">✅ Actions:</p>
                      <ul className="space-y-1 text-gray-600">
                        {meetingSummary.actions.map((action, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span>•</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-2">📅 Deadlines:</p>
                      <ul className="space-y-1 text-gray-600">
                        {meetingSummary.deadlines.map((deadline, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span>•</span>
                            <span>{deadline}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 italic">Summary will appear here...</p>
                )}
              </div>
            </div>
          </section>

          {/* AI TASK PLANNER */}
          <section id="tasks" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
              <CheckCircle size={24} /> AI Task Planner
            </h3>
            <p className="text-sm text-gray-500 mb-4">Organize and prioritize your tasks</p>
            
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className={`flex justify-between items-center border rounded-lg p-3 text-sm transition ${getPriorityColor(task.priority)}`}
                >
                  <div className="flex items-center gap-2 flex-1">
                    <span>{getPriorityIcon(task.priority)}</span>
                    <span>{task.title}</span>
                    <span className="text-xs opacity-75">({task.due})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-xs capitalize">{task.priority}</span>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="hover:opacity-70 transition"
                      title="Delete task"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 border border-gray-200 rounded-lg bg-gray-50">
              <p className="text-xs text-gray-600 mb-2">💡 Tip: Tasks are automatically prioritized based on urgency</p>
            </div>
          </section>

          {/* AI RESEARCH ASSISTANT */}
          <section id="research" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
              <Search size={24} /> AI Research Assistant
            </h3>
            <p className="text-sm text-gray-500 mb-4">Get insights on any topic relevant to your work</p>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={researchQuery}
                  onChange={(e) => setResearchQuery(e.target.value)}
                  placeholder="Ask a research question: e.g., What are the latest trends in data analysis?"
                  className="flex-1 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleResearch()}
                />
                <button
                  onClick={handleResearch}
                  disabled={researchLoading}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                >
                  {researchLoading ? '...' : 'Search'}
                </button>
              </div>

              {researchResult && (
                <div className="bg-slate-50 border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">📊 Insights & Summary:</p>
                  <p className="text-sm text-gray-600 whitespace-pre-wrap">{researchResult}</p>
                </div>
              )}
            </div>
          </section>

          {/* AI CHATBOT */}
          <section id="chatbot" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
              <MessageCircle size={24} /> AI Chatbot Interface
            </h3>
            <p className="text-sm text-gray-500 mb-4">Get instant help with any workplace task</p>
            
            <div className="border border-gray-200 rounded-xl flex flex-col h-96">
              {/* CHAT MESSAGES */}
              <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
                {chatMessages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                        msg.sender === 'user'
                          ? 'bg-indigo-600 text-white rounded-br-none'
                          : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {chatLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-500">
                      AI is typing...
                    </div>
                  </div>
                )}
              </div>

              {/* CHAT INPUT */}
              <div className="p-3 border-t border-gray-200 flex gap-2 bg-white">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  disabled={chatLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={chatLoading || !chatInput.trim()}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
