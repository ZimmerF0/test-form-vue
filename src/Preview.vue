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
        <div class="user-data">
          <div>{{ user.name }},</div>
          <div>{{ user.age }}</div>
        </div>

        <h3 class="user-title">Дети</h3>
        <div v-for="(child, index) in children" :key="index" class="child-data">
          <div>{{ child.name }},</div>
          <div>{{ child.age }} лет</div>
        </div>
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
export default {
  name: "Preview",
  data() {
    return {
      user: null,
      children: [],
    };
  },
  created() {
    const userData = JSON.parse(this.$route.query.userData);
    this.user = userData.user;
    this.children = userData.children;
  },
};
</script>
<style>
.user-title {
  font-weight: 500;
}
.user-data {
  display: flex;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  margin-bottom: 60px;
}
.child-data {
  display: flex;
  font-weight: 700;
  color: #111111;
  background: #f1f1f1;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 20px;
}
</style>
