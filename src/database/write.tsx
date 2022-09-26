import DB from './database';
import { QUERY_CREATE_STORAGE_TABLE, QUERY_WRITE_STORAGE_ROW } from './query';
import SQLite from 'react-native-sqlite-storage';

export const CreateAllTables = async () => {

  try {
    await DB.executeQuery(QUERY_CREATE_STORAGE_TABLE, []);
  } catch (e) {
    console.error('create table error ', e);
  }
};

export const WriteOnStorage = async (payload: any) => {
  try {
    await DB.executeQuery(QUERY_WRITE_STORAGE_ROW, payload);
    console.log('DB WriteOnStorage Success');
  } catch (e) {
    console.log('DB WriteOnStorage Error', e);
    return [];
  }
};
