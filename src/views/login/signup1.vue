<template>
  <el-row class="login" type="flex" align="middle" justify="center">
    <el-col :span="8">
      <el-row class="panel">
        <el-col style="font-size: 30px ">
          <b>Sign up</b>
        </el-col>
        <el-col style="font-size: 12px" >Sign in now to start customizing</el-col>
        <el-col>
          <el-form>
            <el-form-item>
              <el-input
                size="mini"
                placeholder="EMail"
                v-model="form.uid"
                style="width: 70%"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item style="width: 100%; margin-top: 12px">
              <el-input
                size="mini"
                placeholder="Şifre"
                v-model="form.password"
                style="width: 70%"
                show-password
                clearable
              ></el-input>
            </el-form-item>
             <div class="field">
              <input type="checkbox" id="checkbox" @click="remember_me">
              <router-link to="/terms">I Accept Terms & Conditions</router-link>
            </div>
          </el-form>
        </el-col>
        <el-col>
          <el-button type="primary" plain size="mini" style="width: 70%">Sign up</el-button>
        </el-col>
        <el-col v-if="error.Visible" style="margin-top:  12px; color:#F30">{{error.message}}</el-col>
          <el-col :span="14" style="text-align: right">Already have an account?</el-col>
          <el-col :span="8" style="text-align: left; margin-left:4px">
            <router-link to="/signin">Sign in </router-link>
          </el-col>
        
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        uid: "",
        password: "",
      },
      error: {
        isVisible: false,
        message: "",
      },
    };
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
  background-color: #2b2b2c;
  border: #ccc 1px solid;
  padding: 12px 36px;
  height: 100%;
  margin-bottom: 8px;
  
}
.panel .reset {
  font-size: 10px;
}
.panel .reset a {
  text-decoration: none;
  color: #a2a2a2;
}
.el-form-item{
     margin-bottom: 15px;

}
</style>