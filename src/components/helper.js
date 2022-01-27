const arrInfo = (fil, dataArr) => {
  switch (fil[0].comparison) {
  case 'maior que':
    return dataArr.filter((plan) => plan[fil[0].column] > Number(fil[0].value));
  case 'menor que':
    return dataArr.filter((plan) => plan[fil[0].column] < Number(fil[0].value));
  case 'igual a':
    return dataArr.filter((plan) => plan[fil[0].column] === fil[0].value);
  default: return dataArr;
  }
};

export default arrInfo;
