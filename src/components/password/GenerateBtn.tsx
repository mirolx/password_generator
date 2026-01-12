interface GenerateBtnProps {
  onClick: () => void;
}

const GenerateBtn = ({ onClick }: GenerateBtnProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-password-button text-password-button-text px-12 py-3 rounded-full text-xl font-normal hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
    >
      generate
    </button>
  );
};

export default GenerateBtn;
