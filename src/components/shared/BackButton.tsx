import { useRouter } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

interface BackButtonProps {
    label: string
}

export default function BackButton({ label }: BackButtonProps) {
    const router = useRouter()

    return (
        <button
            type="button"
            onClick={() => router.history.back()}
            className="flex justify-start w-auto bg-transparent"
        >
            <ArrowLeft size={20} />
            <span className="text-secondary">{label}</span>
        </button>
    )
}
