import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface DisplayProps {
  password: string;
}

const Display = ({ password }: DisplayProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    if (!password) return;
    
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Password copied to clipboard",
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full bg-password-display rounded-full px-6 py-4 flex items-center justify-between shadow-sm">
      <span className="text-password-text font-mono text-lg truncate flex-1 mr-4">
        {password || ""}
      </span>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Copy password"
      >
        {copied ? (
          <Check className="w-6 h-6 text-green-600" />
        ) : (
          <Copy className="w-6 h-6 text-password-text" />
        )}
      </button>
    </div>
  );
};

export default Display;
