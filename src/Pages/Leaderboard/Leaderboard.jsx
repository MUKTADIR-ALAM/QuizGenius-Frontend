import React from 'react'

export default function Leaderboard() {

     // Mock leaderboard data
  const topUsers = [
    { rank: 1, name: "Alex Turing", score: 9850, quizzes: 42, avatar: "https://randomuser.me/api/portraits/men/1.jpg", isYou: false },
    { rank: 2, name: "Sam Block", score: 8720, quizzes: 38, avatar: "https://randomuser.me/api/portraits/women/2.jpg", isYou: false },
    { rank: 3, name: "Jordan Luxe", score: 7650, quizzes: 35, avatar: "https://randomuser.me/api/portraits/men/3.jpg", isYou: false },
    { rank: 4, name: "CryptoKing", score: 7200, quizzes: 32, avatar: "https://randomuser.me/api/portraits/men/4.jpg", isYou: false },
    { rank: 5, name: "You", score: 6890, quizzes: 28, avatar: "https://randomuser.me/api/portraits/women/5.jpg", isYou: true },
    { rank: 6, name: "AI Master", score: 6540, quizzes: 27, avatar: "https://randomuser.me/api/portraits/men/6.jpg", isYou: false },
    { rank: 7, name: "Quiz Wizard", score: 6100, quizzes: 25, avatar: "https://randomuser.me/api/portraits/women/7.jpg", isYou: false },
  ];

  // Crypto rewards tiers
  const cryptoRewards = [
    { rank: "Top 1", reward: "0.1 ETH" },
    { rank: "Top 3", reward: "0.05 ETH" },
    { rank: "Top 10", reward: "0.01 ETH" },
  ];


  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Leaderboard</h1>
            <p className="text-gray-400">Compete with the best and earn crypto rewards</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn btn-ghost bg-white bg-opacity-10 hover:bg-opacity-20">
              🏆 All-Time
            </button>
            <button className="btn btn-ghost bg-white bg-opacity-10 hover:bg-opacity-20">
              🗓️ This Month
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Stats & Rewards */}
          <div className="space-y-6">
            {/* Your Rank Card */}
            <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Your Rank</h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="You" />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-bold">You</p>
                  <p className="text-gray-400">Rank: <span className="text-white font-bold">#5</span></p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Total Score</p>
                  <p className="text-xl font-bold">6,890</p>
                </div>
                <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Quizzes Taken</p>
                  <p className="text-xl font-bold">28</p>
                </div>
              </div>
              <button className="btn btn-outline btn-sm mt-4 w-full border-white text-white hover:bg-white hover:text-black">
                View Profile
              </button>
            </div>

            {/* Crypto Rewards Card */}
            <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-gray-800">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">💰</span> Crypto Rewards
              </h2>
              <p className="text-gray-400 mb-4">
                Top performers earn ETH rewards every month.
              </p>
              <div className="space-y-3">
                {cryptoRewards.map((reward, index) => (
                  <div key={index} className="flex justify-between items-center bg-white bg-opacity-10 p-3 rounded-lg">
                    <span className="font-medium">{reward.rank}</span>
                    <span className="font-bold text-yellow-400">{reward.reward}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-sm mt-4 w-full bg-white text-black hover:bg-gray-200">
                How to Claim
              </button>
            </div>
          </div>

          {/* Right Column - Leaderboard Table */}
          <div className="lg:col-span-2">
            <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Top Players</h2>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="input input-sm bg-white bg-opacity-10 border border-gray-700"
                  />
                  <button className="btn btn-sm bg-white bg-opacity-10 hover:bg-opacity-20">
                    🔍
                  </button>
                </div>
              </div>

              {/* Leaderboard Table */}
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-gray-400">Rank</th>
                      <th className="text-gray-400">Player</th>
                      <th className="text-gray-400">Score</th>
                      <th className="text-gray-400">Quizzes</th>
                      <th className="text-gray-400"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {topUsers.map((user) => (
                      <tr
                        key={user.rank}
                        className={`border-b border-gray-800 hover:bg-white hover:bg-opacity-10 ${user.isYou ? "bg-white bg-opacity-10" : ""}`}
                      >
                        <td>
                          <div className="flex items-center">
                            <span className={`font-bold ${user.rank <= 3 ? "text-yellow-400" : ""}`}>
                              #{user.rank}
                            </span>
                            {user.rank <= 3 && (
                              <span className="ml-2">🏆</span>
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="w-10 rounded-full">
                                <img src={user.avatar} alt={user.name} />
                              </div>
                            </div>
                            <div>
                              <p className="font-bold">{user.name}</p>
                            </div>
                          </div>
                        </td>
                        <td>{user.score.toLocaleString()}</td>
                        <td>{user.quizzes}</td>
                        <td>
                          <button className="btn btn-ghost btn-xs text-white">
                            Challenge
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-6">
                <div className="btn-group">
                  <button className="btn btn-sm bg-white bg-opacity-10 hover:bg-opacity-20">
                    «
                  </button>
                  <button className="btn btn-sm bg-white bg-opacity-10 hover:bg-opacity-20">
                    1
                  </button>
                  <button className="btn btn-sm bg-white bg-opacity-10 hover:bg-opacity-20">
                    2
                  </button>
                  <button className="btn btn-sm bg-white bg-opacity-10 hover:bg-opacity-20">
                    »
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
