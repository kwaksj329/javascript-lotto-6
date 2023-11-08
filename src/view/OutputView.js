import { Console } from "@woowacourse/mission-utils";

const hitMoney = [
  "5,000원",
  "50,000원",
  "1,500,000원",
  "30,000,000원",
  "2,000,000,000원",
];

class OutputView {
  async printPurchaseAmount(input) {
    await Console.print(`${input}개를 구매했습니다.`);
  }

  async printLottoResult(arr) {
    for (const value of arr) {
      await Console.print(value);
    }
  }

  async printWinningMessage() {
    await Console.print("당첨 통계\n---");
  }

  async printWinningResult(result) {
    for (const key of ["3", "4", "5", "bonus", "6"]) {
      if (key !== "bonus") {
        this.#printWithoutBonus(key, result[key]);
      } else {
        this.#printWithBonus(key, result[key]);
      }
    }
  }

  async printWinningProfit(result) {
    await Console.print(`총 수익률은 ${result}%입니다.`);
  }

  #printWithoutBonus(key, value) {
    Console.print(`${key}개 일치 (${hitMoney[key - 3]}) - ${value}개`);
  }

  #printWithBonus(key, value) {
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${value}개`);
  }
}

export default OutputView;
