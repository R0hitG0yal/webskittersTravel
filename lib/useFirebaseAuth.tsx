import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword as firebaseSignIn, createUserWithEmailAndPassword as firebaseCreateUser, signOut as firebaseSignOut, UserCredential, User } from 'firebase/auth';
import { auth } from './firebase';

// Custom hook to manage Firebase Authentication
const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState<User | null>(null); // Firebase user object
  const [loading, setLoading] = useState(true); // Loading state during auth operations

  // Sign in with email and password
  const signInWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
    setLoading(true);
    try {
      const userCredential = await firebaseSignIn(auth, email, password);
      setAuthUser(userCredential.user); // Set the authenticated user
      return userCredential;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Create user with email and password
  const createUserWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
    setLoading(true);
    try {
      const userCredential = await firebaseCreateUser(auth, email, password);
      setAuthUser(userCredential.user); // Set the authenticated user
      return userCredential;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out the user
  const signOut = async (): Promise<void> => {
    setLoading(true);
    try {
      await firebaseSignOut(auth);
      setAuthUser(null); // Clear the user on sign-out
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update user state based on auth status change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Return user data and authentication functions
  return { authUser, loading, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };
};

export default useFirebaseAuth;
