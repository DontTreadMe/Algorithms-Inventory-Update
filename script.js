const updateInventory = (arr1, arr2) => {
    const updated = [...arr1];
    for (const x of arr2) {
        const indexUpd = updated.findIndex(item => item[1] === x[1]);
        indexUpd !== -1 ? updated[indexUpd][0] += x[0] : 
        updated.push(x);
    }
    updated.sort((a, b) => {
      let itemA = a[1].toLowerCase();
      let itemB = b[1].toLowerCase();
      return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
    });
    return updated;
}
