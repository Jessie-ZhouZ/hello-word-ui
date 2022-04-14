import Vue from 'vue';
import { Button, Form, FormItem, Input, Message } from 'element-ui';
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
// Message需要全局挂载在vue的原型组件上，就可以通过this.$message访问
Vue.prototype.$message = Message;
