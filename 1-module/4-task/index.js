function checkSpam(str) {
  if(str.replace(/\s+/g, '').toUpperCase().includes('XXX'.toUpperCase()) || str.replace(/\s+/g, '').toUpperCase().includes('1xBet'.toUpperCase())){
    return true;
  }else{
    return false;

  }
}
