function truncate(str, maxlength) {
  if(str.length > maxlength){
    let strSlice = str.slice(0, maxlength - 1) + '…';
    return strSlice;
  }else{
    return str;
  }
}
