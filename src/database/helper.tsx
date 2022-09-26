export function parseDBResult(result: { rows: { length: number; item: (arg0: number) => any; }; } ) {
  if (result?.rows?.length === 0) {
    return null;
  }

  const items = [];

  for (let idx = 0; idx < result.rows.length; idx++) {
    const item = result.rows.item(idx);
    items.push(item);
  }


  return items;
}
