import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
// import db from '../boot/firebase';
// import { mount } from '@vue/test-utils';
import { expect, it, vi, describe } from 'vitest';
import { DocumentReference, doc, setDoc } from 'firebase/firestore';
import { NewUser } from '../types/users';
import getUser, { addUser } from './firestore';

installQuasarPlugin();

vi.mock('firebase/firestore', () => ({
  getDoc: vi.fn().mockResolvedValueOnce({
    exists: vi.fn(() => true),
    data: vi.fn(() => ({})),
  }),
  setDoc: vi.fn(),
  doc: vi.fn(),
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
      age: 3,
      gender: 'Male',
    };
    const uid = 'user123';

    return addUser(userData, uid).then(() =>
      expect(setDoc).toHaveBeenCalledWith(expect.anything(), {
        ...userData,
        UID: uid,
      })
    );
  });

  it('should get a user', async () => {
    const uid = 'user123';
    getUser(uid).then(() => {
      expect(doc).toHaveBeenCalledWith(expect.anything(), 'users', uid);
    });
  });
});
