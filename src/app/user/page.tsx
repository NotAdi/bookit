'use client'
import { useSession } from "next-auth/react"

const page = () => {
    const { data: session } = useSession()
  return (
    <div>
        {JSON.stringify(session)}
    </div>
  )
}

export default page