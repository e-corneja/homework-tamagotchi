const todoList = {
  items: [
    {
      text: "Сделать ДЗ",
      completed: false,
    },
    {
      text: "Узнать больше про модули",
      completed: false,
    },
    {
      text: "Помочь одногруппнику понять тему",
      completed: false,
    },
    {
      text: "Сходить за продуктами",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i].text);
    }
  },

  add: function (text) {
    newObj = { text: text, completed: false };
    this.items.unshift(newObj);
  },

  remove: function (index) {
    this.items.splice(index, 1);
  },

  print: function (index) {},

  complete: function (index) {},
};
