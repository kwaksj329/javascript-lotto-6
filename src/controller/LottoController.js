import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import Validator from "../utils/Validator";
import Lotto from "../model/Lotto";
import LottoDataProcessor from "../model/LottoDataProcessor";
import Bonus from "../model/Bonus";

class LottoController {
  #inputView;
  #outputView;
  #lottoDataProcessor;
  #lotto;
  #lottoResult;
  #bonus;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async gameStart() {
    await this.#purchaseLotto();
  }

  async #purchaseLotto() {
    const purchaseAmount = await this.#inputView.readPurchaseAmount();
    this.#lottoDataProcessor = new LottoDataProcessor(purchaseAmount);
    await this.#generateLotto();
  }

  async #generateLotto() {
    this.#lottoResult = this.#lottoDataProcessor.getLottoResults();
    this.#outputView.printPurchaseAmount(this.#lottoResult.length);
    this.#outputView.printLottoResult(this.#lottoResult);
    await this.#receiveLottoNumbers();
  }

  async #receiveLottoNumbers() {
    const lottoNumbers = await this.#inputView.readLottoNumbers();
    this.#lotto = new Lotto(
      lottoNumbers.split(",").map((number) => parseInt(number, 10))
    );
    const bonusNumber = await this.#inputView.readBonusNumber();
    this.#bonus = new Bonus(bonusNumber, this.#lotto.getLottoNumber());
    await this.#generateWinningResult();
  }

  async #generateWinningResult() {
    await this.#outputView.printWinningMessage();
  }
}

export default LottoController;
