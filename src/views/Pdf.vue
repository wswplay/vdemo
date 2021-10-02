<template>
  <div class="Pdf">
    <!-- <a href="/pdf/nanzhi.pdf">点击到pdf</a>
    {{currentPage}} / {{numPages}}
    <pdf
      :src="url"
      v-for="i in numPages"
			:key="i"
			:page="i"
      @page-loaded="currentPage = $event"
    ></pdf> -->
    <div class="iframe-demo">样式调整</div>
    <iframe
     width="620px"
     height="600px"
     src="/web/viewer.html?file=http://localhost:8081/pdf/nanzhi.pdf"
    ></iframe>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  },
  async mounted() {
    await pdf.createLoadingTask(this.url).promise.then(pdf => {
      console.log(pdf)
      this.numPages = pdf.numPages;
    })  
  },
  data() {
    return {
      url: '/pdf/nanzhi.pdf',
      currentPage: 0,
      numPages: 0
    }
  }
}
</script>

<style lang="less" scoped>
.Pdf {
  height: 100vh;
  .iframe-demo {
    height: 30px;
    line-height: 30px;
    margin-bottom: 30px;
  }
  iframe {
    box-shadow: 0px 0px 8px 1px #999;
  }
}
</style>