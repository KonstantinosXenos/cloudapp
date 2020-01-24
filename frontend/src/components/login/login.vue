<template>
  <div id="login" class="flex-column flex-center">
    <div class="login-container flex-column flex-center">
       
     
      <div  class="flex-column flex-center">
        <div class="margin title">A Z T E C</div>
        <div
          style="padding:10px; border:solid 2px white; border-radius:10px;box-shadow: 10px 10px 20px black;position: relative;"
        >
          <font-awesome-icon class="margin" :icon="['fas','user-circle']" size="5x" /><looping-rhombuses-spinner
     class="spinner"
     v-if="loading"
          :animation-duration="1000"
          :size="100"
          :color="'rgb(45, 160, 255)'"
     />
        </div>
         
        <form @submit="checkForm" class="flex-column flex-center margin">
          <input
            id="username"
            class="inputs"
            placeholder="Username"
            v-model="username"
            autocomplete="username"
            required
            v-focus
          />
          <input
            id="password"
            class="inputs"
            type="password"
            v-model="password"
            placeholder="Password"
            autocomplete="current-password"
            required
          />
          <button class="sign-in-button" >Sign in</button>
        </form>
         <p v-if="errors.length">
    <b>Please correct the following error:</b>
    <ul>
      <li v-for="error in errors" :key='error' style="color: red;">{{ error }}</li>
    </ul>
  </p>
      </div>
    </div>
  </div>
</template>


<script>
import {LoopingRhombusesSpinner } from 'epic-spinners'
export default {
  name: "login",
  components: {
      LoopingRhombusesSpinner 
    },
  mounted() {
    this.requestcsrftoken();
  },
  methods: {
    checkForm: function(e) {
      if (this.username && this.password) {
        e.preventDefault();
        this.login();
      }



      e.preventDefault();
    },
    requestcsrftoken() {
      window.api
        .get("/authentication/getcsrftoken/")
        .then(response => this.savetoken(response))
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    },
    savetoken(response) {
      this.$cookie.set(
        response.data.name,
        response.data.token,
        response.data.duration / 86400
      );
    },
    login() {
        this.loading=true
      window.api
        .post("/authentication/login/", {
          username: this.username,
          password: this.password
        })
        .then(response => this.post_login(response))
        .catch(error => {
            this.loading=false
            
          if (error.response && error.response.status==400) {
            this.errors= ['Invalid credentials']
          } else {this.errors= ['There was a problem communicating with the server. Please contact your administrators.']}
        });
    },
    post_login(response) {
      this.$cookie.set(response.data.name, response.data.token);
      this.$router.push({
          name: "Desktop",
          
        });
    }
  },
  data: function() {
    return {
      username: "",
      password: "",
      errors: [],
      loading: false
    };
  }
};
</script>

<style scoped>
#login {
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    204deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(22, 24, 64, 1) 23%,
    rgba(1, 151, 181, 1) 100%
  );
}
.login-container {
    
  align-self: center;
  border: none;
  color: rgba(255, 255, 255, 0.795);
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  background: rgba(0, 0, 0, 0.419);
  box-shadow: 20px 20px 20px black;
}
.inputs {
  border-radius: 3px;
  padding-left: 20px;
  margin: 5px;
  width: 300px;
  height: 30px;
  background: black;
  color: white;
  border: solid rgb(15, 91, 163) 1px;
  font-weight: bold;
}
.margin {
  margin: 10px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    rgb(45, 160, 255) 0px 0px 20px, rgb(45, 160, 255) 0px 0px 30px,
    rgb(45, 160, 255) 0px 0px 40px, rgb(45, 160, 255) 0px 0px 50px,
    #ff2d95 0px 0px 75px;
}
.sign-in-button {
  margin: 10px;
  padding: 6px;
  width: 100px;
  background: black;
  color: white;
  border: solid rgb(15, 91, 163) 1px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
}
.spinner {
    top: -10px;
    right: -130px;
    position: absolute;
}
</style>