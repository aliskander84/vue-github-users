<template>
  <el-card class="card">
    <el-form :model="form" :rules="rules" ref="formRef">
      <el-form-item label="Email:" prop="email">
        <el-input v-model="form.email"/>
      </el-form-item>
      <el-form-item label="Password:" prop="password">
        <el-input v-model="form.password" type="password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">Login</el-button>
        <el-button type="warning" @click="reset">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        rules: {
          email: [
            {required: true, message: 'Email can\'t be empty!', trigger: 'blur'},
            {type: 'email', message: 'Please, enter valid email', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Password can\'t be empty!', trigger: 'blur'},
            {min: 6, message: 'Password is too short, no less than 6 symbols!', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submit() {
        this.$refs['formRef'].validate(valid => {
          if (valid) {
            console.group('Auth data:')
            console.log('email:', this.form.email)
            console.log('password:', this.form.password)
            console.groupEnd()
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      reset() {
        this.$refs['formRef'].resetFields()
      }
    }
  }
</script>

<style>
  .card {
    min-width: 300px;
  }
</style>