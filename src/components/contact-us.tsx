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
    <section id="contact" aria-label="contact" className="!mt-8 scroll-mt-24">
      <ScrollReveal variant="fadeUp">
        <SectionHeader title="Get in Touch" titleClassName="text-primary" />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.2}>
        <div className="flex items-start flex-col md:flex-row w-full gap-8 mt-8">
          <div className="md:max-w-xs size-full space-y-5">
            <p className="text-muted-foreground text-base font-sans leading-relaxed">
              If you have any inquiries, please feel free to reach out. You can contact me via email
              at{' '}
              <CustomLink href={`mailto:${config.social.email}`} aria-label={config.social.email}>
                <span className="text-primary">{config.social.email}</span>
              </CustomLink>
            </p>

            <div className="space-y-3">
              <h3 className="font-sans font-medium text-sm tracking-wide text-foreground/80">
                Follow me
              </h3>
              <Socials />
            </div>
          </div>

          <Form {...form}>
            <form
              className="border border-border/40 bg-card/50 backdrop-blur-sm p-5 rounded-lg space-y-4 w-full hover:border-primary/30 hover:shadow-[0_0_20px_hsl(var(--primary)/0.05)] transition-all duration-500"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <h2 className="text-center text-sm font-sans block sm:hidden text-primary/70 tracking-wider font-semibold">
                Send a Message
              </h2>
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
                          className="bg-transparent border-border focus:border-primary/50 placeholder:text-muted-foreground/50 font-sans transition-all duration-300"
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
                          className="bg-transparent border-border focus:border-primary/50 placeholder:text-muted-foreground/50 font-sans transition-all duration-300"
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
                        className="bg-transparent border-border focus:border-primary/50 placeholder:text-muted-foreground/50 font-sans transition-all duration-300"
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
                        className="bg-transparent border-border focus:border-primary/50 placeholder:text-muted-foreground/50 font-sans transition-all duration-300 min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full text-primary-foreground font-sans font-medium tracking-wide text-sm transition-all duration-300 border-0"
                disabled={isPending}
              >
                {isPending ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default ContactUs
