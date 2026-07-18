import ContactUs from '~/components/contact-us'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'

export const metadata = getSEOTags({
    title: `Contact - ${config.appName}`,
    description: 'Get in touch with me for inquiries, collaborations, or just to say hi.',
    canonicalUrlRelative: '/contact',
})

const ContactPage = () => {
    return (
        <div className="!mt-8 space-y-0 relative">
            <section className="pb-12">
                <ContactUs />
            </section>
        </div>
    )
}

export default ContactPage
