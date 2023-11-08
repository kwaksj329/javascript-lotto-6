import { Random } from "@woowacourse/mission-utils";

class RandomNumberGenerator {
  generateRandomNumber(start, end, count) {
    return Random.pickUniqueNumbersInRange(start, end, count).sort(
      (a, b) => a - b
    );
  }
}

export default RandomNumberGenerator;