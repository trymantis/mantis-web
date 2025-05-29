import { cn } from "../../lib/utils";

export const PrimaryBtn = ({
  title,
  icon: Icon,
  onClick,
  type = "button",
  disabled = false,
  className,
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "bg-lemon text-green px-4 py-3 rounded-md font-SF text-sm transition-all duration-200",
        "hover:bg-cream disabled:opacity-50 disabled:cursor-not-allowed",
        "flex items-center justify-center gap-2",
        className
      )}
    >
      {typeof Icon === "string" ? (
        <img src={Icon} alt={title || "icon"} className="w-4 h-4" />
      ) : (
        Icon
      )}
      {title}
    </button>
  );
};

export const SecondaryBtn = ({
  title,
  icon: Icon,
  bColor,
  tColor,
  onClick,
  type = "button",
  disabled = false,
  className,
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`font-SF w-auto text-center text-sm py-3 px-4 rounded border border-${bColor} text-${tColor} flex items-center gap-2 ${className} disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200`}
    >
      {typeof Icon === "string" ? (
        <img src={Icon} alt={title || "icon"} className="w-4 h-4" />
      ) : (
        Icon
      )}
      {title}
    </button>
  );
};


