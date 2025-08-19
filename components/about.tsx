import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Desenvolvimento Full-Stack",
    description:
      "Criamos soluções completas, do frontend ao backend, utilizando as tecnologias mais modernas do mercado.",
  },
  {
    icon: Palette,
    title: "Design & UX/UI",
    description: "Interfaces intuitivas e atrativas que proporcionam a melhor experiência para seus usuários.",
  },
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Aplicações rápidas e eficientes, otimizadas para todos os dispositivos e navegadores.",
  },
  {
    icon: Users,
    title: "Suporte Dedicado",
    description: "Acompanhamento completo do projeto, desde a concepção até a entrega e manutenção.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a RL Tech Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa especializada em soluções digitais inovadoras. Nossa missão é transformar ideias em
            realidade através da tecnologia, oferecendo serviços de alta qualidade que impulsionam o crescimento dos
            nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Pronto para transformar sua ideia em realidade?</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar a levar seu projeto para o próximo nível.
              Oferecemos consultoria gratuita para entender suas necessidades e propor a melhor solução.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
