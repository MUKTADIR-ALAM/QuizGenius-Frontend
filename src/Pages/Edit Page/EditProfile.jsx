const EditProfile = () => {
  const userProfile = {
    name: "Alex Turing",
    email: "alex@quizgenius.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    plan: "Premium",
    quizzesContributed: 24,
    lastActive: "2 hours ago",
  };
  return (
    <section className="w-11/12 max-w-lg mx-auto py-12">
      <h3 className="font-bold text-2xl">Edit Profile</h3>

      <div className="mt-6">
        <div className="flex gap-2">
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={userProfile?.name}
              className="input w-full"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={userProfile?.email}
              className="input w-full"
            />
          </div>
        </div>
        <div className="w-full mt-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={userProfile?.avatar}
            className="input w-full"
          />
        </div>

        <button className="btn mt-4 btn-primary">Save and Continue</button>
      </div>
    </section>
  );
};

export default EditProfile;
