"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram, MessageCircle, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create email body
    const emailBody = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`
    // Open email client
    window.open(`mailto:contato@rltechsolutions.com?subject=Proposta de Trabalho&body=${emailBody}`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar! Entre em contato através dos canais abaixo ou envie uma mensagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envie sua Proposta</CardTitle>
              <CardDescription>Preencha o formulário abaixo e entraremos em contato em breve.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Descreva seu projeto ou proposta..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
                    <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">Envie um email direto</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => window.open("mailto:contato@rltechsolutions.com?subject=Proposta de Trabalho")}
                  >
                    Enviar Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                    <Instagram className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Instagram</h3>
                    <p className="text-muted-foreground">Siga nosso trabalho</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://instagram.com/rltechsolutions", "_blank")}
                  >
                    Seguir
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                    <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">WhatsApp</h3>
                    <p className="text-muted-foreground">Conversa rápida e direta</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma proposta de trabalho.",
                        "_blank",
                      )
                    }
                  >
                    Chamar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Horário de Atendimento</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>9h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9h às 14h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
