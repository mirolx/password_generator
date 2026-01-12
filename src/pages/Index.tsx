import { useState } from "react";
import Header from "@/components/password/Header";
import Display from "@/components/password/Display";
import InputGroup from "@/components/password/InputGroup";
import GenerateBtn from "@/components/password/GenerateBtn";
import { generatePassword } from "@/utils/generatePassword";

const Index = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState("12");
  const [includeNumbers, setIncludeNumbers] = useState("Y");
  const [includeSpecialChars, setIncludeSpecialChars] = useState("Y");

  const handleGenerate = () => {
    const passwordLength = parseInt(length) || 12;
    const newPassword = generatePassword({
      length: passwordLength,
      includeNumbers: includeNumbers === "Y",
      includeSpecialChars: includeSpecialChars === "Y",
    });
    setPassword(newPassword);
  };

  return (
    <div className="min-h-screen bg-password-background flex items-center justify-center p-6">
      <div className="w-full max-w-sm flex flex-col items-center gap-8">
        <Header />
        
        <Display password={password} />
        
        <InputGroup
          length={length}
          setLength={setLength}
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
          includeSpecialChars={includeSpecialChars}
          setIncludeSpecialChars={setIncludeSpecialChars}
        />
        
        <GenerateBtn onClick={handleGenerate} />
      </div>
    </div>
  );
};

export default Index;
