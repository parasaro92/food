<template>
<div class="row">
  <v-container>
    <div class="boxes d-flex">
      <v-checkbox type='checkbox' @change="selection(carrier)" value="smith" v-model="carrier" label="Smith"></v-checkbox>
      <v-checkbox type='checkbox' @change="selection(carrier)" v-model="carrier" value="john" label="John"></v-checkbox>
      <v-checkbox type='checkbox' @change="selection(carrier)" v-model="carrier" value="george" label="George"></v-checkbox>
    </div>
    <v-flex xs12 sm6 d-flex>
      <v-select
        :items="selected"
        item-text = 'carrier'
        label="Carrier"
      ></v-select>
    </v-flex>
    <v-flex xs12 sm6 d-flex>
      <v-select
        :items="selected"
        item-text = 'name'
        label="Cuisine Name"
      ></v-select>
    </v-flex>
  </v-container>
</div>
</template>

<script>

export default {
  name: 'Algo',
  data: () => ({
    carrier: [],
    carriers: [
      {
        name: 'South Indian',
        carrier: 'Zomato',
        provider: ['smith', 'john']
      },
      {
        name: 'North Indian',
        carrier: 'Food Panda',
        provider: ['george']
      },
      {
        name: 'Italian',
        carrier: 'Swiggy',
        provider: ['smith', 'john']
      },
      {
        name: 'Chinese',
        carrier: 'Keventers',
        provider: ['smith']
      },
      {
        name: 'Organic',
        carrier: 'Fresh menu',
        provider: ['george', 'john']
      },
      {
        name: 'South Indian',
        carrier: 'Foody',
        provider: ['george']
      },
      {
        name: 'South Indian',
        carrier: 'Zomato',
        provider: ['john']
      }
    ],
    selected: []
  }),
  methods: {
    selection (carrier) {
      /* eslint-disable */
      this.selected = this.carriers.filter(item => {
        let providersArr =  item.provider.filter(dt => {
          let carrierArr = carrier.filter(data => {
            return data === dt
          })
          return carrierArr.length
        })
        return providersArr.length
      })
      /* eslint-disable */
    }
  },
  created () {
    this.selected = this.carriers
  }
}
</script>

<style lang="scss">
.cont {
  width: 100px;
  height: 100px;
}
</style>

