const tamagotchi = {
  name: "Petsy",
  meal: 5,
  energy: 5,
  mood: 5,

  getStatus: function () {
    let eating =
      this.meal < 3
        ? `Еда: Я голоден ${this.meal}`
        : `Еда: Я не голоден ${this.meal}`;
    let sleeping =
      this.energy < 3
        ? `Энергия: Я хочу спать ${this.energy}`
        : `Энергия: Я не хочу спать ${this.energy}`;
    let playing =
      this.mood < 3
        ? `Настроение: Мне скучно ${this.mood}`
        : `Настроение: Мне весело ${this.mood}`;

    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
      console.log(`${this.name} умер`);
    } else {
      console.log(`Имя: ${this.name}, ${eating}, ${sleeping}, ${playing}`);
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

    console.log(this.getStatus());
  },
  sleep: function () {
    if (this.energy > 0 && this.energy < 5) {
      this.energy++;
    }
    this.meal--;
    console.log(this.getStatus());
  },
  play: function () {
    if (this.mood > 0 && this.mood < 5) {
      this.mood++;
    }
    this.energy--;
    console.log(this.getStatus());
  },
};
