import { useState } from 'react'

import Greeting from '@/components/Greeting'
import ImageLink from '@/components/ImageLink/ImageLink'

const gitRawMediaUrl = 'https://raw.githubusercontent.com/devops-wien/devops-wien-assets/main/images/'

export default function IndexPage() {
  const [city] = useState(process.env.NEXT_PUBLIC_ZONE)
  const [country] = useState(setFlag(process.env.NEXT_PUBLIC_ZONE))

  // TODO countdown 3 sec + reload
  /*useEffect(() => {
    setTimeout(() => {
      setCity(process.env.NEXT_PUBLIC_ZONE)
      setCountry(setFlag(city))
    }, 5000)
  })*/
  return (
    <div>
      <div className="py-20">
        <Greeting target={city + ',' + country} />
        <div className="grid grid-cols-3 relative h-full w-full gap-8 p-8">
          <ImageLink
            imageSrc={gitRawMediaUrl + 'exoscale_event_small.png'}
            href={'https://events.exoscale.com/exoscale-acceler8-vienna'}
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'dockerhub_image_small.png'}
            href={'https://hub.docker.com/r/devopswien/docker-nextjs-demo'}
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'terraform_registries_small.png'}
            href={'https://registry.terraform.io/search/modules?q=devops.wien'}
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'terraform_workspaces_small.png'}
            href={'https://app.terraform.io/app/DEV-devops-wien/workspaces/'}
          />
          <ImageLink imageSrc={gitRawMediaUrl + 'git_repo_small.png'} href={'https://github.com/devops-wien'} />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'postman_flows_small.png'}
            href={
              'https://devops-vienna.postman.co/workspace/devops.wien---Team-Workspace~1da23a1d-340c-48cd-88e2-79c5d84e8198/overview'
            }
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'slack_notifications_small.png'}
            href={'https://devopswien.slack.com/'}
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'jira_github_integration_small.png'}
            href={'https://devops-wien.atlassian.net/'}
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'cloudflare_dns_integration_small.png'}
            href={'https://dash.cloudflare.com/91b3d10a2c41e59647e3ffbec053d628/devops.wien/dns'}
          />
          <ImageLink
            imageSrc={gitRawMediaUrl + 'exoscale_sks_instances_small.png'}
            href={'https://portal.exoscale.com/u/dev-devopswien/compute/instances'}
          />
        </div>
      </div>
    </div>
  )
}

function setFlag(city: string) {
  switch (city) {
    case 'at-vie-1':
      return '🇦🇹'
    case 'at-fra-1':
    case 'de-muc-1':
      return '🇩🇪'
    case 'ch-dk-2':
    case 'ch-gva-2':
      return '🇨🇭'
    case 'bg-sof-1':
      return '🇧🇬'
    default:
      return '🏁'
  }
}
