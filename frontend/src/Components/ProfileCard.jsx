import React from "react";
import { useSelector } from "react-redux";

function ProfileCard() {
    const user = useSelector((state) => state.auth.user);

    const formattedDate = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
          })
        : "Recent";

    return (
        <div className="flex flex-col items-center justify-between gap-2">
            <p className="text-4xl font-semibold">{user?.name || "User"}</p>
            <p className="text-lg font-medium text-slate-600">
                {user?.email || "No email provided"}
            </p>
            <p className="text-md font-medium text-slate-500">
                Member since {formattedDate}
            </p>
        </div>
    );
}

export default ProfileCard;