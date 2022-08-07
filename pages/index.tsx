import { useEffect, useState } from 'react'

import Greeting from '@/components/Greeting'
import ImageLink from '@/components/ImageLink/ImageLink'

const gitRawMediaUrl = 'https://raw.githubusercontent.com/devops-wien/devops-wien-assets/main/images/'

export default function IndexPage() {
  const [city, setCity] = useState('Vienna')
  const [country, setCountry] = useState('🇦🇹')

  useEffect(() => {
    setTimeout(() => {
      setCity('Munic')
      setCountry('🇩🇪')
    }, 5000)
  })
  return (
    <div>
      <div className="py-20">
        <Greeting target={city + ',' + country} />
        <div className="grid grid-cols-3 relative h-full w-full gap-8 p-8">
          <ImageLink
            imageSrc={gitRawMediaUrl + 'exoscale_event.png'}
            href={'https://events.exoscale.com/exoscale-acceler8-vienna'}
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'terraform_registries.png'}
            href={'https://registry.terraform.io/search/modules?q=devops.wien'}
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'terraform_workspaces.png'}
            href={'https://app.terraform.io/app/DEV-devops-wien/workspaces/'}
          />
          <ImageLink imageSrc={gitRawMediaUrl + 'git_repo.png'} href={'https://github.com/devops-wien'} />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'postman_flows.png'}
            href={
              'https://devops-vienna.postman.co/workspace/devops.wien---Team-Workspace~1da23a1d-340c-48cd-88e2-79c5d84e8198/overview'
            }
          />
          <ImageLink imageSrc={gitRawMediaUrl + 'slack_notifications.png'} href={'https://devopswien.slack.com/'} />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'jira_github_integration.png'}
            href={'https://devops-wien.atlassian.net/'}
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'cloudflare_dns_integration.png'}
            href={'https://dash.cloudflare.com/91b3d10a2c41e59647e3ffbec053d628/devops.wien/dns'}
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'exoscale_sks_instances.png'}
            href={'https://portal.exoscale.com/u/dev-devopswien/compute/instances'}
          />
        </div>
      </div>
    </div>
  )
}
