import { MdMenu } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const DashboardHeader = () => {
  const { user } = useAuth();
  return (
    <header className="py-2 border-b mb-2">
      <section className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">
          Welcome <span>{user?.name}</span>
        </h3>

        <label
          htmlFor="my-drawer-2"
          className="btn bg-main text-white drawer-button lg:hidden"
        >
          <MdMenu />
        </label>
      </section>
    </header>
  );
};

export default DashboardHeader;
