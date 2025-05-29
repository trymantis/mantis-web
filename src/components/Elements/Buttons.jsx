const PrimaryBtn = ({ title, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-SF w-auto text-center text-sm py-3 px-4 rounded bg-lemon text-green flex items-center gap-2"
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

const SecondaryBtn = ({ title, icon: Icon, bColor, tColor, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`font-SF w-auto text-center text-sm py-3 px-4 rounded border border-${bColor} text-${tColor} flex items-center gap-2 ${className}`}
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

export { PrimaryBtn, SecondaryBtn };
