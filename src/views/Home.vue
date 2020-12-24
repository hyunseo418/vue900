<template>
  <div id="wrap">
      <main id="mainCont">
          <section id="mainCont">
              <div class="mainCont">
                <div v-for="text in texts" v-bind:key="text.title">
                  {{text.title}}
                </div>
              </div>
          </section>
      </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      texts: [
        { title: 'BE GENTLE' },
        { title: 'WITH YOURSELF,' },
        { title: 'YOU’RE DOING' },
        { title: 'THE BEST YOU CAN' }
      ]
    }
  }
}
</script>

<style lang="scss">
  .mainCont > div:nth-child(4){
    background: #fff;
    color: #000;
    display: inline-block;
  }
</style>
