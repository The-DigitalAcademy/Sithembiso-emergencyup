import Layout from '../components/Layout'

const HomePage = () => {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col">
        <div className="header mt-8">Statistics</div>
        <div className="flex w-full justify-around gap-4 px-4">
          <div className="stats shadow flex-1">
            <div className="stat text-center">
              <div className="stat-title">Categories</div>
              <div className="stat-value text-primary">89</div>
            </div>
          </div>
          <div className="stats shadow flex-1">
            <div className="stat text-center">
              <div className="stat-title">Expressions</div>
              <div className="stat-value text-primary">89</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default HomePage