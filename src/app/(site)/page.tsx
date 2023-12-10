import { getCountries } from '@/actions/getCountries'
import { PageContent } from './components/PageContent'

export const revalidate = 3600

export default async function Home() {
  const data = await getCountries()

  return <PageContent data={data} />
}
