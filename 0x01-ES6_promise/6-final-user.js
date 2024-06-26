import signUpUser from './4-user-promise';

import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  try {
    const [userResult, photoResult] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(filename),
    ]);

    return [
      { status: 'fulfilled', value: userResult.value },
      { status: 'fulfilled', value: photoResult.value },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error },
      { status: 'rejected', value: error },
    ];
  }
}
