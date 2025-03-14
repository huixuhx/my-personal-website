import clsx from "clsx"; // ✅ Helps conditionally merge classes
import { HiArrowSmRight } from "react-icons/hi";
type ContactButtonProps = {
  className?: string;
  size?: "small" | "medium" | "large"; // ✅ Allow predefined sizes
};

export default function ContactButton({ className, size = "medium" }: ContactButtonProps) {
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-lg",
    large: "px-8 py-4 text-xl",
  };

  return (
    <div className={className}>
      <div className="flex justify-center">
        <button
          onClick={() =>
            (window.location.href =
              "mailto:huixuhx@outlook.com?subject=Hiring Inquiry&body=Hi, I’d like to discuss a job opportunity.")
          }
          className={clsx(
            "flex items-center justify-center gap-2 bg-black text-white font-semibold rounded-full shadow-md hover:scale-110 transition-all duration-300",
            sizeClasses[size] // ✅ Dynamically apply size classes
          )}
        >
          Hire Me
          <HiArrowSmRight />
        </button>
      </div>
    </div>
  );
}
