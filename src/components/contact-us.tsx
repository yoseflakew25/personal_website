'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Form, FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form'
import config from '~/config'
import { ContactSchema, contactSchemaType } from '~/schema'
import { CustomLink } from './mdx'
import Socials from './socials'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'

const ContactUs = () => {
  const [isPending, setIsPending] = useState(false)
  const form = useForm<contactSchemaType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(data: contactSchemaType) {
    setIsPending(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast.success("I'll be in touch shortly.")
      form.reset()
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section id="contact" aria-label="contact" className="scroll-mt-24">
      <ScrollReveal variant="fadeUp">
        <SectionHeader title="Get in Touch" sectionNumber="06" />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.2}>
        <div className="flex items-start flex-col md:flex-row w-full gap-8 mt-8">
          {/* Left Info Card */}
          <div className="md:max-w-sm size-full relative border border-[hsl(var(--border))] bg-card p-5 space-y-5">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.5)] z-10" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.5)] z-10" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.5)] z-10" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.5)] z-10" />

            {/* Header */}
            <div className="border-b border-[hsl(var(--border))] pb-2">
              <p className="text-blueprint-meta">CONTACT INFORMATION</p>
              <p className="text-blueprint-meta">SHEET · 001</p>
            </div>

            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              If you have any inquiries, please feel free to reach out. You can contact me via email
              at{' '}
              <CustomLink href={`mailto:${config.social.email}`} aria-label={config.social.email}>
                <span className="text-[hsl(var(--blueprint-line))]">{config.social.email}</span>
              </CustomLink>
            </p>

            <div className="space-y-3 pt-1">
              <h3 className="text-blueprint-meta">
                Follow me
              </h3>
              <Socials />
            </div>

            {/* Footer */}
            <div className="border-t border-[hsl(var(--border))] pt-2 flex justify-between">
              <span className="text-blueprint-meta">REV A</span>
              <span className="text-blueprint-meta">OPEN</span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="flex-1 relative border border-[hsl(var(--border))] bg-card">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.5)] z-10" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.5)] z-10" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.5)] z-10" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.5)] z-10" />

            {/* Header */}
            <div className="border-b border-[hsl(var(--border))] px-4 py-2">
              <p className="text-blueprint-meta">TRANSMITTAL FORM</p>
              <p className="text-blueprint-meta">MESSAGE · 001</p>
            </div>

            <Form {...form}>
              <form
                className="p-4 space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Full Name"
                            {...field}
                            className="bg-muted/30 font-mono text-xs focus:bg-muted/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Phone No"
                            {...field}
                            className="bg-muted/30 font-mono text-xs focus:bg-muted/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                       <FormControl>
                        <Input
                          type="text"
                          placeholder="Email"
                          {...field}
                          className="bg-muted/30 font-mono text-xs focus:bg-muted/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          {...field}
                          className="bg-muted/30 font-mono text-xs min-h-[100px] focus:bg-muted/50 resize-y"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="outline"
                  className="w-full group"
                  disabled={isPending}
                >
                  {isPending ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Message</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  )}
                </Button>

                {/* Footer */}
                <div className="border-t border-[hsl(var(--border))] pt-2 flex justify-between">
                  <span className="text-blueprint-meta">REV A</span>
                  <span className="text-blueprint-meta">ALL FIELDS REQUIRED</span>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default ContactUs
