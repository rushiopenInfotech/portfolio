export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-6">
          <div className="p-6 glass rounded-lg">
            <h3 className="font-semibold">Rushikesh Yevale</h3>
            <p className="text-slate-300">Full Stack Developer — Pune, India</p>
            <p className="mt-3 text-sm">Phone: <a href="tel:+919172782811" className="text-cyan-300">+91 9172782811</a></p>
            <p className="text-sm">Email: <a href="mailto:rayevale2017@gmail.com" className="text-cyan-300">rayevale2017@gmail.com</a></p>
            <p className="mt-3 text-sm"><a href="https://github.com/rushiopenInfotech" target="_blank" className="text-cyan-300">GitHub</a> · <a href="https://linkedin.com/in/rushikesh-yevale-769b311a9" target="_blank" className="text-cyan-300">LinkedIn</a></p>
          </div>

          <form className="p-6 glass rounded-lg space-y-3">
            <input className="w-full p-3 rounded bg-white/5" placeholder="Your name" />
            <input className="w-full p-3 rounded bg-white/5" placeholder="Your email" />
            <textarea className="w-full p-3 rounded bg-white/5" rows={4} placeholder="Message" />
            <button className="inline-block px-4 py-2 gradient-btn rounded text-white shadow">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
