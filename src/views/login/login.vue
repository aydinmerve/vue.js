<template>
  <el-row class="login" type="flex" align="middle" justify="center">
    <el-col :span="12">
      <el-col :span="12">
        <el-image style="height: 100%" src="./mobile.png" fit="contain"></el-image>
      </el-col>
      <el-col :span="12">
        <el-row class="panel">
          <el-col class="logo">
            <el-image style="height: 40px" src="./logo.png" fit="contain"></el-image>
          </el-col>
          <el-row class="form">
            <el-col>
              <el-input size="mini" placeholder="E-posta Adresi " v-model="form.uid" clearable></el-input>
            </el-col>
            <el-col>
              <el-input size="mini" placeholder="Şifre" v-model="form.password" show-password></el-input>
            </el-col>
            <el-col>
              <el-button
                @click="Login"
                size="mini"
                style="width=100%"
                type="primary"
                plain
              >Giriş Yap</el-button>
            </el-col>
          </el-row>
          <el-col>
            <el-divider content-position="center">Yada</el-divider>
          </el-col>
          <el-col v-if="error.isError" style="color:#F30">{{this.error.Message}}</el-col>
          <el-col class="reset">
            <router-link to="/reset">Şifremi Unuttum ?</router-link>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" class="panel account" style="margin-top: 12px">
          <el-col :span="10" style="text-align: right">Hesabınız yok mu?</el-col>
          <el-col :span="9" style="text-align: left; margin-left:4px">
            <router-link to="/signup">Kaydol</router-link>
          </el-col>
        </el-row>
        <el-row style="margin-top: 12px">
          <el-col>Uygulamayı İndir</el-col>
          <el-col style="margin-top: 12px">
            <el-col :span="12" style="text-align: right"><el-image style="width: 100px; height: 30px" src="./apple.png"></el-image></el-col>
            <el-col :span="12" style="text-align: left"><el-image  style="width: 100px; height: 30px" src="./android.png"></el-image></el-col>
          </el-col>
        </el-row>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        uid: "",
        pasword: "",
      },
      error: {
        isError: false,
        Message: "",
      },
    };
  },
  methods: {
    login() {
      console.log("Clickcevabı");
    },
  },
};
</script>

<style>
.login {
  position: absolute;
  width: 100%;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
}
.panel {
  background-color: #fff;
  border: #ccc 1px solid;
  padding: 12px 36px;
  height: 100%;
}

.panel .form .el-col {
  margin-bottom: 8px;
}

.panel .logo {
  margin-bottom: 16px;
}
.el-divider__text {
  font-size: 10px;
  color: #a2a2a2;
}
.panel .reset {
  font-size: 10px;
}
.panel .reset a {
  text-decoration: none;
  color: #a2a2a2;
}
.account {
  font-size: 12px;
}
.account a {
  text-decoration: none;
  color: #a2a2a2;
}
</style>