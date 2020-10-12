import { User } from './User';

export  const getUser = (): Promise<User> => {
  return Promise.resolve({ id: '1', name: "David" });
}