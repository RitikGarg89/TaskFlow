import React from "react";
import ProfileCard from "../Components/ProfileCard";
import ProfileDashBoard from "../Components/ProfileDashBoard";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50 p-4 py-12">
            <div className="flex w-full max-w-[640px] justify-start">
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
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