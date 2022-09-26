import DB from './database';
import {parseDBResult} from './helper';
import {QUERY_READ_STORAGE_ROW} from './query';

export const ReadOnStorage = async (id: {id: string}) => {
  console.log('DB ReadOnStorage Running on id: ', id);
  try {
    const result = await DB.executeQuery(QUERY_READ_STORAGE_ROW, id);
    console.log('DB ReadOnStorage Success on id: ', id);
    console.log(result);
    return parseDBResult(result);
  } catch (e) {
    console.log('DB ReadStoredAuthtoken Error', e);
    return null;
  }
};
