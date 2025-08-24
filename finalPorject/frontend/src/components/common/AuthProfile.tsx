import { useState } from "react";
import { LogOut } from "lucide-react";

export default function AuthProfile() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const logout = () => {
    console.log("logout");
  };
  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="flex items-center space-x-2"
        >
          <img
            src={`https://gravatar.com/avatar/${Math.random()
              .toString(36)
              .substring(2)}?d=identicon`}
            className="w-8 h-8 rounded-full border-2 border-blue-500"
          />
        </button>

        {isUserMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-1 z-50">
            <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-700">
              <p className="text-sm font-medium">testname</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">test</p>
            </div>
            <button
              onClick={() => {
                logout();
                setIsUserMenuOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
}
