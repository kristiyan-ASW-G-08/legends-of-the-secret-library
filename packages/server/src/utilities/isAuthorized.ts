
const isAuthorized = (authorizedUserId: string, userId: string): void => {
  if (authorizedUserId !== userId) {
    const { status, message } = errors.Unauthorized;
   
  }
};
export default isAuthorized;
