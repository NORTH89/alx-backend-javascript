import signUpUser from './4-user-promise';

import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  try {
    const [userResult, photoResult] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(filename),
    ]);

    return [
      { status: userResult.status, value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason },
      { status: photoResult.status, value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error },
      { status: 'rejected', value: error },
    ];
  }
}
