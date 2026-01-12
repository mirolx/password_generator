export interface PasswordOptions {
  length: number;
  includeNumbers: boolean;
  includeSpecialChars: boolean;
}

export const generatePassword = (options: PasswordOptions): string => {
  const { length, includeNumbers, includeSpecialChars } = options;
  
  let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  if (includeNumbers) {
    characters += '0123456789';
  }
  
  if (includeSpecialChars) {
    characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  }
  
  let password = '';
  const minLength = Math.max(1, length);
  
  for (let i = 0; i < minLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  
  return password;
};
