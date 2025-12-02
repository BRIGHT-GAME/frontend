import { Dialog } from "@headlessui/react";
import { Play, X, Gift } from "lucide-react";

interface DailyChestModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameAccessToken: string | null;
}

export function DailyChestModal({ isOpen, onClose, gameAccessToken }: DailyChestModalProps) {
//   const handlePlay = () => {
//     if (gameAccessToken) {
//       window.open(`https://backendforgames.com/runner/?walletAddress=${gameAccessToken}`, '_blank');
//     }
//   };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 max-w-md w-full border border-slate-700/50 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 via-yellow-500/20 to-orange-500/20 border-2 border-amber-500/40 backdrop-blur-xl shadow-lg shadow-amber-500/30">
            <Gift className="w-10 h-10 text-amber-400" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-yellow-200">
              Daily Chest Awaits!
            </span>
          </h2>
          
          <p className="text-gray-300 mb-6 text-base">
            A special daily chest is waiting for you in the game! Complete your run to claim your rewards.
          </p>
          
          {/* Play Button */}
          {gameAccessToken ? (
            <a
              href={`https://backendforgames.com/runner/?walletAddress=${gameAccessToken}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full px-6 py-4 rounded-xl font-bold text-lg
                       bg-gradient-to-r from-purple-600 to-blue-600 text-white
                       hover:from-purple-500 hover:to-blue-500
                       transition-all duration-300 
                       flex items-center justify-center gap-3
                       shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-400/50
                       mb-3"
            >
              <Play className="w-6 h-6" fill="currentColor" />
              PLAY
            </a>
          ) : (
            <button
              disabled
              className="w-full px-6 py-4 rounded-xl font-bold text-lg
                       bg-slate-800/50 text-gray-500
                       flex items-center justify-center gap-3
                       border border-slate-700/50 cursor-not-allowed
                       mb-3"
            >
              <Play className="w-6 h-6" fill="currentColor" />
              PLAY
            </button>
          )}
        </div>
      </div>
    </Dialog>
  );
}

