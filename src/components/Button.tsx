interface ButtonProps {
    text: string;
    onClick: () => void;
}

export function Button({text, onClick}: ButtonProps) {
  return (
    <button
      className="hover:bg-gray-800 text-white py-2 px-4 border-b-2 border-gray-700 hover:border-gray-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
}