import ProfileCard from "../Components/ProfileCard";
import ProfileDashBoard from "../Components/ProfileDashBoard";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    return (
        <div className="mx-auto my-6 flex w-full min-w-0 max-w-[1440px] flex-col items-center justify-center gap-6 px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex w-full max-w-[640px] justify-start">
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    ← Back to Tasks
                </button>
            </div>
            <ProfileCard />
            <ProfileDashBoard />
        </div>
    );
}

export default Profile;
