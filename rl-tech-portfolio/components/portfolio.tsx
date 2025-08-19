import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Moderno",
    description: "Plataforma completa de vendas online com painel administrativo e integração de pagamentos.",
    image: "/modern-ecommerce-interface.png",
    tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
    category: "Desenvolvimento Web",
  },
  {
    title: "App Mobile Fitness",
    description: "Aplicativo de treinos personalizados com tracking de progresso e comunidade.",
    image: "/fitness-app-interface.png",
    tags: ["React Native", "Firebase", "Redux", "UI/UX"],
    category: "Desenvolvimento Mobile",
  },
  {
    title: "Dashboard Analytics",
    description: "Painel de controle para análise de dados em tempo real com visualizações interativas.",
    image: "/analytics-dashboard.png",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    category: "Data Visualization",
  },
  {
    title: "Sistema CRM",
    description: "Gestão completa de relacionamento com clientes para empresas de médio porte.",
    image: "/crm-customer-management-interface.png",
    tags: ["Angular", "TypeScript", "MySQL", "Docker"],
    category: "Sistemas Empresariais",
  },
  {
    title: "Landing Page Corporativa",
    description: "Site institucional responsivo com foco em conversão e experiência do usuário.",
    image: "/corporate-landing-page.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Figma"],
    category: "Design & Frontend",
  },
  {
    title: "API RESTful",
    description: "API robusta para integração de sistemas com documentação completa e testes.",
    image: "/api-documentation-interface-code.png",
    tags: ["Node.js", "Express", "JWT", "Swagger"],
    category: "Backend Development",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Portfólio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos, cada um com soluções únicas e inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </div>
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                    <Github className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
