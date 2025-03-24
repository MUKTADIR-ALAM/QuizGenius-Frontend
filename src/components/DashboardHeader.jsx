import useAuth from "../hooks/useAuth";


const DashboardHeader = () => {
    const { user } = useAuth();
    return (
        <header className="sticky top-0 z-50 bg-base-200 shadow-lg">
            <section className="w-11/12 mx-auto">
                <h3>Welcome <span>{user?.name}</span></h3>
            </section>
        </header>
    );
};

export default DashboardHeader;