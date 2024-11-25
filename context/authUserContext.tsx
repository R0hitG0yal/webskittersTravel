import { createContext, useContext, ReactNode } from 'react';
import useFirebaseAuth from '../lib/useFirebaseAuth';
// import  auth from '../lib/useFirebaseAuth';
import { auth } from '../lib/firebase';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, UserCredential } from 'firebase/auth';

// Define the context type, including the required auth functions
interface AuthUserContextType {
  authUser: User | null; // Firebase user object or null if not authenticated
  loading: boolean;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
}

// Create context with default values (we expect it to be populated later)
const authUserContext = createContext<AuthUserContextType>({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async (email: string, password: string): Promise<UserCredential> => {
    return await _signInWithEmailAndPassword(auth, email, password); // This returns UserCredential
  },
  createUserWithEmailAndPassword: async (email: string, password: string): Promise<UserCredential> => {
    return await _createUserWithEmailAndPassword(auth, email, password); // This returns UserCredential
  },
  signOut: async () => {
    await _signOut(auth);
  }
});

interface AuthUserProviderProps {
  children: ReactNode;
}

// Context Provider component
export function AuthUserProvider({ children }: AuthUserProviderProps) {
  const auth = useFirebaseAuth(); // Use custom hook to get auth user and functions
  return (
    <authUserContext.Provider value={auth}>
      {children}
    </authUserContext.Provider>
  );
}

// Custom hook to access the authUserContext and authentication functions
export const useAuth = () => {
  const context = useContext(authUserContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthUserProvider');
  }
  return context;
};
// Function to sign in a user with email and password
export async function _signInWithEmailAndPassword(auth: Auth, email: string, password: string): Promise<UserCredential> {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// Function to create a user with email and password
export async function _createUserWithEmailAndPassword(auth: Auth, email: string, password: string): Promise<UserCredential> {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// Function to sign out the user
export async function _signOut(auth: Auth): Promise<void> {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
}
