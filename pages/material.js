
import Button from '@material-ui/core/Button'

import Layout from '../components/common/layout'

export default () => (
  <Layout title="Material Demo">
    <Button variant="contained">Default</Button>
    <br />
    <Button variant="contained" color="primary">Primary</Button>
    <br />
    <Button variant="contained" color="secondary">Secondary</Button>
    <br />
    <Button variant="contained" color="secondary" disabled>Disabled</Button>
    <br />
    <Button variant="contained" href="#contained-buttons">Link</Button>
  </Layout>
)