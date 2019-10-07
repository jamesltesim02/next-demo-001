import Layout from '../components/common/layout'

// export default () => (
//   <Layout title="About page.">
//     This is about page.
//   </Layout>
// )

const About = ({ stars }) => (
  <Layout title="About page.">
    This is about page. stars: {stars}
  </Layout>
)

About.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default About