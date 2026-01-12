interface InputGroupProps {
  length: string;
  setLength: (value: string) => void;
  includeNumbers: string;
  setIncludeNumbers: (value: string) => void;
  includeSpecialChars: string;
  setIncludeSpecialChars: (value: string) => void;
}

const InputGroup = ({
  length,
  setLength,
  includeNumbers,
  setIncludeNumbers,
  includeSpecialChars,
  setIncludeSpecialChars,
}: InputGroupProps) => {
  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setLength(value);
    }
  };

  const handleYNChange = (
    value: string,
    setter: (value: string) => void
  ) => {
    const upperValue = value.toUpperCase();
    if (upperValue === '' || upperValue === 'Y' || upperValue === 'N') {
      setter(upperValue);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div>
        <label className="block text-password-label text-center mb-2 text-lg">
          Minimum length
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={length}
          onChange={handleLengthChange}
          className="w-full bg-password-input rounded-lg px-4 py-3 text-password-text text-center text-lg focus:outline-none focus:ring-2 focus:ring-white/30"
          placeholder=""
        />
      </div>

      <div>
        <label className="block text-password-label text-center mb-2 text-lg">
          Numbers? (Y/N)
        </label>
        <input
          type="text"
          value={includeNumbers}
          onChange={(e) => handleYNChange(e.target.value, setIncludeNumbers)}
          maxLength={1}
          className="w-full bg-password-input rounded-lg px-4 py-3 text-password-text text-center text-lg uppercase focus:outline-none focus:ring-2 focus:ring-white/30"
          placeholder=""
        />
      </div>

      <div>
        <label className="block text-password-label text-center mb-2 text-lg">
          Special Characters? (Y/N)
        </label>
        <input
          type="text"
          value={includeSpecialChars}
          onChange={(e) => handleYNChange(e.target.value, setIncludeSpecialChars)}
          maxLength={1}
          className="w-full bg-password-input rounded-lg px-4 py-3 text-password-text text-center text-lg uppercase focus:outline-none focus:ring-2 focus:ring-white/30"
          placeholder=""
        />
      </div>
    </div>
  );
};

export default InputGroup;
