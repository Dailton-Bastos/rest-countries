'use client'

import { PageError } from '@/components/PageError'

export default function Error({ reset }: { reset: () => void }) {
  return <PageError reset={reset} />
}
