<template>
  <div class="copyright">
    <div>©2012-2020 zhiweidata.com</div>
    <div>
      <a href="https://beian.miit.gov.cn" target="_blank"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAEuElEQVQ4T32UW0wUdxTGvzM7F/YKC25AQbGtN4TVIEq0gaRWY6sP9mKtt9ZqY6Jpa7RC6kONt9TUBmgxfahNtVHjJfjQRh9ab8RYaotSoqCgpbQYXFwRZXGXnb3M5TS7CCUpOk8zc875zXfm+59DeMYV+r7Uo5OwvMXvWiaAxbwxoRpJFo87VtZ2P62MRgoED899zReQVvzenrHwfGtmSlfAKifyxrgjsfl5D6IlEx+dy3ZHTzg7Lp2inTCHM/4H7D3yUsH+2vFXzjRnWRXJoNnPPUReVghW2UDHQzt++cuD3rDCCwq6+zcvuFPqePdi0zOBHd/Mq153cOaHuRkhccv8NmTYDWgaIaFDVEzohoCDl3NR154ZP/R+w3fjPqj9aEQgHytx3w0q5RU/T9p0/7Fs//yNmxDDUagn2mHjhyBihPtTYV0xAUqOA5/9NBkWkfq3Lmz7OjtdrKS3z/YmwEMtBw7N27Xq2xmfhKJiyobSNpS+0IPwvibYU4NQJgFgINoExPpSIJcVoVN14dNT05Fq02JH11/bl7a6dusQsKuqYFlaVmb+KxWzthERHXjnKoR/AsD+Jlg8DEsGAJ1hxgh6F2AunwpbcTrWHpmNuCEY58qvfv3I/6A+u+xmDfkqvHNIoN8UW0rPuuOl1kf9suPImjpEG/ognrgFiAxLOkAWwOgFOEbQFk+E42UPNhwvhiLh8cFVv3KkP5LGJr9I/i+nvWcyDkmyFNx9YY7S1OlUvlr6BzLCIeh7G9BblA21aHTyv9vru+Bu9kPbOBPIcWD9sWIU5gbVbfPrLVpMUwTCGvJVeq8T0XQA0ZpbM8M/NmZmLCnsxJuFnehpV9Er2CE7LdANgFUdrriKrCk2nG4ai5rGXKyY4w++PuGalZklZlynrqppPGh7W3C8b/vp/BxFNLAj/zJyrSFEAzqipgnBMCC5rLDKjL9jbuxpmY2YbsHeJS3+8dY7Ay2AmbqqvLcAmpJ4VGy2wNqjJY4+VZI2WS5iltkBwWODqRAQNSAwwehRcVmejP1aCVKtunp4dZ0ZDauOJ8DbdLeioEIQhPKk5YTo+U6vfuDSOMcy5RoWUQsMjSHBAIERV1Jg0TScEgvxQ8SLNSW+7kXPN6ebJktJoGlWJBQ2AjRjsG3Z7gxsPFns6gqkWJyIQIcl8SEwJw4tQzZ19Al2eJzx8P6V9XEtHHIP1jJzA/mqvEsJdHLwJQF6D+eE6toz0wCmM82jsLrUD29OP/adHQtBALr7FG3H4tbgKOFeGjNbhmoN463kpPgqC6qJhE1DAYEibk+GJkiiK6oJsMoDC8UY3CumFgl091rY5OQWStoBrs4pu/Hx0Oj5Kr3bCNgFIiGRIAikuTzpqiRLqcOHX49r6uOegGyapvjEWJOJtueUNe/5b/Sqp02GzluZ8CqBnhyB5KDrdrczbHXYXAnLImFVDQdCMjMPwAaU+YlxBiJ9kb25+c+kwvsVeQWGIF0BYBuuZvBelMX+BFCPa/aR4gBUgfTi0VtaW4ZavlfpLWLwDpAw72ngEWAqmC8QsHtM+Y3GoZaHJ17cCXGqMz/fgFDMwCwARcyYSoAB4DYDjQSzQWS62hq+2Tp3J/Th9f8CUeYBBlFmW8AAAAAASUVORK5CYII="
          alt="备案"
        />京ICP备13015804号-3</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.copyright {
  div {
    margin-bottom: 8px;
  }
  div:last-child {
    margin-bottom: 0px;
  }
  a {
    color: inherit;
  }
  img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 12px;
  }
}
</style>
