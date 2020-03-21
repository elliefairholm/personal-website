<template>
  <div class="selected-blog-container">
    <div class="blog-info">
      <div class="title">Hello World!</div>
      <div class="date"></div>
    </div>
    <div class="blog-content">
      I’m a Barcelona based female developer who has just graduated from Codeworks, an intensive coding bootcamp (of which I will talk about in a subsequent post). I’ve been wanting to start a blog for a long time now. but I was never sure what I wanted it to be about. After finishing Codeworks a couple of weeks ago, I decided that I wanted somewhere where I could record of my growth as a software developer. And so here we are.
      <br />
      <br />I’m really excited at the moment for all the upcoming personal projects that I have in mind. This website, including this blog, has been my first venture. I used this site as an opportunity to learn Vue. At Codeworks I was introduced to React and Angular, and since finishing I have heard many a thing about Vue and wanted to try it out for myself and see what all the fuss is about. The best way, I think, to truly understand a technology is to use it in a project. So when it came to thinking what front-end framework I wanted to use for this website, Vue was the obvious answer.
      <br />
      <br />I’m super keen to learn new technologies and know that i have only just scratched the surface with what I learnt at Codeworks. This is why I would love to do a series of blogs called:
      <br />
      <br />‘What I learnt this week.’
      <br />
      <br />The content is self explanatory; each week I will be publishing a post about what I learnt that week. It can be anything, from the difference between ‘const’ and ‘let’, to the beginnings of a whole new language. These blogs will give me an impetuous to keep learning and will allow me to keep track of my progress.
      <br />
      <br />I will also aim to sporadically write about any personal developments, such as job developments and any personal projects that I’m doing. I hope that the discipline of writing will help me get myself organised and give me a goal to reach every week. It’s easy to fall into the trap of being lazy and having the ‘I’ll do it later’ attitude. This is something I’ve realised gives you no benefits, and just organising your time well can help you achieve great things, whether big or small.
      <br />
      <br />So here goes.
      <br />
      <br />Hello World, and welcome to my blog.
    </div>
  </div>
</template>

<script>
export default {
  name: "selected-blog",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
