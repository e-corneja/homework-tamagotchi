// Приложение Тамагочи
const tamagotchi = {
  name: "Petsy",
  meal: 5,
  energy: 5,
  mood: 5,

  getStatus: function () {
    const { name, meal, energy, mood } = tamagotchi;

    if (meal <= 0 || energy <= 0 || mood <= 0) {
      console.log(`${name} умер`);
    } else if (meal < 3 && energy < 3 && mood < 3) {
      console.log(
        `Имя: ${name}, Еда: Я голоден (${meal}), Энергия: Я хочу спать (${energy}), Настроение: Мне скучно (${mood})`
      );
    } else if (meal > 3 && energy > 3 && mood > 3) {
      console.log(
        `Имя: ${name}, Еда: Я не голоден (${meal}), Энергия: Я не хочу спать (${energy}), Настроение: Мне весело (${mood})`
      );
    } else if (meal > 3 && energy < 3 && mood < 3) {
      console.log(
        `Имя: ${name}, Еда: Я не голоден (${meal}), Энергия: Я хочу спать (${energy}), Настроение: Мне скучно (${mood})`
      );
    } else if (meal < 3 && energy > 3 && mood > 3) {
      console.log(
        `Имя: ${name}, Еда: Я голоден (${meal}), Энергия: Я не хочу спать (${energy}), Настроение: Мне весело (${mood})`
      );
    } else if (meal < 3 && energy > 3 && mood < 3) {
      console.log(
        `Имя: ${name}, Еда: Я голоден (${meal}), Энергия: Я не хочу спать (${energy}), Настроение: Мне скучно (${mood})`
      );
    } else if (meal > 3 && energy < 3 && mood > 3) {
      console.log(
        `Имя: ${name}, Еда: Я не голоден (${meal}), Энергия: Я хочу спать (${energy}), Настроение: Мне весело (${mood})`
      );
    } else if (meal > 3 && energy > 3 && mood < 3) {
      console.log(
        `Имя: ${name}, Еда: Я не голоден (${meal}), Энергия: Я не хочу спать (${energy}), Настроение: Мне скучно (${mood})`
      );
    } else if (meal < 3 && energy < 3 && mood > 3) {
      console.log(
        `Имя: ${name}, Еда: Я голоден (${meal}), Энергия: Я хочу спать (${energy}), Настроение: Мне весело (${mood})`
      );
    }
  },

  setName: function (newName) {
    this.name = newName;
  },

  eat: function () {
    if (this.meal > 0 && this.meal < 5) {
      this.meal++;
    }
    this.mood--;
  },
  sleep: function () {
    if (this.energy > 0 && this.energy < 5) {
      this.energy++;
    }
    this.meal--;
  },
  play: function () {
    if (this.mood > 0 && this.mood < 5) {
      this.mood++;
    }
    this.energy--;
  },
};
