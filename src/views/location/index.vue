<template>
  <div v-if="location.name" class="location">
    <div class="header">
      <div class="row">
        <div class="left">
          <Heading h="h2">{{ location.name }}</Heading>
        </div>
        <div class="right">
          <Button @click="showPostModal = !showPostModal">Написать</Button>
          <Button @click="updatePosts">Обновить</Button>
        </div>
      </div>
      <div v-if="showPostModal" class="post-form">
        <textarea 
          name="text" 
          id="text"
          placeholder="Введите ваш пост..."
          v-model="text"
          minlength="100"
          class="textarea-form"
        ></textarea>
        <div class="btns">
          <Button>Предпросмотр</Button>
          <Button @click="sendPost">Опубликовать</Button>
        </div>
      </div>
    </div>
    <Posts :posts="location.posts" />
  </div>
</template>

<script>
// @ui-kit
import Heading from '@/ui-kit/Heading.vue';
import Button from '@/ui-kit/Button.vue';

// @components
import Posts from '@/components/posts';

// @services
import Fetcher from '@/Fetcher';

export default {
  name: 'LocationView',
  data() {
    return {
      location: {},
      showPostModal: false,
      text: 'В то время как такие разговоры происходили в приемной и в княжниной комнатах, карета с Пьером (за которым было послано) и с Анной Михайловной (которая нашла нужным ехать с ним) въезжала во двор графа Безухова. Когда колеса кареты мягко зазвучали по соломе, настланной под окнами, Анна Михайловна, обратившись к своему спутнику с утешительными словами, убедилась в том, что он спит в углу кареты, и разбудила его. Очнувшись, Пьер за Анной Михайловной вышел из кареты и тут только подумал о том свидании с умирающим отцом, которое его ожидало. Он заметил, что они подъехали не к парадному, а к заднему подъезду. В то время как он сходил с подножки, два человека в мещанской одежде торопливо отбежали от подъезда в тень стены. Приостановившись, Пьер разглядел в тени дома с обеих сторон еще несколько таких же людей. Но ни Анна Михайловна, ни лакей, ни кучер, которые не могли не видеть этих людей, не обратили на них внимания. Стало быть, это так нужно, решил сам с собой Пьер и прошел за Анною Михайловной. Анна Михайловна поспешными шагами шла вверх по слабо освещенной узкой каменной лестнице, подзывая отстававшего за ней Пьера, который, хотя и не понимал, для чего ему надо было вообще идти к графу, и еще меньше, зачем ему надо было идти по задней лестнице, но, судя по уверенности и поспешности Анны Михайловны, решил про себя, что это было необходимо нужно. На половине лестницы чуть не сбили их с ног какие-то люди с ведрами, которые, стуча сапогами, сбегали им навстречу. Люди эти прижались к стене, чтобы пропустить Пьера с Анною Михайловной, и не показали ни малейшего удивления при виде их.',
    }
  },
  components: {
    Posts,
    Heading,
    Button,
  },
  methods: {
    async updatePosts() {
      this.location = await Fetcher
        .get(`/location/${this.$route.params.name}`);
    },
    async sendPost() {
      await Fetcher.post('/post/add', {
        locationName: this.$route.params.name,
        text: this.text,
      }).catch(err => {
        console.log(err);
      })
      this.updatePosts();
    },
  },
  mounted() {
    this.updatePosts();
  },
}
</script>

<style scoped>
.header {
  background: wheat;
  padding: 0 6px;
  border-radius: 6px;
  border: 2px solid thistle;
}
.row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.left {
  width: 50%;
}
.right {
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.post-form {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 6px;
}
.textarea-form {
  box-sizing: border-box;
  width: 100%;
  resize: vertical;
  height: 400px;
  border: 2px solid thistle;
  border-radius: 6px;
  padding: 6px;
  background: papayawhip;
  color: brown;
  font-size: 16px;
  text-indent: 1.5em;
}
.btns {
  margin: 6px auto;
  display: flex;
  justify-content: right;
  gap: 8px;
}
</style>