<template>
<div id="data">
 <v-card>
      <v-card-title>
        Elsolya
        <v-spacer></v-spacer>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      </v-card-title>
<v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
       sort-by="calories"
     show-first-last-page
      show-select
    items-per-page-all-text='Ahmed'
          single-expand
          every-item
      items-per-page-text='Ahmed'
          item-key="name"
           loading
    loading-text="Loading... Please wait"
      dark
      some-items
      mobile
    >
    <template v-slot:item.calories="{ item }">
      <v-chip
        :color="getColor(item.calories)"
        dark
      >

        {{ item.calories }}
      </v-chip>
    </template>
     <v-alert slot="no-results" :value="true" color="error" icon="warning">
          هههه لول اهبل بيدور ع مجنون
        </v-alert>
    </v-data-table>
  </v-card>
</div>
  <!--
       hide-default-footer
        loading
    loading-text="Loading... Please wait"
      :items-per-page="15"
      disable-sort
          show-group-by

    disable-filtering
      loading
      multi-sort
            single-select

    dark
  light
      show-select
      caption="Ahmed Elsolya"
      dark
      disable-pagination
    :single-select="true"
  -->
  <!--
      disable-items-per-page
    :prev-icon = '$prev'
        first-icon="$first"
        calculate-widths
        show-current-page
  -->
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
     methods: {
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },
  }
</script>
