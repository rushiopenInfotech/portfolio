import { MessageCircle } from 'lucide-react'

export default function FloatingChat() {
  const openContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button onClick={openContact} aria-label="Open contact" className="fixed right-5 bottom-20 bg-cyan-600 text-white p-3 rounded-full shadow-lg">
      <MessageCircle size={18} />
    </button>
  )
}
