export const getStringData = (targetData) => {
  /// yyy-mm-dd
  let year = targetData.getFullYear();
  let month = targetData.getMonth() + 1;
  let data = targetData.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (data < 10) {
    data = `0${data}`;
  }
  return `${year}-${month}-${data}`;
};
