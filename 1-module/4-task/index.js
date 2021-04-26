function checkSpam(str) {
  let strNormal = str.replace(/\s+/g, '').toUpperCase();
  let strCheckSpamFirst = strNormal.includes('XXX'.toUpperCase());
  let strCheckSpamSecond = strNormal.includes('1xBet'.toUpperCase());

  return strCheckSpamFirst || strCheckSpamSecond;

}
