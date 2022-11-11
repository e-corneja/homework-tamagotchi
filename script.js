// Приложение Тамагочи
const tamagotchi = {
  name: "CUCU",
  meal: 5,
  energy: 5,
  mood: 5,

  getStatus: function () {
    const { name, meal, energy, mood } = tamagotchi;

    this.meal < 3
      ? (this.meal = `Еда: Я голоден (${this.meal})`)
      : (this.meal = `Еда: Я не голоден (${this.meal})`);
    this.energy < 3
      ? (this.energy = `Энергия: Я хочу спать (${this.energy})`)
      : (this.energy = `Энергия: Я не хочу спать (${this.energy})`);
    this.mood < 3
      ? (this.mood = `Настроение: Мне скучно (${this.mood})`)
      : (this.mood = `Настроение: Мне не скучно (${this.mood})`);

    ////////Условие else (строчка 22) которое не срабатывает//////////
    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
      console.log(`${name} умер`);
    } else {
      console.log(
        `Имя: ${this.name}, ${this.meal}, ${this.energy}, ${this.mood}`
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

tamagotchi.sleep();
tamagotchi.sleep();
tamagotchi.sleep();
tamagotchi.sleep();
tamagotchi.sleep();
console.log(tamagotchi);
console.log(tamagotchi.getStatus());
// console.log(tamagotchi);
