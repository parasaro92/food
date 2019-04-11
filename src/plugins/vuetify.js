import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VImg,
  VCheckbox,
  VSelect,
  VCombobox,
  VSnackbar,
  VForm,
  VTextField,
  transitions,
  VDatePicker,
  VMenu,
  VDataTable
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VImg,
    VCheckbox,
    VSelect,
    VCombobox,
    VSnackbar,
    VForm,
    VTextField,
    transitions,
    VDatePicker,
    VMenu,
    VDataTable
  },
  iconfont: 'md'
})
