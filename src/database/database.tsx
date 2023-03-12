import { values } from 'ramda';
import SQLite from 'react-native-sqlite-storage';

function DataBase() { }

DataBase.prototype.openDataBaseConnection = async function () {
  try {
    SQLite.DEBUG(false);
    SQLite.enablePromise(true);

    this.db = await SQLite.openDatabase({
      name: 'sanspaperform',
      location: 'default',
    });
    console.log('DB openDataBaseConnection Success');
  } catch (error) {
    console.log('DB openDataBaseConnection Error', error);
  }
};

DataBase.prototype.executeQuery = async function (sql: any, params: any) {
  return new Promise((resolve, reject) => {
    if (this.db) {
      const payload = params ? values(params) : [];
      this.db.transaction(
        (tx: {
          executeSql: (
            arg0: any,
            arg1: any[],
            arg2: (trans: any, results: any) => void,
            arg3: (error: any) => void,
          ) => void;
        }) => {
          tx.executeSql(
            sql,
            payload,
            (trans: any, results: unknown) => {
              resolve(results);
            },
            (error: any) => {
              reject(error);
            },
          );
        },
      );
    } else {
      console.log('[ExecuteQuery] DB not connected, please try again');
      reject('db not connected');
    }
  });
};

const DB = new (DataBase as any)();

export default DB;
