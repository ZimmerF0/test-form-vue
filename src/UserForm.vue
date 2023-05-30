<template>
  <header>
    <div class="logo">
      <img src="./assets/logo.svg" alt="Логотип" />
    </div>
    <nav>
      <ul class="navigation">
        <li><a href="/">Форма</a></li>
        <li><a href="/preview">Превью</a></li>
      </ul>
    </nav>
  </header>

  <div class="container">
    <div class="main">
      <div>
        <h3 class="user-title">Персональные данные</h3>
        <div>
          <input
            class="personal"
            type="text"
            placeholder="Имя"
            id="name"
            v-model="user.name"
          />
        </div>
        <div>
          <input
            class="personal"
            type="number"
            placeholder="Возраст"
            id="age"
            v-model="user.age"
          />
        </div>

        <div class="add">
          <h3 class="user-title">Дети (макс. 5)</h3>
          <button
            class="add-btn"
            @click="addChild"
            :disabled="children.length === 5"
          >
            Добавить ребенка
          </button>
        </div>
        <div class="child" v-for="(child, index) in children" :key="index">
          <input
            class="child-text"
            type="text"
            placeholder="Имя"
            id="childName"
            v-model="child.name"
          />
          <input
            class="child-text"
            type="number"
            placeholder="Возраст"
            id="childAge"
            v-model="child.age"
          />
          <button class="btn-del" @click="removeChild(index)">Удалить</button>
        </div>
        <button class="btn-save" @click="saveData">Сохранить</button>
      </div>
    </div>
  </div>
  <footer>
    <div class="footer">
      <p class="footer-text">all rights reserved</p>
    </div>
  </footer>
</template>

<script>
import Preview from "./Preview.vue";

export default {
  name: "App",
  components: {
    Preview,
  },
  data() {
    return {
      user: {
        name: "",
        age: null,
      },
      children: [],
    };
  },
  methods: {
    addChild() {
      this.children.push({ name: "", age: null });
    },
    removeChild(index) {
      this.children.splice(index, 1);
    },
    saveData() {
      // Здесь вы можете реализовать логику сохранения данных, например, сохранить в локальное хранилище
      const userData = {
        user: this.user,
        children: this.children,
      };
      // Передача данных через маршрут
      this.$router.push({
        path: "/preview",
        query: { userData: JSON.stringify(userData) },
      });
    },
  },
};
</script>

<style>

.container {
  width: 616px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

header {
  justify-content: center;
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}

.logo {
  transform: translateY(16px);
}

.navigation {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: -16px;
  padding-bottom: 24px;
}

.navigation li {
  margin: 0 10px;
  text-align: center;
}

.navigation li a {
  text-decoration: none;
  color: rgba(17, 17, 17, 0.48);
}

.add {
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
  margin-bottom: 21px;
}
.child {
  margin-bottom: 10px;
}
.personal {
  width: 100%;
  height: 56px;
  margin-bottom: 10px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
}
.add-btn {
  position: relative;
  color: #01a7fd;
  background: transparent;
  border: 2px solid #01a7fd;
  border-radius: 100px;
  padding: 10px 20px 10px 48px;
}

.add-btn::before {
  content: "";
  position: absolute;
  background-image: url(./assets/plus.svg);
  width: 24px;
  height: 24px;
  left: 20px;
  top: 15px;
}
.child {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.child-text {
  width: 260px;
  height: 56px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
}
.btn-del {
  background: transparent;
  border: none;
  color: #01a7fd;
}
.btn-save {
  padding: 10px 20px;
  color: #ffffff;
  border: none;
  background: #01a7fd;
  border-radius: 100px;
  margin-top: 20px;
  margin-bottom: 126px;
}
.footer {
  /* margin-top: auto; */
  background: #fafafa;
}
.footer-text {
  padding: 30px;
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
}
</style>
