"use client"

import Image from "next/image"
import { Mail, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/rl-tech-logo.png"
                alt="RL Tech Solutions Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-lg font-bold">RL Tech Solutions</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando ideias em soluções digitais inovadoras. Especialistas em desenvolvimento web, design e
              tecnologia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Rápidos</h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Início
              </button>
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Portfólio
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Sobre
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">contato@rltechsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">@rltechsolutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">WhatsApp: (11) 99999-9999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 RL Tech Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
