import DB from './database';
// import {parseDBResult} from './helper';
import {QUERY_DELETE_STORAGE_ROW} from './query';

export const DeleteOnStorage = async (id: {id: string}) => {
  console.log('DB DeleteOnStorage Running on id: ', id);
  try {
    const result = await DB.executeQuery(QUERY_DELETE_STORAGE_ROW, id);
    console.log('DB DeleteOnStorage Success on id: ', id);
    console.log(result);
    return true;
  } catch (e) {
    console.log('DB DeleteOnStorage Error', e);
    return false;
  }
};
