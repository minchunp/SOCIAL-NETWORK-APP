export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  bio: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  gender: string;
  address: string;
  isVerified: boolean;
  isOnline: boolean;
  followers: string[];
  following: string[];
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
}
