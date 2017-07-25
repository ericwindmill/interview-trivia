<template>
  <div class='AddQuestion'>
    <h2> Submit a Question </h2>
    <main class='AddQuestion--Description'>
      <p> I'm always looking to add more questions to the bank. This is meant to be a learning platform, so if you have knowledge to share, share it!</p> 
      <p> If you'd like to submit a question, email me a file with the following information: </p>
      <ul>
        <li>The Question</li>
        <li>The Answer. Be sure to include any relavant code snippets, images, etc. </li>
        <li>Tags or Categories</li>
        <li>(If applicable) The company that asked you this question.</li>
        <li>(Optional:) A link that you'd like posted back to you. (Github, portfolio site, twitter, or whatever).</li>
      </ul>
      <form action='mailto:eric@ericwindmill.com'>
        <button type='submit' class='AddQuestion--Button'>Email Question</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
 data() {
    return {
      question: '',
      company: '',
      tags: '',
      answer: ''
    }
  }
}
</script>

<style>
  h1, h2, h3, h4, h5 {
    padding: 0;
    margin: 0;
}
  .AddQuestion {
    margin: 30px auto;
    max-width: 800px;
  }

  .AddQuestion--Description {
    font-size: 20px;
    line-height: 1.5em;
  }

  .AddQuestion--Description > ul > li {
    list-style: circle;
    padding-bottom: 10px;
  }

.AddQuestion--Button {
  padding: 20px;
  color: white;
  font-size: 1.2em;
  border: none;
  background-color: var(--blue-purple);
  background-image: linear-gradient(90deg, var(--brand-color), var(--light-blue));
  position: absolute;
  left: 50%;
  transform: translate(-50%)
}

.AddQuestion--Button:hover {
  cursor: pointer;
  background-image: linear-gradient(180deg, var(--light-blue), var(--brand-color));
}



</style>
