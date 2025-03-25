import React from 'react';
import { FaChartLine, FaUserFriends, FaQuestionCircle, FaRobot, FaTrophy, FaCog } from 'react-icons/fa';
import { BsGraphUp, BsCollectionPlay } from 'react-icons/bs';

const MainDashboard = () => {
    // Sample data - replace with your actual data
    const stats = {
        totalQuizzes: 128,
        activeUsers: 542,
        questionsAnswered: 3842,
        accuracyRate: 87
    };
    
    const recentQuizzes = [
        { id: 1, title: 'JavaScript Basics', category: 'Programming', participants: 142 },
        { id: 2, title: 'World Capitals', category: 'Geography', participants: 89 },
        { id: 3, title: 'AI Fundamentals', category: 'Technology', participants: 203 },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">QuizMaster Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening with your app.</p>
            </header>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard 
                    icon={<FaChartLine className="text-blue-500" size={24} />} 
                    title="Total Quizzes" 
                    value={stats.totalQuizzes} 
                    trend="+12% from last month" 
                />
                <StatCard 
                    icon={<FaUserFriends className="text-green-500" size={24} />} 
                    title="Active Users" 
                    value={stats.activeUsers} 
                    trend="+23% from last week" 
                />
                <StatCard 
                    icon={<FaQuestionCircle className="text-purple-500" size={24} />} 
                    title="Questions Answered" 
                    value={stats.questionsAnswered} 
                    trend="+1,240 today" 
                />
                <StatCard 
                    icon={<FaRobot className="text-orange-500" size={24} />} 
                    title="AI Accuracy Rate" 
                    value={`${stats.accuracyRate}%`} 
                    trend="+3% improvement" 
                />
            </div>
            
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">Recent Quiz Activity</h2>
                        <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                            View All
                        </button>
                    </div>
                    <div className="space-y-4">
                        {recentQuizzes.map(quiz => (
                            <QuizItem key={quiz.id} quiz={quiz} />
                        ))}
                    </div>
                </div>
                
                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
                    <div className="space-y-4">
                        <ActionButton 
                            icon={<BsCollectionPlay size={20} />} 
                            title="Create New Quiz" 
                            description="Start building a new quiz from scratch" 
                        />
                        <ActionButton 
                            icon={<FaRobot size={20} />} 
                            title="AI Quiz Generator" 
                            description="Let AI create a quiz for you" 
                        />
                        <ActionButton 
                            icon={<BsGraphUp size={20} />} 
                            title="View Analytics" 
                            description="See detailed performance metrics" 
                        />
                        <ActionButton 
                            icon={<FaTrophy size={20} />} 
                            title="Leaderboards" 
                            description="Top performers and rankings" 
                        />
                    </div>
                </div>
            </div>
            
            {/* AI Insights Section */}
            <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-semibold mb-2">AI-Powered Insights</h2>
                        <p className="opacity-90">
                            Our AI has detected that users are struggling with JavaScript closure questions. 
                            Consider adding more practice material in this area.
                        </p>
                    </div>
                    <button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium">
                        View Detailed Report
                    </button>
                </div>
            </div>
        </div>
    );
};

// Reusable Components
const StatCard = ({ icon, title, value, trend }) => (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start">
        <div className="mr-4 p-3 bg-gray-100 rounded-lg">{icon}</div>
        <div>
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <p className="text-2xl font-bold text-gray-800 my-1">{value}</p>
            <p className="text-xs text-green-600">{trend}</p>
        </div>
    </div>
);

const QuizItem = ({ quiz }) => (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition">
        <div>
            <h3 className="font-medium text-gray-800">{quiz.title}</h3>
            <p className="text-sm text-gray-500">{quiz.category}</p>
        </div>
        <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-3">{quiz.participants} participants</span>
            <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                View
            </button>
        </div>
    </div>
);

const ActionButton = ({ icon, title, description }) => (
    <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition flex items-start">
        <span className="mr-3 p-2 bg-gray-100 rounded-lg text-gray-700">{icon}</span>
        <div>
            <h3 className="font-medium text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    </button>
);

export default MainDashboard;