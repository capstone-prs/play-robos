import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
// import db from '../boot/firebase';
// import { mount } from '@vue/test-utils';
import { expect, it, vi, describe } from 'vitest';
import { DocumentReference, doc, setDoc } from 'firebase/firestore';
import { NewUser } from '../types/Users';
import getUser, { addUser } from './firestore';
import { signOut } from 'firebase/auth';
import { logout } from './auth';

installQuasarPlugin();

vi.mock('firebase/firestore', () => ({
  getDoc: vi.fn().mockResolvedValueOnce({
    exists: vi.fn(() => true),
    data: vi.fn(() => ({})),
  }),
  setDoc: vi.fn(),
  doc: vi.fn(),
  getFirestore: vi.fn(),
}));

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  signOut: vi.fn(),
}));

vi.mock('src/boot/firebase', () => ({
  db: vi.fn(),
}));

vi.mocked(setDoc).mockResolvedValueOnce();
vi.mocked(doc).mockResolvedValueOnce({} as DocumentReference);

describe('Firebase Functions', () => {
  it('should add a user', () => {
    const userData: NewUser = {
      name: 'Juan',
      birthdate: new Date('2018-09-07'),
      gender: 'Male',
      coins: 0,
      score: 0,
    };
    const id = 'user123';

    return addUser(userData, id).then(() =>
      expect(setDoc).toHaveBeenCalledWith(expect.anything(), {
        ...userData,
        user_id: id,
      })
    );
  });

  it('should get a user', async () => {
    const uid = 'user123';
    getUser(uid).then(() => {
      expect(doc).toHaveBeenCalledWith(expect.anything(), 'users', uid);
    });
  });

  it('should logout the user', async () => {
    // vi.mocked(getAuth).mockResolvedValueOnce({} as Auth)
    // vi.mocked(signOut).resolves()
    await logout();
    expect(signOut).toHaveBeenCalledOnce();
  });
});
