<template>
  <el-row class="login" type="flex" align="middle" justify="center">
    <el-col :span="8">
      <el-row class="panel">
        <el-col class="logo">
          <i class="el-icon-user" style="font-size: 60px"></i>
        </el-col>
        <el-col style="font-size: 16px">
          <b>Sende Aramıza Katıl</b>
        </el-col>
        <el-col style="font-size: 12px">Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.</el-col>
        <el-col>
          <el-form>
            <el-form-item>
              <el-input
                size="mini"
                placeholder="E-Posta Adresi"
                v-model="form.uid"
                style="width: 100%"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                size="mini"
                placeholder="Adı Soyadı"
                v-model="form.name"
                style="width: 100%"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                size="mini"
                placeholder="Kullanıcı Adı"
                v-model="form.username"
                style="width: 100%"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                size="mini"
                placeholder="Şifre"
                v-model="form.password"
                style="width: 100%"
                show-password
                clearable
              ></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col>
          <el-button type="primary" plain size="mini" style="width: 100%">Kaydol</el-button>
        </el-col>
        <el-col v-if="error.Visible" style="margin-top:  12px; color:#F30">{{error.message}}</el-col>
        <el-col>
          <el-divider>Bilgilendirme</el-divider>
        </el-col>
        <el-col>Kaydolarak, Koşullar'ı,Veri İlkesi'ni ve Çerezler İlkesi'ni kabul etmiş olursun.</el-col>
        <el-col>
          <el-button
            icon="el-icon-arrow-left"
            plain
            size="mini"
            style="width: 100%; margin-top: 12px"
            @click="goback"
          >Geri Dön</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { Auth } from "@/service/firebase";
export default {
  data() {
    return {
      form: {
        uid: "",
        name: "",
        username: "",
        password: "",
      },
      error: {
        isVisible: false,
        message: "",
      },
      manager: null,
    };
  },
  created() {
    this.manager = new Auth();
  },
  methods: {
    goback(){
      this.$router.push({ path: "/login" });
    },
    signUp(){
      this.manager
        .signUp(this.form.uid, this.form.password)
        .then(res =>{
          console.log(res);
        }).catch(err =>{
          console.log(err);
        });
    }
  }
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
.el-form-item {
  margin-bottom: 0px;
}
.el-divider__text {
  font-size: 10px;
  color: #a2a2a2;
}
</style>