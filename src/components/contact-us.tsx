'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSendContactData } from '~/actions/mutations'
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
  const { mutate, isPending } = useSendContactData()
  const form = useForm<contactSchemaType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(data: contactSchemaType) {
    mutate(data, {
      onSuccess: () => form.reset(),
    })
  }

  return (
    <section id="contact" aria-label="contact" className="!mt-8 scroll-mt-24">
      <ScrollReveal variant="fadeUp">
        <SectionHeader title="Get in Touch" />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.2}>
        <div className="flex items-start flex-col md:flex-row w-full gap-8 mt-8">
          <div className="md:max-w-xs size-full space-y-5">
            <p className="text-muted-foreground text-base font-sans leading-relaxed">
              If you have any inquiries, please feel free to reach out. You can contact me via email
              at{' '}
              <CustomLink href={`mailto:${config.social.email}`} aria-label={config.social.email}>
                <span className="text-cyber-cyan">{config.social.email}</span>
              </CustomLink>
            </p>

            <div className="space-y-3">
              <h3 className="font-orbitron text-sm tracking-wide text-foreground/80">
                <span className="text-cyber-cyan/70 mr-1 font-jetbrains text-xs">{'> '}</span>
                Follow me
              </h3>
              <Socials />
            </div>

            {/* Decorative circuit lines */}
            <div className="hidden md:block pt-4" aria-hidden="true">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 border border-cyber-cyan/30 rotate-45" />
                  <span className="h-px flex-1 bg-gradient-to-r from-cyber-cyan/20 to-transparent" />
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="w-1.5 h-1.5 bg-cyber-cyan/20 rounded-full" />
                  <span className="h-px flex-1 bg-gradient-to-r from-cyber-cyan/15 to-transparent" />
                </div>
                <div className="flex items-center gap-2 ml-8">
                  <span className="w-1 h-1 bg-cyber-cyan/15 rounded-full" />
                  <span className="h-px flex-1 bg-gradient-to-r from-cyber-cyan/10 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form
              className="border border-cyber-cyan/10 bg-card/30 backdrop-blur-sm p-5 rounded-md space-y-4 w-full hover:border-cyber-cyan/20 transition-colors duration-300"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <h2 className="text-center text-sm font-jetbrains block sm:hidden text-cyber-cyan/70 tracking-wider uppercase">
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
                          className="bg-transparent border-cyber-cyan/15 focus:border-cyber-cyan/50 focus:shadow-neon-sm placeholder:text-muted-foreground/50 font-sans transition-all duration-300"
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
                          className="bg-transparent border-cyber-cyan/15 focus:border-cyber-cyan/50 focus:shadow-neon-sm placeholder:text-muted-foreground/50 font-sans transition-all duration-300"
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
                        className="bg-transparent border-cyber-cyan/15 focus:border-cyber-cyan/50 focus:shadow-neon-sm placeholder:text-muted-foreground/50 font-sans transition-all duration-300"
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
                        className="bg-transparent border-cyber-cyan/15 focus:border-cyber-cyan/50 focus:shadow-neon-sm placeholder:text-muted-foreground/50 font-sans transition-all duration-300 min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyber-cyan/80 to-cyber-cyan/40 hover:from-cyber-cyan hover:to-cyber-cyan/70 text-background font-orbitron font-semibold tracking-wider text-sm uppercase hover:shadow-neon-cyan transition-all duration-300 border-0"
                disabled={isPending}
              >
                {isPending ? (
                  <span className="animate-pulse">Transmitting...</span>
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
