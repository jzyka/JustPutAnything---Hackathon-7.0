<template>
  <v-app>
    <div class="main">
      <header>
        <a href="/home">
          <v-img
            src="@/assets/logo-full.png"
            width="100px"
            height="40px"
            contain
          ></v-img>
        </a>
        <nav>
          <a href="#">Features</a>
          <a href="#">Contact Us</a>
          <a href="/login">Login</a>
        </nav>
      </header>
      <section class="jumbotron">
        <h2>Connecting the unconnected</h2>
        <p class="desc">
          Welcome to TeleAid, revolutionizing customer service with AI. Our
          platform automates tasks, manages data, and enhances service delivery,
          combining innovation with deep CX insights. Choose TeleAid for
          efficiency, accuracy, and exceptional customer support.
        </p>
      </section>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
}

header {
  position: absolute;
  top: 0;
  padding: 20px 100px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 4rem;
    a {
      color: white;
      font-size: 18px;
      text-decoration: none;
    }
  }
}
.jumbotron {
  padding: 80px 100px;
  display: flex;
  flex-direction: column;
  background-image: url(@/assets/jumbotron.png);
  height: 100%;
  align-items: end;
  justify-content: center;

  h2,
  p {
    width: 45%;
    color: white;
    text-align: end;
  }
}
</style>
