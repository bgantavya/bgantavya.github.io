import { useEffect, useRef } from 'react'

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas!.width = window.innerWidth
    canvas!.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = canvas!.width*0.15
    const connectionDistance = 150

    let mouseX = -100
    let mouseY = -100

    class Particle {
      x: number
      y: number
      vx: number
      vy: number

      constructor(x?: number, y?: number) {
        this.x = x || Math.random() * canvas!.width
        this.y = y || Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 1
        this.vy = (Math.random() - 0.5) * 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, 3, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(255, 0, 0, 1)'
        ctx!.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function drawConnections() {
      particles.forEach((particle) => {
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx!.beginPath()
            ctx!.moveTo(particle.x, particle.y)
            ctx!.lineTo(otherParticle.x, otherParticle.y)
            ctx!.strokeStyle = `rgba(255, 0, 255, ${0.7 - distance / connectionDistance})`
            ctx!.stroke()
          }
        })
      })
    }

    function drawMouseTrace() {
      particles.push(new Particle(mouseX, mouseY))
      if (particles.length > particleCount * 2) particles.shift()
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      drawConnections()

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      drawMouseTrace() // Add trace at mouse position
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black-700"
    />
  )
}