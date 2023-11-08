class ResultProcessor {
  #userLottoNumbers;
  #bonusNumbers;
  #lottoNumbers;
  #lottoResult;

  constructor(userLottoNumbers, bonusNumbers, lottoNumbers) {
    this.#lottoResult = { 3: 0, 4: 0, 5: 0, bonus: 0, 6: 0 };
    this.#userLottoNumbers = userLottoNumbers;
    this.#bonusNumbers = bonusNumbers;
    this.#lottoNumbers = lottoNumbers;
    this.#generateResult(userLottoNumbers, bonusNumbers, lottoNumbers);
  }

  getResult() {
    return this.#lottoResult;
  }

  #generateResult(userLottoNumbers, bonusNumbers, lottoNumbers) {
    for (const lotto of lottoNumbers) {
      const hits = this.#compareLottoNumbers(lotto, userLottoNumbers);
      if (hits >= 3) {
        this.#lottoResult[hits]++;
      }
      if (hits === 5) {
        this.#lottoResult[bonus] += this.#compareLottoNumbers(lotto, [
          bonusNumbers,
        ]);
      }
    }
  }

  #compareLottoNumbers(lotto, user) {
    let returnValue = 0;
    for (const number of lotto) {
      if (user.includes(number)) {
        returnValue++;
      }
    }
    return returnValue;
  }
}

export default ResultProcessor;