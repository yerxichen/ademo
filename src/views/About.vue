<template>
  <div>
    <mu-container class="button-wrapper">
      <mu-button color="primary" @click="openCamera(true)">Primary</mu-button>
      <mu-button color="secondary" @click="showTost">Secondary</mu-button>
      <mu-button color="success">Success</mu-button>
      <mu-button color="warning">Warning</mu-button>
      <mu-button color="info">Info</mu-button>
      <mu-button color="error">Error</mu-button>
      <mu-button disabled>disabled</mu-button>
    </mu-container>
    <mu-icon value="home"></mu-icon>
    <mu-alert color="success" v-if="successAlert">
      this is success alert
    </mu-alert>
  </div>
</template>

<script>
  export default {
    name: "about",
    data:function () {
      return{
        successAlert:false
      }
    },
    methods:{
      openCamera(){
        navigator.camera.getPicture(onSuccess,onFail);
        function onSuccess() {
          alert("Camera cleanup success.")
        }

        function onFail(message) {
          alert('Failed because: ' + message);
        }
      },
      showTost(){
        this.$toast.info("哈哈哈")
      }
    }
  }
</script>

<style scoped>
  .button-wrapper {
    text-align: center;
  }
  .button-wrapper .mu-button {
    margin: 8px;
  }
</style>