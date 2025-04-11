import React, { useContext } from 'react'
import { NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

      // Mock data
  const userProfile = {
    name: "Alex Turing",
    email: "alex@quizgenius.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    plan: "Basic",
    quizzesContributed: 24,
    lastActive: "2 hours ago",
  };

  const recentQuizzes = [
    { id: 1, title: "Advanced JavaScript Concepts", plays: 142, date: "2023-10-15" },
    { id: 2, title: "Crypto Basics", plays: 89, date: "2023-10-10" },
    { id: 3, title: "AI Fundamentals", plays: 56, date: "2023-10-05" },
  ];

  const performanceStats = [
    { label: "Avg. Score", value: "87%", trend: "↑ 5%" },
    { label: "Quizzes Taken", value: "42", trend: "↑ 12" },
    { label: "Leaderboard Rank", value: "#14", trend: "↑ 3" },
  ];


  return (
    <div className=" min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button className="btn btn-ghost bg-white bg-opacity-10 hover:bg-opacity-20">
            Settings
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {performanceStats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-5 p-6 rounded-lg border border-gray-800">
              <p className="text-gray-400">{stat.label}</p>
              <div className="flex items-end mt-2">
                <p className="text-3xl font-bold mr-2">{stat.value}</p>
                <span className="text-green-400 text-sm">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Plan */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-opacity-5 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="avatar mr-4">
                  <div className="w-16 rounded-full">
                    <img src={user?.photoURL} alt={userProfile.name} referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold">{user?.displayName}</h2>
                  <p className="">{user?.email}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="">Plan</span>
                  <span className="font-bold flex items-center">
                    {userProfile.plan}
                    {userProfile.plan === "Premium" && (
                      <span className="ml-2 text-xs bg-green-900 text-green-300 px-2 py-1 rounded">
                        ACTIVE
                      </span>
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="">Quizzes Contributed</span>
                  <span className="font-bold">{userProfile.quizzesContributed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Last Active</span>
                  <span className="font-bold">{userProfile.lastActive}</span>
                </div>
              </div>
              <button className="btn btn-outline btn-sm mt-6 w-full border-black">
                Edit Profile
              </button>
            </div>

            {/* Plan Upgrade Card */}
            <div className="bg-opacity-5 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold mb-4">Upgrade Your Plan</h3>
              <p className="mb-4">
                Unlock premium features with crypto or card payments.
              </p>
              <div className="space-y-3">
                <button className="btn btn-block bg-white text-black hover:bg-gray-200">
                  Upgrade to Premium
                </button>
                <button className="btn btn-block bg-transparent text-black border-black">
                  Pay with Crypto
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Quizzes & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Quizzes */}
            <div className="bg-opacity-5 p-6 rounded-lg border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Your Recent Quizzes</h2>
                <button className="btn btn-ghost btn-sm text-white">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-gray-400">Quiz Title</th>
                      <th className="text-gray-400">Plays</th>
                      <th className="text-gray-400">Date</th>
                      <th className="text-gray-400"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentQuizzes.map((quiz) => (
                      <tr key={quiz.id} className="border-b border-gray-800 hover:bg-white hover:bg-opacity-10">
                        <td>{quiz.title}</td>
                        <td>{quiz.plays}</td>
                        <td>{quiz.date}</td>
                        <td>
                          <button className="btn btn-ghost btn-xs text-white">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" bg-opacity-5 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-bold mb-4">Create New Quiz</h3>
                <p className="text-gray-400 mb-4">
                  Craft an AI-powered quiz in minutes.
                </p>
                <NavLink to={'/quiz-page'} className="btn btn-block bg-white text-black hover:bg-gray-200">
                  Start Creating
                </NavLink>
              </div>
              <div className=" bg-opacity-5 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-bold mb-4">Performance Analytics</h3>
                <p className="text-gray-400 mb-4">
                  Dive deep into your quiz statistics.
                </p>
                <button className="btn btn-block bg-transparent border-black">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
