<template>
  <div id="wrap">
    <header-menu color="white"></header-menu>
    <main id="main">
      <section id="aboutCont">
        <div class="container">
          <div class="titleWrap">
            dd
          </div>
          <div class="aboutCont">
            <div v-for="(item, i) in items" v-bind:key=i>
              <div class="aiLeft">
                <img v-bind:src="item.image" v-bind:alt="item.title" />
              </div>
              <div class="aiRight">
                <h2>{{item.title}}</h2>
                <p>{{item.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'

export default {
  components: {
    HeaderMenu
  },
  data: () => ({
    items: [
      {
        title: '행동하는 사람',
        desc: '젊은 베르테르의 슬픔의 저자 요한 볼프강 폰 괴테는 생전에 이런 말을 남겼습니다. “아는 것으로 충분하지 않다. 적용할 줄 알아야 한다. 의지만으로는 충분하지 않다. 행동으로 옮길 수 있어야 한다.” 이 문구를 처음 읽고 행동하지 않고 지나쳐버린 일이 너무 많다는 것을 느꼈습니다. 이후로는 배운 것을 적용할 줄 아는 사람, 의지를 행동으로 옮길 수 있는 사람이 되기 위해 언제나 노력하고 있습니다.',
        image: '../img/aboutImg01.jpg'
      },
      {
        title: '조율하는 사람',
        desc: '저는 대학교 시절 오케스트라 동아리에서 활동했습니다. 제가 선택한 악기는 비올라였습니다. 비올라는 바이올린과 첼로의 중간에 위치하는 악기로, 그 두 악기를 조율해주는 역할을 합니다. 크게 눈에 띄지는 않지만 없어서는 안 될 악기입니다. 저도 비올라처럼  웹퍼블리셔로서 웹디자이너와 개발자 사이를 조율하는 역할을 하고 싶습니다.',
        image: '../img/aboutImg02.jpg'
      },
      {
        title: '새롭게 찾은 적성',
        desc: '중학교 수업시간에 잠깐 HTML을 다뤄 보았을 뿐, 그 이후에는 코딩에 대해 잊고 살았습니다. 하지만 취업을 위해 여기저기 상담을 받아보다가 우연히 웹퍼블리셔라는 직업에 대해 알게 되었고, 그때부터 코딩을 배우기 시작했습니다. 적성에 맞을까 하는 걱정을 했던 것도 잠시, 왜 진작 하지 않았나 싶을 정도로 재미를 느꼈습니다. 아직 걸음마 단계지만, 앞으로 실력을 더욱 발전시켜 나가고 싶습니다.',
        image: '../img/aboutImg03.jpg'
      }
    ]
  })
}
</script>
