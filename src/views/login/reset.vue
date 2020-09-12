<template>
  <el-row class="login" type="flex" align="middle" justify="center">
    <el-col :span="8">
      <el-row class="panel">
        <el-col class="logo">
          <i class="el-icon-unlock" style="font-size: 60px"></i>
        </el-col>
        <el-col style="font-size: 16px">
          <b>Giriş Yaparken Sorun mu Yaşıyorsun?</b>
        </el-col>
        <el-col style="font-size: 12px">E-posta adresini gir ve sana hesabına yeniden girebilmen için bir bağlantı gönderelim.</el-col>
        <el-col>
          <el-form>
            <el-form-item>
              <el-input size="mini"  placeholder="E-Posta Adresi" v-model="form.uid" style="width: 100%" clearable></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col>
        <el-button type="primary" plain size="mini" style="width: 100%">Şifreyi Sıfırla</el-button>
        </el-col>
        <el-col v-if="error.Visible" style="margin-top:  12px; color:#F30">
        {{error.message}}
        </el-col>
        <el-col>
        <el-divider>Yada
        </el-divider>
        </el-col>
        <el-col>
        <router-link to="/signup">Yeni Hesap Oluştur</router-link>
        </el-col>
        <el-col>
        <el-button  icon="el-icon-arrow-left" plain size="mini" style="width: 100%; margin-top: 12px" @click="goback">Geri Dön</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
data()
{
    return{
        form:{
            uid:""
        },
        error:{
            isVisible:false,
            message:""
        }
    }
},
methods:{
    goback()
    {
        this.$router.push({path:"/login"})
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
.el-form-item
{
margin-bottom: 0px;
}
.el-divider__text {
  font-size: 10px;
  color: #a2a2a2;
}
.a{
  text-decoration: none;
  color: #a2a2a2;
}
</style>