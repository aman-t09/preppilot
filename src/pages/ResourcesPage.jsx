import ResourceList from '../components/ResourceList'
import { RESOURCES } from '../data/defaults'

function ResourcesPage() {
  return (
    <>
      <h1 className="page-title">Resources</h1>
      <p className="page-subtitle">Hand-picked places to learn and practice.</p>
      <section className="card">
        <ResourceList resources={RESOURCES} />
      </section>
    </>
  )
}

export default ResourcesPage