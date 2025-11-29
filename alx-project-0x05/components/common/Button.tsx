import { ButtonProps } from "@/interfaces";

export default function Button({ action, buttonLabel, buttonBackgroundColor }: ButtonProps) {
  return (
    <button
      onClick={action}
      className={`px-6 py-2 rounded text-white`}
      style={{ backgroundColor: buttonBackgroundColor }}
    >
      {buttonLabel}
    </button>
  );
}
