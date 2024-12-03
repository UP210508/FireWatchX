export interface Profile {
  id: string | number;
  name: string;
  email: string;
  profession: string;
  phoneNumber: string; 
  plan: "basic" | "pro" | "enterprise" | "free"
}