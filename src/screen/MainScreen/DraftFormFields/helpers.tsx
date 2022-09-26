import R from 'ramda';

export const formatFieldProperties = (data: any) => {
  const returnData = {};
  R.forEach(x => {
    returnData[x.id] = x;
  }, data);
  return returnData;
};

export const formatFieldActions = (data: any) => {
  const returnData = {};
  R.forEach(x => {
    returnData[x.id] = x;
  }, data);
  return returnData;
};

export const getDataByItemId = (data, id) => {
  const isEven = n => n.id === id;

  const returnData = R.filter(isEven, data); //=> [2, 4]

  return id;
};

export const getIndexOfPropertyById = (data, id) => {
  return R.findIndex(R.propEq('property_id', id))(data);
};

export const getIndexOfFieldById = (data, id) => {
  return R.findIndex(R.propEq('id', id))(data);
};

export const formatSelectOptions = data => {
  console.log('BEFORE');
  console.log(JSON.parse(data));
  let returnData: { name: any; value: any; id: any; uuid: any; index: any; }[] = []
  JSON.parse(data)?.map((item: any, key: number) => {
    const { description, id, uuid } = item
    console.log(item.description)
    returnData.push({ name: description, value: id, id, uuid, index: key })

  })

  return returnData
};
