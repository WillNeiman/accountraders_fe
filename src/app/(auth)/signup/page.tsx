'use client'

import { useRouter } from 'next/navigation'
import SignupModal from '@/components/auth/SignupModal'

export default function SignupPage() {
  const router = useRouter()

  return (
    <SignupModal 
      isOpen={true} 
      onClose={() => router.push('/')}
    />
  )
} 