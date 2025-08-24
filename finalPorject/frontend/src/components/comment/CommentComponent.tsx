import { Trash } from "lucide-react";

export default function CommentComponent() {
  return (
    <div className="mb-6">
      <div className="flex gap-4">
        <img
          alt="Tracey Wilson"
          className="w-10 h-10 rounded-full"
          src="https://gravatar.com/avatar/42b0d0e8377b33f970e9eeded0cb5a62?d=identicon"
        />
        <div className="flex-1">
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-white">Tracey Wilson</span>
              <span className="text-sm text-gray-400">August 21, 2025</span>
            </div>
            <p className="text-gray-300">
              This is a great article! The insights about remote work are
              particularly relevant.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-blue-400 transition-colors">
              <Trash className="w-4 h-4" aria-hidden="true" />
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
