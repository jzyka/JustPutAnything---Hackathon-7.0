<template>
  <v-app>
    <div class="main">
      <v-img
        src="@/assets/logo-full.png"
        class="logo"
        height="50px"
        max-height="50px"
        max-width="130px"
        width="130px"
        contain
      ></v-img>
      <div class="contain">
        <h2>Login</h2>
        <p class="prompt">Please input your credentials to log in</p>
        <div class="input-contain">
          <p>Email</p>
          <v-text-field
            class="input-template"
            v-model="email"
            placeholder="Email"
            density="compact"
            variant="outlined"
            base-color="#818A91"
            bg-color="#fff"
            color="#363636"
            :rules="[rules.required, rules.email]"
          ></v-text-field>
        </div>
        <div class="input-contain">
          <p>Password</p>
          <v-text-field
            class="input-template"
            placeholder="Password"
            density="compact"
            variant="outlined"
            base-color="#818A91"
            bg-color="#fff"
            color="#363636"
            :append-inner-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show4 ? 'text' : 'password'"
            v-model="password"
            @click:append-inner="show4 = !show4"
            :rules="[rules.required, rules.min]"
          ></v-text-field>
        </div>

        <div class="login-btn" @click="handleLogin"><p>Login</p></div>

        <div v-if="errorField" class="error-message">
          <p>{{ errorField.message }}</p>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    show4: false,
    loginClicked: false,
    errorField: null,
    // JSON object to store user data with roles
    users: [
      { email: "admin@gmail.com", password: "admin123", role: "admin" },
      {
        email: "customer@gmail.com",
        password: "customer123",
        role: "customer",
      },
    ],
    rules: {
      required: (value) => !!value || "Field is required",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
  methods: {
    handleLogin() {
      this.loginClicked = true; // Set loginClicked to true when the button is clicked

      if (!this.email || !this.password) {
        // Display an error message for empty fields
        this.errorField = { message: "Please enter both email and password" };
        return;
      }

      // Find the user based on email and password
      const user = this.users.find(
        (u) => u.email === this.email && u.password === this.password
      );

      if (user) {
        // Simulate a successful login
        setTimeout(() => {
          // Redirect based on the user's role
          if (user.role === "admin") {
            this.$router.push({ name: "home" });
          } else if (user.role === "customer") {
            this.$router.push({ name: "report" });
          }
        }, 1000); // Redirect after 1 second
      } else {
        // Display an error message for invalid email or password
        this.errorField = {
          message: "Invalid email or password. Please try again.",
        };
      }
    },
    isEmpty(value) {
      return value.trim() === ""; // Helper function to check if a value is empty
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  background-image: url(@/assets/bg-login.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    margin-left: auto;
    margin-top: 2rem;
    margin-right: 2rem;
  }

  .contain {
    width: 30%;
    margin-top: 6rem;
    // height: 100%;
    display: flex;
    flex-direction: column;

    h2 {
      color: white;
      text-align: center;
    }

    .prompt {
      color: #d9d9d9;
      text-align: center;
      margin-bottom: 20px;
    }

    .input-contain {
      p {
        color: white;
        margin-bottom: 10px;
      }
    }

    .login-btn {
      padding: 8px;
      display: flex;
      justify-content: center;
      background-color: white;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 1rem;
      p {
        text-align: center;
        font-weight: $font-weight-semibold;
      }
    }
  }
}
</style>
